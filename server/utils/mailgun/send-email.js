import { uniBase64 } from "../../utils/uni-base-64.js";

export async function sendEmail(from, to, subject, message, apiKey) {
  let headersList = {
    Accept: "*/*",
    Authorization: "Basic " + uniBase64("api:" + apiKey),
  };

  return { status: "test ok", data: { to, from, apiKey } };

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
