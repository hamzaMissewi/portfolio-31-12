import { Switch } from "@mui/material";
import { SwitchProps } from "@mui/material/Switch/Switch";
import { useCallback, useEffect, useRef, useState } from "react";

interface IAsyncSwitchProps extends SwitchProps {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => Promise<void>;
  onBeforeChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => Promise<boolean>;
}

export function AsyncSwitch({ onBeforeChange, ...props }: IAsyncSwitchProps) {
  const [localChecked, setLocalChecked] = useState(props.checked);

  const localCheckedDate = useRef(new Date());

  const updateLocalChecked = useCallback((checked: boolean) => {
    localCheckedDate.current = new Date();
    setLocalChecked(checked);
  }, []);

  useEffect(() => {
    // always update local state when checked prop changes
    if (props.checked !== undefined) {
      updateLocalChecked(props.checked);
    }
  }, [props.checked]);

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onBeforeChange) {
        try {
          const response = await onBeforeChange(event, event.target.checked);
          if (!response) return;
        } catch (e) {
          console.log(e);
          return;
        }
      }

      const startDate = new Date();
      setLocalChecked(event.target.checked);
      if (props.onChange) {
        try {
          await props.onChange(event, event.target.checked);
        } catch (e) {
          if (startDate > localCheckedDate.current) {
            // if the onChange event is older than the current one, do not update local state
            updateLocalChecked(!event.target.checked);
          }
        }
      }
    },
    [props.onChange, onBeforeChange],
  );

  return <Switch {...props} checked={localChecked} onChange={handleChange} />;
}
