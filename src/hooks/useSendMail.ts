"use client";
import { ContactRoutePayload } from "../app/api/contact/route";
import { MailFieldsType } from "../lib/nodemailer";

export type SendMailOutput = ContactRoutePayload & {
  error: Record<string, string | undefined> | null;
} & { formatData?: MailFieldsType };

export const useSendmailHook = () => {
  const sendMail = async (
    formatData: MailFieldsType,
  ): Promise<SendMailOutput> => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formatData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: `Bearer ${process.env.MAIL_PASSWORD}`,
        },
      });
      // if (!response.ok) {
      //   return {
      //     success: false,
      //     error: { message: "Failed to send email, not OK" },
      //   };
      // }
      const data = await response.json();
      console.log("nodemailer data ", JSON.stringify(data));
      return {
        formatData: formatData,
        error: null,
        response: data.response,
        success: data.success,
      };

      // const response = await sendContactForm(formatData);
    } catch (error: any) {
      console.log("email error message ", error.message);
      return { success: false, error: error };
    }
  };
  return { sendMail };
};

// email error message  Unexpected token '<', "<!DOCTYPE "... is not valid JSON

// try {
//     fetch("/api/contact/", {
//         method: "POST",
//         body: JSON.stringify(formatData),
//         // headers: {
//         //     "Content-Type": "application/json", Accept: "application/json"
//         // },
//     }).then((res) => {
//         if (!res.ok) throw new Error("Failed to send message");
//         enqueueSnackbar('send message successfully', {variant: "success", autoHideDuration: 5000});
//         console.log('res ', res)
//         return (res.json());
//     }).then((data) => {
//         console.log('nodemailer data ', data)
//         setEmailResult(data)
//         reset()
//     })
//         .catch((error) => setEmailResult(error))
//
//     console.log('result of send email: ', emailResult)
// } catch (error: any) {
//     console.log('email error message ', error.message)
//     setSendingError(error.message)
// } finally {
//     setEmailSending(false)
// }
