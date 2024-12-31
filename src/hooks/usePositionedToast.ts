import { useCallback, useEffect, useState } from "react";
import {
  toast,
  ToastContent,
  ToastOptions,
  ToastPosition,
} from "react-toastify";

export const usePositionedToast = (
  componentRef?: React.RefObject<HTMLElement> | null,
) => {
  const [position, setPosition] = useState<ToastPosition>("top-right"); // Default position

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // const windowHeight = window.innerHeight;
      // const scrollPosition = window.scrollY + windowHeight;
      // const bodyHeight = document.body.clientHeight;

      let xPosition: "left" | "right" = "right";
      if (componentRef?.current) {
        const { left, right } = componentRef.current.getBoundingClientRect();
        // Determine if the component is more to the left or right
        xPosition = right < window.innerWidth / 2 ? "left" : "right";
      }

      if (scrollY + clientHeight >= scrollHeight - 100) {
        // If at the bottom, set the toast position to bottom-right
        if (xPosition === "left") {
          setPosition("bottom-left");
        } else setPosition("bottom-right");
      } else {
        // If at the top or anywhere else, set the toast position to top-right
        if (xPosition === "left") {
          setPosition("top-left");
        } else setPosition("top-right");
      }
    };
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (componentRef?.current) {
  //     const { left, right } = componentRef.current.getBoundingClientRect();
  //     // Determine if the component is more to the left or right
  //     const position = right < window.innerWidth / 2 ? "left" : "right";
  //     // const positionToast = position === "left" ? "top-left" : "top-right";
  //     if (position === "right") {
  //       setPosition("top-right");
  //     }
  //   }
  // }, []);

  const positionedToast = useCallback(
    (message: ToastContent, options?: ToastOptions) => {
      toast(message, {
        ...options,
        position: position,
        hideProgressBar: true,
        closeButton: true,
        // type: type || "info",
        // autoClose: autoClose,
      });
    },
    [],
  );

  return { positionedToast };
};
