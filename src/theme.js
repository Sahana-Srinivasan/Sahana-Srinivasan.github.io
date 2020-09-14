// example theme.js
export default {
  fonts: {
    body: 'Georgia, Cambria, "Times New Roman", Times, serif',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
    fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#392a25',
    muted: '#aaaaaa',
    background: '#f8f8f8',
    foreground: '#ffffff',
    primary: '#A51C30',
    secondary: '#FFF3F3',
    black: '#000000',
  },
  cards: {
    list: {
      borderRadius: 2,
      backgroundColor: "primary",
      padding: 3,
      "&:hover": {
        bg: "secondary",
      },
    },
  },
  space: [0, 4, 8, 16, 32, 48],
  breakpoints: ['40em', '64em', '80em'],
};