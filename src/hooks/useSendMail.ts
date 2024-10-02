"use client";
import { useCallback, useState } from "react";
import { MailFieldsType } from "@/components/ContactMe";
import { useSnackbar } from "notistack";
import { ContactMePostPayload } from "@/app/api/contact/route";

export type SendMailOutput = ContactMePostPayload & {
  error: Record<string, string | null | undefined> | null;
};

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
      },
    });
    const data = await response.json();
    if (!data.ok)
      return {
        success: false,
        error: { message: "Failed to send email, not OK" },
      };
    console.log("nodemailer data ", JSON.stringify(data));
    return { ...data, error: null };
    //return { message: formatData.message, email: formatData.email };

    // const response = await sendContactForm(formatData);
    // if (!response.ok) return { error: "Failed to send message" };
    // const data = await response.json();
    // return { message: data?.message, email: data?.email };
  } catch (error: any) {
    console.log("email error message ", error.message);
    return { success: false, error: error };
  }
};

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

export const useSendmailHookOld = async (data: {
  subject: string;
  message: string;
  email: string;
  name: string;
}) => {
  const [result, setResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const callback = useCallback(() => {
    setLoading(true);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        //   Authorization: `Bearer ${process.env.MAIL_PASSWORD}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to send email");
        enqueueSnackbar("send email successfully", {
          variant: "info",
          autoHideDuration: 5000,
        });
        return res.json();
      })
      .then((data) => setResult(data))
      .catch((error) => setResult(error))
      .finally(() => setLoading(false));
  }, []);

  return { result, loading, callback };
};
