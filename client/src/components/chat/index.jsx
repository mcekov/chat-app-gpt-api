import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

import CustomHeader from "../customHeader";
import StandardMessageForm from "../customMessageForms/StandartMessageForm";
import Ai from "../customMessageForms/Ai";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    process.env.REACT_APP_PROJECT_ID,
    "testuser",
    "123"
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

          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
