/*
  To render the messages, you can use this boilerplate if you want:
*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import { messages } from './messages';
import MessageList from './components/message-list/MessageList';

// TO-DO use styled-component global styled abstraction
const GlobalStyles = styled.div`
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
`;



const App: React.SFC = () => {
  return (
    <GlobalStyles>
      <MessageList messages={messages} />
    </GlobalStyles>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);