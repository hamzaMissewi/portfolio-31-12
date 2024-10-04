"use client";
import { ContactRoutePayload } from "@/app/api/contact/route";
import { MailFieldsType } from "@/config/nodemailer";

export type SendMailOutput = ContactRoutePayload & {
  error: Record<string, string | undefined> | null;
} & { formatData?: MailFieldsType };

export const useSendmailHook = async (
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
    const data = await response.json();
    // if (!data.success) {
    //   return {
    //     success: false,
    //     error: { message: "Failed to send email, not OK" },
    //   };
    // }
    console.log("nodemailer data ", JSON.stringify(data));
    return {
      formatData: formatData,
      error: null,
      response: data.response,
      success: data.success,
    };

    // const response = await sendContactForm(formatData);
    // return response;
  } catch (error: any) {
    console.log("email error message ", error.message);
    // enqueueSnackbar(error?.message, {
    //   autoHideDuration: 6000,
    //   variant: "error",
    // });
    return { success: false, error: error };
  }
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
