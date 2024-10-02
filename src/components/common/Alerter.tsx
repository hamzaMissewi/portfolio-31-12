import { Alert, Snackbar } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import {
  BaseVariant,
  OptionsWithExtraProps,
  SnackbarMessage,
  useSnackbar,
} from "notistack";
import IconButton from "@mui/material/IconButton";
import { AppIcon, IconType } from "@/components/common/AppIcon";

// import CloseIcon from "@mui/icons-material/Close";

export function useAlerter(
  message: string,
  severity: "error" | "warning" | "info" | "success" = "info",
) {
  const [open, setOpen] = React.useState(false);

  const openAlerter = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return useMemo(() => {
    return {
      open: openAlerter,
      props: {
        open,
        severity,
        message: message,
        onClose: handleClose,
      },
    };
  }, [message, severity, open]);
}

interface IAlertProps {
  open: boolean;
  severity: "success" | "warning" | "error" | "info";
  message: string;
  onClose: () => void;
}

export function Alerter({ open, onClose, message, severity }: IAlertProps) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

// TODO good tested notistack enquue snackbar hook
export function useEnqueueSnackbar() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // const [snackbarKey, setSnackbarKey] = useState<SnackbarKey | undefined>(undefined);
  // const handleCloseSnackbar = (key: SnackbarKey) => {
  //   closeSnackbar(key);
  //   // setSnackbarKey(undefined);
  // };

  const showSnackbar = useCallback(
    (message: SnackbarMessage, options: OptionsWithExtraProps<BaseVariant>) => {
      const { variant, autoHideDuration, style, anchorOrigin, ...props } =
        options;

      enqueueSnackbar(message, {
        ...props,
        preventDuplicate: true,
        persist: props.persist && !autoHideDuration, // || false,
        anchorOrigin: anchorOrigin ?? { vertical: "top", horizontal: "center" },
        autoHideDuration: autoHideDuration ?? 5000,
        variant: variant,
        style: style ?? {
          position: "relative",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#befff3",
          textAlign: "center",
          color: "black",
        },
        action: (key) => (
          <IconButton
            onClick={() => closeSnackbar(key)}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            {/*<CloseIcon fontSize={"small"} color={"action"} />*/}
            <AppIcon
              fontSize={"small"}
              color={"action"}
              type={IconType.CANCEL}
            />
          </IconButton>
        ),
      });
    },
    [],
  );

  return { showEnqueueSnackbar: showSnackbar };
}
