import React from 'react';
import { MultiChatSocket, useMultiChatLogic, MultiChatWindow } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('35e251df-bf13-42a9-b5e5-25aeeb23f95d',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} />
    </div>
  );
}

export default ChatsPage;
