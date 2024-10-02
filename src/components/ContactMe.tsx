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
import { createTheme } from "@mui/material/styles";
import { SendMailOutput, useSendmailHook } from "@/hooks/useSendMail";
import { useEnqueueSnackbar } from "@/components/common/Alerter";
import { Snackbar, SnackbarCloseReason } from "@mui/base";
import { useTranslations } from "next-intl";

export type MailFieldsType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const initContact = {
  // subject: "send me message", //"Pleasure doing business as web developer",
  subject: "Work Offer",
  message: "",
  email: "admin@gmail.com",
  name: "joe woe",
};

function ContactMe() {
  const t = useTranslations();
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
  const [sendEmailResponse, setSendEmailResponse] = useState<SendMailOutput>({
    success: false,
    response: undefined,
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
    setSendEmailResponse((prevState) => {
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
      const { response, success, error } = await useSendmailHook(formatData);

      if (error) {
        showEnqueueSnackbar(
          `Error while sending email,${response},error: ${error?.message}`,
          {
            autoHideDuration: 6000,
            variant: "error",
          },
        );
        setSendEmailResponse({ success: false, response, error: error });
      } else if (success && response) {
        showEnqueueSnackbar(
          `Send email successfully, response ${response}, details: email: ${formatData.email}, message: ${formatData.message}, name: ${formatData.name}, subject: ${formatData.subject}`,
          {
            autoHideDuration: 6000,
            variant: "success",
            anchorOrigin: { horizontal: "center", vertical: "top" },
          },
        );
        setSendEmailResponse({ success: true, response, error: null });
      }

      setEmailSending(false);
    },
    [],
  );

  return (
    <div
      className={
        // "flex min-h-screen h-screen relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        "shadow shadow-slate-300 relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10" +
        " justify-evenly mx-auto items-center"
      }
    >
      <Typography
        component={"h3"}
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        {t("title")}
      </Typography>

      <Stack className={"flex flex-col space-y-10 relative top-5"}>
        <Typography
          component={"h4"}
          className={"text-4xl font-semibold text-center"}
        >
          I have what you need to solve your demands and make your dreams come
          to reality
          <span className={"decoration-[#F7AB0A]/50 underline"}>
            Lets talk.
          </span>
        </Typography>

        <Stack>
          <Box className={"flex items-center space-x-5 justify-center"}>
            <PhoneIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
            <Typography
              fontSize={"medium"}
              color={"textcolor.secondary"}
              className={"text-2xl"}
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
            <Typography>Tunisia, Mourouj 1 zip 2074</Typography>
          </Box>
        </Stack>

        <Stack
          component={"form"}
          onSubmit={handleSubmit(handleContactMeSubmit)}
          className={
            "flex flex-col space-y-2 w-fit mx-auto items-center min-h-screen p-4 bg-gray-100"
          }
        >
          <Stack direction={"row"} spacing={2}>
            <FormControl error={!!errors.name}>
              <TextField
                placeholder={"Name"}
                className={"contactInput"}
                type={"text"}
                {...register("name")}
                required
              />
            </FormControl>

            <FormControl error={!!errors.email}>
              <TextField
                placeholder={"Email"}
                className={"contactInput"}
                type={"text"}
                {...register("email")}
                required
              />
            </FormControl>
          </Stack>
          <TextField
            placeholder="Subjet"
            className={"contactInput"}
            type={"text"}
            {...register("subject")}
            required
          />
          <TextareaAutosize
            placeholder={"Message"}
            className={"contactInput"}
            {...register("message")}
            required
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
        </Stack>
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
