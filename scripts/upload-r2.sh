#!/bin/bash

# R2 Upload Script
# Uploads all files from local directory to remote R2 bucket

BUCKET_NAME="sakra-besiktningar"
LOCAL_UPLOAD_PATH="./r2-downloads"

echo "📤 R2 Upload Script"
echo "==================="
echo "Bucket: $BUCKET_NAME"
echo "Local directory: $LOCAL_UPLOAD_PATH"
echo ""

# Check if local directory exists
if [ ! -d "$LOCAL_UPLOAD_PATH" ]; then
    echo "❌ Local directory does not exist: $LOCAL_UPLOAD_PATH"
    exit 1
fi

# Find all files in local directory
echo "Searching for files in local directory..."
FILE_LIST=$(find "$LOCAL_UPLOAD_PATH" -type f)

if [ -z "$FILE_LIST" ]; then
    echo "❌ No files found in local directory"
    exit 1
fi

# Count number of files
TOTAL_FILES=$(echo "$FILE_LIST" | wc -l | tr -d ' ')
echo "Found $TOTAL_FILES files to upload"
echo ""

# Ask about overwriting
read -p "Overwrite existing files in remote bucket? (y/N): " OVERWRITE
echo ""

CURRENT=0
UPLOADED=0
SKIPPED=0

# Upload each file
while IFS= read -r local_file; do
    CURRENT=$((CURRENT + 1))

    # Remove local directory prefix to get R2 path
    R2_PATH="${local_file#$LOCAL_UPLOAD_PATH/}"

    # Check if file already exists in remote (if we shouldn't overwrite)
    if [ "$OVERWRITE" != "y" ] && [ "$OVERWRITE" != "Y" ]; then
        # Try to fetch the file to see if it exists (if it exists we get exit code 0)
        if wrangler r2 object get "$BUCKET_NAME/$R2_PATH" --remote --file=/dev/null 2>/dev/null; then
            echo "[$CURRENT/$TOTAL_FILES] ⏭️  Skipping (already exists): $R2_PATH"
            SKIPPED=$((SKIPPED + 1))
            continue
        fi
    fi

    # Upload the file
    echo "[$CURRENT/$TOTAL_FILES] ⬆️  Uploading: $R2_PATH"
    if wrangler r2 object put "$BUCKET_NAME/$R2_PATH" --file="$local_file" --remote 2>/dev/null; then
        UPLOADED=$((UPLOADED + 1))
    else
        echo "    ❌ Failed to upload: $R2_PATH"
    fi
done <<< "$FILE_LIST"

echo ""
echo "✅ Done!"
echo "   Uploaded: $UPLOADED files"
echo "   Skipped: $SKIPPED files"
echo "   Total: $TOTAL_FILES files"
