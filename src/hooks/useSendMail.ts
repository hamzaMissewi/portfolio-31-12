"use client";
import { ContactRoutePayload } from "../app/api/contact/route";
import { MailFieldsType } from "@/lib/nodemailer";

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
          // Authorization: `Bearer ${process.env.NODEMAILER_PASSWORD}`,
        },
      });
      if (!response.ok) {
        return {
          success: false,
          error: { message: "Failed to send email, not OK" },
        };
      }
      //         enqueueSnackbar('send message successfully', {variant: "success", autoHideDuration: 5000});
      const data = await response.json();
      console.log("nodemailer data ", JSON.stringify(data));
      return {
        formatData: formatData,
        error: null,
        response: data.response,
        success: data.success,
      };
    } catch (error: any) {
      console.log("email error message ", error.message);
      return { success: false, error: error };
    }
  };
  return { sendMail };
};
