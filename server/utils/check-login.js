export async function checkLogin(headers, userName, userPass) {
  const authHeader = headers.authorization || headers.Authorization;

  if (!authHeader) return false;

  const decodedString = atob(authHeader.replace("Basic ", ""));
  const [email, password] = decodedString.split(":");

  return userName === email && userPass === password;
}
