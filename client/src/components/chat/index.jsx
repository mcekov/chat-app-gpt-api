import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

import CustomHeader from "../customHeader";
import StandardMessageForm from "../customMessageForms/StandartMessageForm";
import Ai from "../customMessageForms/Ai";
import AiCode from "../customMessageForms/AiCode";

const Chat = ({ user, secret }) => {
  const chatProps = useMultiChatLogic(
    process.env.REACT_APP_PROJECT_ID,
    "testuser",
    "6Y7MTdprx@FPy"
    /* user,
    secret */
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        style={{ height: "100vh" }}
        {...chatProps}
        renderChatHeader={(chat) => <CustomHeader chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }

          if (chatProps.chat?.title.startsWith("AiCode_")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }

          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
