"use client";
import { useCallback, useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Alert,
  Box,
  FormControl,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { SendMailOutput } from "../hooks/useSendMail";
import { useEnqueueSnackbar } from "../components/common/Alerter";
import { Snackbar, SnackbarCloseReason } from "@mui/base";
import { useTranslations } from "next-intl";
import { MailFieldsType } from "../lib/nodemailer";



const initContact = {
  // subject: "send me message", //"Pleasure doing business as web developer",
  subject: "Work Offer",
  message: "",
  email: "admin@gmail.com",
  name: "",
};

function ContactMe() {
  const t = useTranslations("ContactMe");
  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    register,
    formState: { errors, isValid },
  } = useForm<MailFieldsType>({
    defaultValues: initContact,
  });

  // const { sendMail } = useSendmailHook();

  const [sendEmailResponse, setSendEmailResponse] = useState<SendMailOutput>({
    success: false,
    response: "",
    error: null,
  });
  const [emailSending, setEmailSending] = useState(false);
  const { showEnqueueSnackbar } = useEnqueueSnackbar();

  const handleCloseErrorAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSendEmailResponse((prevState: SendMailOutput) => {
      return { ...prevState, error: null };
    });
  };

  // const handleOldContactSubmit = useCallback(
  //   async (formatData: MailFieldsType) => {
  //     const emailContent = `Hi, my name is ${formatData.name}, ${formatData.message} ${formatData.email}`;
  //     window.location.href = `mailto:hamza.missaoui47@gmail.com?subject=${formatData.subject}&body=${emailContent}`;
  //   },
  //   [],
  // );

  const handleContactMeSubmit: SubmitHandler<MailFieldsType> = useCallback(
    async (formatData) => {
      setEmailSending(true);
      // const { response, success, error } = await sendMail(formatData);

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

        console.log("nodemailer data ", JSON.stringify(data));

        if (data.response && response.ok) {
          showEnqueueSnackbar(
            `Send email successfully, response ${data.response}, details: email: ${formatData.email}, message: ${formatData.message}, name: ${formatData.name}, subject: ${formatData.subject}`,
            {
              autoHideDuration: 6000,
              variant: "success",
              anchorOrigin: { horizontal: "center", vertical: "top" },
            },
          );
          setSendEmailResponse({
            success: true,
            response: data.response,
            error: null,
          });
        }
      } catch (error: any) {
        showEnqueueSnackbar(
          `Error while sending email, error: ${error?.message}`,
          {
            autoHideDuration: 6000,
            variant: "error",
          },
        );
        setSendEmailResponse({
          // success: false,
          response: undefined,
          error: { message: error?.message, name: error?.name },
        });
      }

      setEmailSending(false);
    },
    [showEnqueueSnackbar],
  );

  return (
    <div
      className={
        // "flex min-h-screen h-screen relative flex-col text-center md:text-left md:flex-row md:flex-row max-w-7xl px-10
        "h-full snap-start shadow shadow-slate-300 relative flex flex-col text-center md:text-left" +
        " max-w-7xl px-10 justify-evenly mx-auto items-center"
      }
    >
      <Typography
        className={
          // "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
          "text-gray-500 text-4xl"
        }
      >
        {t("title")}
      </Typography>

      <Stack className={"relative flex flex-col space-y-10 mt-5"}>
        <h4
          className={
            "font-semibold text-center text-slate-700 text-xl decoration-[#F7AB0A]/50"
          }
        >
          {/*<span className={"decoration-[#F7AB0A]/50 underline"}>*/}
          {t("contact")}
        </h4>

        <Stack>
          <Box className={"flex items-center space-x-5 justify-center"}>
            <PhoneIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
            <Typography
              fontSize={"medium"}
              // color={"text.color.secondary"}
              className={"text-md color-gray-500"}
            >
              (+216) 56521184
            </Typography>
          </Box>

          <Box className={"flex items-center space-x-5 justify-center"}>
            <EnvelopeIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
            <Typography>hamza.missaoui@b2b-alive.com</Typography>
          </Box>

          <Box className={"flex items-center space-x-5 justify-center"}>
            <MapPinIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
            <Typography>{t("address")}</Typography>
          </Box>
        </Stack>

        {/*<Stack component={"form"}*/}
        <form
          onSubmit={handleSubmit(handleContactMeSubmit)}
          className={
            "flex flex-col space-y-2 w-fit mx-auto items-center p-4 bg-gray-100"
          }
        >
          <Stack direction={"row"} spacing={2}>
            <FormControl error={!!errors.name}>
              <TextField
                placeholder={"e.g: hamza missaoui"}
                className={"contactInput"}
                type={"text"}
                {...register("name")}
                required
              />
            </FormControl>

            <FormControl error={!!errors.email}>
              <TextField
                placeholder={"e.g: hamza.missaoui@gmail.com"}
                className={"contactInput"}
                type={"text"}
                {...register("email")}
                required
              />
            </FormControl>
          </Stack>
          <TextField
            placeholder="e.g: work Offer , CDI Contract, Freelance"
            className={"contactInput"}
            type={"text"}
            {...register("subject")}
            required
            style={{ width: "100%" }}
          />
          <TextareaAutosize
            // placeholder={""}
            className={"contactInput"}
            {...register("message")}
            required
            style={{ width: "100%" }}
          />
          <LoadingButton
            className={
              "bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            }
            disabled={!isValid}
            loading={emailSending}
            type={"submit"}
          >
            Submit
          </LoadingButton>
        </form>
      </Stack>
      {/*Alert error*/}
      <Snackbar
        open={!!sendEmailResponse?.error?.message}
        autoHideDuration={6000}
        onClose={() => handleCloseErrorAlert()}
      >
        <Alert
          onClose={() => handleCloseErrorAlert()}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {sendEmailResponse.error?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ContactMe;
