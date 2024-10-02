export const sendContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    //     Authorization: `Bearer ${process.env.MAIL_PASSWORD}`,
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
