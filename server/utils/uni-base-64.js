export function uniBase64(str) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str).toString("base64");
  }

  return btoa(str);
}
