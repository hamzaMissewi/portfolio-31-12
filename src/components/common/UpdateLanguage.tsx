"use client";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogProps,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { AppIcon, IconType } from "./AppIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCallback, useState } from "react";
import { Language } from "../../app/[locale]/layout";

export function useUpdateLanguageDialog() {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleOpen = useCallback(() => {
    // setInputData(inputData);
    handleDialogOpen();
  }, [handleDialogOpen]);

  return {
    updateLanguageDialogProps: {
      // inputData,
      open: open,
      onClose: handleDialogClose,
    },
    openUpdateLanguageDialog: handleOpen,
  };
}

interface IUpdateLanguageProps {
  open: boolean;
  onClose: () => void;
}

export default function UpdateLanguageDialog({
  open,
  onClose,
}: IUpdateLanguageProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      keepMounted={false}
      maxWidth="xs"
      fullWidth
      sx={{
        minWidth: {
          md: "450px",
          xs: 0,
        },
      }}
    >
      <UpdateLanguageForm open={open} onClose={onClose} />
    </Dialog>
  );
}

interface UpdateLanguageFormProps extends DialogProps {
  onClose: () => void;
  // locale:string
  // inputData: UpdateLanguageDialogInputData | null;
}

function UpdateLanguageForm({ onClose }: UpdateLanguageFormProps) {
  const t = useTranslations();
  const locale = useLocale();

  const {
    formState: { isValid, isSubmitting },
    register,
    handleSubmit,
  } = useForm<{ language: Language }>({
    defaultValues: { language: Language.EN },
    mode: "onChange",
  });

  const handleClose = useCallback(() => {
    console.log("test close");
  }, []);
  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      handleClose();
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <Box component="form" noValidate onSubmit={handleSubmitForm}>
      <DialogTitle id="alert-dialog-title">
        <Stack direction="row" alignItems="start">
          <Stack flexGrow={1}>
            {t("dialogs.updateLanguageDialog.titleDialog")}
          </Stack>
          <Stack direction="row" justifyContent="end">
            <IconButton
              onClick={onClose}
              sx={{
                direction: "row",
                justifyContent: "end",
                alignItems: "start",
              }}
            >
              <AppIcon type={IconType.CLOSE} />
            </IconButton>
          </Stack>
        </Stack>
      </DialogTitle>
      <Divider />
      <Box>
        <Typography ml={2} mt={2} variant={"h6"}>
          {t("dialogs.updateLanguageDialog.title")}
        </Typography>
      </Box>
      <Box sx={{ pt: 2, ml: 2 }}>
        <FormControl>
          {/*<Controller*/}
          {/*  rules={{ required: true }}*/}
          {/*  control={control}*/}
          {/*  name="language"*/}
          {/*  render={({ field }) => (*/}
          <RadioGroup {...register("language", { required: true })}>
            <FormControlLabel
              value="en_US"
              control={<Radio />}
              label={t("common.languages.en")}
            />
            <FormControlLabel
              value="fr_FR"
              control={<Radio />}
              label={t("common.languages.fr")}
            />
            <Divider sx={{ mt: 2 }} />
          </RadioGroup>
          {/*  )}*/}
          {/*/>*/}
        </FormControl>
      </Box>
      <Divider />
      <DialogActions>
        <Button onClick={onClose}>
          {t("dialogs.updateLanguageDialog.cancel")}
        </Button>
        <LoadingButton
          loadingPosition="start"
          loading={isSubmitting}
          variant="contained"
          autoFocus
          color={"primary"}
          type="submit"
          disabled={!isValid}
        >
          {t("dialogs.updateLanguageDialog.connect")}
        </LoadingButton>
      </DialogActions>
    </Box>
  );
}
