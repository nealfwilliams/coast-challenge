import React from 'react';
import styled from 'styled-components'

import { Message } from '../../messages';
import ExternalMessage from './ExternalMessage';
import OwnMessage from './OwnMessage';
import { space } from '../../theme';

type Props = {
  messages: Message[]
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space(2)} ${space(4)} ${space(2)}}
`;

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <ListWrapper>
      {messages.map(
        message =>
          message.isSenderMe ? <OwnMessage message={message} /> : <ExternalMessage message={message} />
      )}
    </ListWrapper>
  )
}

export default MessageList;