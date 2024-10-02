import { useCallback } from "react";

export function useAskChatGptHook() {
  const askChatGptCallback = useCallback(
    async (
      message: string,
    ): Promise<{
      reply?: string;
      error?: string;
    }> => {
      try {
        const result = await fetch("/api/openai", {
          method: "POST",
          body: JSON.stringify({ prompt: message }),
          headers: {
            "Content-Type": "application/json",
            // 'Authorization': 'Bearer ' + JSON.stringify(process.env.OPENAI_API_KEY)
          },
        });
        console.log("result status ", result.status);
        if (!result.ok || result.status !== 200) {
          console.log("result not ok");
          return {
            error: "Failed to get response",
            reply: "Sorry, no reply for that !",
          };
        } else {
          const response = await result.json();
          console.log("response json ", response);
          return { reply: response?.data.reply, error: response.data.error };
        }
      } catch (error: any) {
        console.error(error, `error while demand chat gpt ${error.message}`);
        return { error: error.message };
      }

      // fetch("/api/chatgpt", {
      //     method: "POST",
      //     body: JSON.stringify(data),
      //     cache: "no-cache",
      // }).then((res) => {
      //     if (!res.ok) throw new Error("Failed to get response");
      //     enqueueSnackbar('get ai response successfully', {variant: "info", autoHideDuration: 5000});
      //     return (res.json());
      // }).then((data) => setOpenAiRes(data))
      //     .catch((error) => setOpenAiRes(error)).finally(() => setLoading(false))
    },
    [],
  );

  return { askChatGpt: askChatGptCallback };
}
