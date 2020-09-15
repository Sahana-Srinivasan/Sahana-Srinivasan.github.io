// example theme.js
export default {
  fonts: {
    body: 'Georgia, Cambria, "Times New Roman", Times, serif',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 60],
    fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    default: {
      color: "#111111",
      fontSize: 4,
      letterSpacing: "0.05em",
      lineHeight: 1.2,
    },
    h1: {
      variant: "text.heading",
      mt: 2,
      mb: 2,
      fontSize: 60,
    },
    h2: {
      variant: "text.heading",
      mt: 1,
      mb: 1,
      fontSize: 4,
    },
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