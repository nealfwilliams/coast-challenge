import React from 'react';
import styled, { css } from 'styled-components';

import { color, fontSize, space } from '../../theme';
import { Message } from '../../messages';

type MessageProps = {
  message: Message
};

const FlexRow = styled.div`
  display: flex;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${space(3)}
`;

const AvatarWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Avatar = styled.img`
  width: 60px;
  border-radius: 30px;
`;

export const messageContentStyles = css`
  position: relative;
  flex-grow: 1;
  font-size: ${fontSize(3)};
  border-radius: 20px;
  padding: ${space(4)};
`;

const MessageContent = styled.div`
  ${messageContentStyles}
  background-color: ${color('grayscale.background')}
`;

const MessageAction = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color('grayscale.light')};
`;

const SeenByMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${space(2)}
  color: ${color('grayscale.light')}
  font-size: ${fontSize(2)}
`;

const UrgentIndicator = styled.div`
  position: absolute;
  top: -10px;
  left: 0px
  height: 32px;
  border-radius: 16px;
  font-size: ${fontSize(2)};
  background-color: ${color('urgent')};
  color: ${color('grayscale.white')};
  display: flex;
  padding: ${space(3)}
  justify-content: center;
  align-items: center;
`;

const ExternalMessage: React.FC<MessageProps> = ({ message }) => {
  return (
    <MessageWrapper>
      <FlexRow>
        <AvatarWrapper>
          <Avatar src={message.senderImageUrl} />
        </AvatarWrapper>
        <MessageContent>
          {message.content}
          { message.urgent && 
            <UrgentIndicator>Urgent</UrgentIndicator>
          }
        </MessageContent>
        <MessageAction>Icon</MessageAction>
      </FlexRow>
      { message.seenByImageUrls.length &&
        <SeenByMessage>
          Seen by {message.seenByImageUrls.length}
        </SeenByMessage>
      }
      
    </MessageWrapper>
  )
};
  
export default ExternalMessage;