export async function checkLogin(headers, userName, userPass) {
  const authHeader = headers.get("Authorization");
  if (!authHeader) return false;

  const decodedString = Buffer.from(
    authHeader.replace("Basic ", ""),
    "base64",
  ).toString();
  const [email, password] = decodedString.split(":");

  return userName === email && userPass === password;
}
