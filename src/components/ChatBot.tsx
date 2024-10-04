"use client";
import React, { useCallback, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Snackbar } from "@mui/base";
import ErrorIcon from "@mui/icons-material/Error";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import { useAskChatGptHook } from "@/hooks/useAskOpenAi4o";
import { useSnackbar } from "notistack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function ChatBot() {
  const { askChatGpt } = useAskChatGptHook();
  const [userMessage, setUserMessage] = useState<string | undefined>(undefined);
  const [chatLoading, setChatLoading] = useState(false);
  const [responses, setResponses] = useState<
    { role: string; content: string }[]
  >([]);
  const [chatError, setChatError] = useState<string | undefined>(undefined);
  const [expandChatBox, setExpandChatBox] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickAskChatGpt = useCallback(
    async (event: any) => {
      event.preventDefault();
      setChatLoading(true);
      try {
        if (!userMessage) {
          enqueueSnackbar("ask anything", {
            variant: "error",
            autoHideDuration: 5000,
          });
          return;
        }
        const result = await askChatGpt(userMessage);
        console.log("chat result ", result);
        // console.log("chat price ", result.price)

        if (result?.reply) {
          setResponses([
            ...responses,
            { role: "user", content: userMessage },
            {
              role: "assistant",
              content: result.reply,
            },
          ]);
          enqueueSnackbar("get ai response successfully", {
            variant: "info",
            autoHideDuration: 5000,
          });
        } else if (result?.error) {
          setChatError(result.error);
        }
      } finally {
        setChatLoading(false);
        setUserMessage("");
        setExpandChatBox(true);
      }
    },
    [askChatGpt, userMessage],
  );

  // TODO TEXT TO SPEESH
  const handleClickTextToAiVoice = useCallback((aiText: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(aiText);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("SpeechSynthesis API is not supported in this browser.");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ x: -10, opacity: 1, scale: 1 }}
      // viewport={{once: true}}
      className="min-h-0 w-[300px] flex flex-col bg-gray-100 rounded-lg border-2 border-amber-400"
    >
      <Stack
        direction={"row"}
        className={"mx-2 justify-center items-center space-x-1"}
      >
        <Typography component={"h1"} className="text-xl text-center text-black">
          Ai Helper
        </Typography>
        <IconButton
          color={"success"}
          onClick={() => setExpandChatBox((value) => !value)}
        >
          <KeyboardArrowDownIcon fontSize={"small"} />
        </IconButton>
      </Stack>
      <Divider />

      {expandChatBox && (
        <div
          // initial={{opacity: 1}}
          // transition={{duration: 0.5}}
          className={"flex flex-col justify-between flex-1"}
        >
          <div className="overflow-y-auto flex-grow bg-white shadow-lg rounded-lg p-2 h-[400px]">
            <div className="space-y-4">
              {responses.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-slate-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <IconButton
                      onClick={() => handleClickTextToAiVoice(msg.content)}
                    >
                      <PlayArrowIcon fontSize={"small"} />
                    </IconButton>
                  </div>
                  {chatError && (
                    <Snackbar autoHideDuration={5000} open={!!chatError}>
                      <Alert
                        icon={<ErrorIcon fontSize="inherit" />}
                        severity="error"
                      >
                        {chatError}
                      </Alert>
                    </Snackbar>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Box
            component={"form"}
            className={
              "py-2 flex flex-row items-center w-[100%] px-2 space-x-1"
            }
          >
            <TextField
              className="flex-1 border rounded-l-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type={"text"}
              size={"small"}
              placeholder="Type your message..."
              value={userMessage}
              onChange={(event) => setUserMessage(event.target.value)}
            />

            <Button
              type={"submit"}
              className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 self-center"
              endIcon={<SendIcon fontSize={"small"} color={"primary"} />}
              onSubmit={(event) => handleClickAskChatGpt(event)}
            >
              Send
            </Button>
          </Box>
        </div>
      )}
      {chatLoading && (
        <CircularProgress variant={"indeterminate"} color={"error"} size={10} />
      )}
    </motion.div>

    // <Stack
    //     spacing={1}
    //     // className={"h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}
    // >
    //     <Typography component={"h4"} className={"text-4xl font-semibold text-center"}>
    //         Hi I am your ai bot
    //         <span className={"decoration-[#F7AB0A]/50 underline"}>
    //                      how can i help you ?
    //                 </span>
    //     </Typography>
    //
    //     <Box
    //         className={"max-h-[400px] overflow-y-scroll border-1 border-amber-100 p-[10px] mb-[10px]"}
    //     >
    //         {responses.map((msg, index) => (
    //             <Box key={index} style={{margin: '5px 0', textAlign: msg.role === 'user' ? 'right' : 'left'}}>
    //                 <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong>
    //                 <Typography variant={"body2"} color={"#c3c3c3"}>
    //                     {msg.content}
    //                 </Typography>
    //
    //                 {chatError &&
    //                     <Snackbar autoHideDuration={5000} open={!!chatError}>
    //                         <Alert icon={<ErrorIcon fontSize="inherit"/>} severity="error">
    //                             {chatError}
    //                         </Alert>
    //                     </Snackbar>
    //                     }
    //
    //                 </Box>
    //             ))}
    //         </Box>
    //         <Stack component={"form"} spacing={1}>
    //             <FormControl>
    //                 <TextField
    //                     className={"text-xl w-[calc(100%-110px)] mr-2"}
    //                     type={"text"} placeholder={"ask anything..."}
    //                     onChange={(event) => setUserMessage(event.target.value)} value={userMessage}/>
    //             </FormControl>
    //             <IconButton type={"submit"} onClick={() => handleClickAskChatGpt()}>
    //                 <SendIcon fontSize={"small"} color={"primary"}/>
    //             </IconButton>
    //         </Stack>
    //
    //         {chatLoading && <CircularProgress variant={"indeterminate"} color={"error"} size={10}/>}
    //         {/*<Snackbar open={!!sendingError} autoHideDuration={6000} onClose={() => handleCloseErrorAlert()}>*/}
    //         {/*  */}
    //         {/*</Snackbar>*/}
    //     </Stack>
  );
}

export default ChatBot;