const colors = {
  'urgent': '#F92B65',
  'chat.active': '#D4F4EE',
  'grayscale.background': '#F7F7F7',
  'grayscale.dark': 'black',
  'grayscale.light': '#BDBDBD',
  'grayscale.white': '#FFFFFF'
}

const fontSizes = [10, 14, 16, 24, 48, 64];
const spaces = [0, 4, 8, 16, 24];

type ColorKey = keyof typeof colors;

export const color = (color: ColorKey) => {
  return () => colors[color];
}

export const space = (spaceIndex: number) => {
  return () => `${spaces[spaceIndex]}px`;
}

export const fontSize = (fontSizeIndex: number) => {
  return () => `${fontSizes[fontSizeIndex]}px`;
}

export const theme = {
  colors,
  fontSizes
};