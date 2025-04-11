export async function sendEmail(from, to, subject, message, apiKey) {
  let headersList = {
    Accept: "*/*",
    Authorization: "Basic " + Buffer.from("api:" + apiKey).toString("base64"),
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
