export async function sendEmail(from, to, subject, message, apiKey) {
  const base64Encode = (str) => {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(str).toString("base64");
    }

    return btoa(str);
  };

  let headersList = {
    Accept: "*/*",
    Authorization: "Basic " + base64Encode("api:" + apiKey),
  };

  let bodyContent = new FormData();
  bodyContent.append("from", from);
  bodyContent.append("to", to);
  bodyContent.append("subject", subject);
  bodyContent.append("text", message);

  let response = await fetch(
    "https://api.eu.mailgun.net/v3/mg.framecore.se/messages",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    },
  );

  if (!response.ok) {
    return { error: `HTTP error! status: ${response.status}` };
  }

  return await response.json();
}
