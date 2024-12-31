import { enqueueSnackbar } from "notistack";
import { ContactRoutePayload } from "../app/api/contact/route";

export const contactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<ContactRoutePayload> =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    cache: "no-cache",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
    .then(async (res) => {
      if (!res.ok) throw new Error("Failed to send message");
      enqueueSnackbar("send email successfully", {
        variant: "info",
        autoHideDuration: 5000,
      });
      return res.json();
    })
    .catch((error) => {
      enqueueSnackbar("send email failed", {
        variant: "error",
        autoHideDuration: 5000,
      });
      throw error;
      // throw new Error("Failed to send");
    });
// .then((data) => setResult(data))
// .catch((error) => setResult(error))
// .finally(() => setLoading(false));
