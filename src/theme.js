import { ThemeContext } from "@emotion/core";

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
      fontSize: 72,
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
    background: '#ffffff',
    foreground: '#ffffff',
    primary: '#A51C30',
    secondary: '#FFF3F3',
    black: '#000000',
  },
  cards: {
    list: {
      borderRadius: 2,
      color: "text",
      backgroundColor: "background",
      padding: 3,
      "&:hover": {
        color: "primary"      },
    },
    primary: {
      padding: 20,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      borderColor: '#A51C30',
      margin: 15,
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: '#A51C30',
    },
  },
  space: [0, 4, 8, 16, 32, 48],
  breakpoints: ['40em', '64em', '80em'],
};