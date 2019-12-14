export interface Message {
  // A string used by the backend to identify the message
  id: string;
  // The text content of the message
  content: string;
  // A boolean noting if the message has been sent as urgent.
  // When this is set, the "Urgent" badge should be shown.
  urgent: boolean;
  // The image of the sender
  senderImageUrl: string;
  // True when the sender is me. For my own message bubbles,
  // the content should be right aligned and have a green background.
  isSenderMe?: boolean;
  // An array of image urls of everyone that has seen a message.
  // Note: these are shown just below each message. We only want
  // to show the actual images for the last message. For older
  // messages, just show the count ("Seen by n")
  seenByImageUrls: string[];
}

export const messages: Message[] = [{
  id: '18516e26-2413-4af4-b5d9-27435b815543',
  content: 'The POS terminal is down again! We’re only able to accept cash. @russell can you call support?',
  urgent: true,
  senderImageUrl: 'http://i.imgur.com/AyJ6XnG.jpg',
  seenByImageUrls: ['https://i.imgur.com/4VbAo78.jpg', 'http://i.imgur.com/AyJ6XnG.jpg', 'http://i.imgur.com/wp0o6Ds.jpg'],
}, {
  id: '73b220e3-5565-4e2c-b338-45c867bd8296',
  content: 'Update: we were able to get the terminal fixed!',
  urgent: false,
  senderImageUrl: 'http://i.imgur.com/wp0o6Ds.jpg',
  seenByImageUrls: ['https://i.imgur.com/4VbAo78.jpg', 'http://i.imgur.com/AyJ6XnG.jpg', 'http://i.imgur.com/wp0o6Ds.jpg'],
}, {
  id: '179a2559-dc05-44bf-853a-016052bbf49c',
  content: 'Hi everyone! let’s talk about the barista interviews, how’d the last round go?',
  urgent: false,
  senderImageUrl: 'https://i.imgur.com/4VbAo78.jpg',
  seenByImageUrls: ['https://i.imgur.com/4VbAo78.jpg', 'http://i.imgur.com/AyJ6XnG.jpg'],
  isSenderMe: true
}];