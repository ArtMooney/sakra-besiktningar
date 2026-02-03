#!/bin/bash

# R2 Download Script
# Downloads all files from remote R2 bucket to local directory

BUCKET_NAME="sakra-besiktningar"
LOCAL_DOWNLOAD_PATH="./r2-downloads"

echo "📥 R2 Download Script"
echo "====================="
echo "Bucket: $BUCKET_NAME"
echo "Local directory: $LOCAL_DOWNLOAD_PATH"
echo ""

# Create local directory if it doesn't exist
mkdir -p "$LOCAL_DOWNLOAD_PATH"

# Fetch list of all files in remote bucket
echo "Fetching file list from remote bucket..."
FILE_LIST=$(wrangler r2 object list "$BUCKET_NAME" --remote 2>/dev/null | grep -E '^\s+' | awk '{print $1}')

if [ -z "$FILE_LIST" ]; then
    echo "❌ No files found in bucket or error fetching list"
    exit 1
fi

# Count number of files
TOTAL_FILES=$(echo "$FILE_LIST" | wc -l | tr -d ' ')
echo "Found $TOTAL_FILES files to download"
echo ""

# Ask about overwriting
read -p "Overwrite existing local files? (y/N): " OVERWRITE
echo ""

CURRENT=0
DOWNLOADED=0
SKIPPED=0

# Download each file
while IFS= read -r file; do
    CURRENT=$((CURRENT + 1))

    # Create local file path
    LOCAL_FILE="$LOCAL_DOWNLOAD_PATH/$file"
    LOCAL_DIR=$(dirname "$LOCAL_FILE")

    # Create subdirectories if needed
    mkdir -p "$LOCAL_DIR"

    # Check if file already exists locally
    if [ -f "$LOCAL_FILE" ] && [ "$OVERWRITE" != "y" ] && [ "$OVERWRITE" != "Y" ]; then
        echo "[$CURRENT/$TOTAL_FILES] ⏭️  Skipping (already exists): $file"
        SKIPPED=$((SKIPPED + 1))
        continue
    fi

    # Download the file
    echo "[$CURRENT/$TOTAL_FILES] ⬇️  Downloading: $file"
    if wrangler r2 object get "$BUCKET_NAME/$file" --file="$LOCAL_FILE" --remote 2>/dev/null; then
        DOWNLOADED=$((DOWNLOADED + 1))
    else
        echo "    ❌ Failed to download: $file"
    fi
done <<< "$FILE_LIST"

echo ""
echo "✅ Done!"
echo "   Downloaded: $DOWNLOADED files"
echo "   Skipped: $SKIPPED files"
echo "   Total: $TOTAL_FILES files"
