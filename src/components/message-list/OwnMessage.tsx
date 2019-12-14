import React from 'react';
import styled from 'styled-components';

import { color } from '../../theme';
import { Message } from '../../messages';
import { MessageWrapper, messageContentStyles } from './ExternalMessage';

type MessageProps = {
  message: Message
};

const MessageContent = styled.div`
  ${messageContentStyles}
  background-color: ${color('chat.active')}
  margin-left: 150px;
`;

const OwnMessage: React.FC<MessageProps> = ({ message }) => {
  return (
    <MessageWrapper>
      <MessageContent>{message.content}</MessageContent>
    </MessageWrapper>
  )
};
  
export default OwnMessage;