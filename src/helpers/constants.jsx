import linearInterpolation from "./calculateLinearInterpolation";

export const CSS_VARS = {
  colour: {
    primary: {
      100: "hsla(0, 0%, 2%, 1)",
      200: "hsla(0, 0%, 12%, 1)",
      300: "hsla(0, 0%, 18%, 1)",
      400: "hsla(0, 0%, 23%, 1)",
      500: "hsla(0, 0%, 46%, 1)",
      700: "hsla(0, 0%, 91%, 1)",
      800: "hsla(0, 0%, 96%, 1)",
      900: "hsla(0, 0%, 100%, 1)",
    },

    accent: "hsla(274, 82%, 60%, 1)",
    error: "hsla(0, 100%, 66%, 1)",
  },

  font: {
    family: {
      sans: `'Inter', sans-serif`,
      serif: `'Lora', serif`,
      mono: `'Inconsolata', mono`,
    },
    weight: {
      regular: 400,
      bold: 700,
    },
    size: {
      s: linearInterpolation(15, 18),
      m: linearInterpolation(16, 20),
      l: linearInterpolation(18, 24),
      xl: linearInterpolation(32, 64),
      xxl: linearInterpolation(64, 128),
    },
  },

  size: {
    xxs: `8px`,
    xs: `12px`,
    s: linearInterpolation(16, 32),
    m: linearInterpolation(24, 60),
    l: linearInterpolation(32, 42),
    xl: linearInterpolation(24, 32),
    "2xl": linearInterpolation(32, 60),
    "3xl": linearInterpolation(48, 76),
  },

  border: {
    xs: `4px`,
    s: `10px`,
    m: `16px`,
  },
};

export const THEME = {
  light: {
    background: {
      page: "var(--colour-primary-900)",
      input: "var(--colour-primary-800)",
      icon: "var(--colour-primary-500)",
      slider: "var(--colour-primary-500)",
      hr: "var(--colour-primary-700)",
    },
    text: {
      body: "var(--colour-primary-300)",
      heading: "var(--colour-primary-300)",
      subheading: "var(--colour-primary-500)",
    },
  },
  dark: {
    background: {
      page: "var(--colour-primary-100)",
      input: "var(--colour-primary-200)",
      icon: "var(--colour-accent)",
      slider: "var(--colour-accent)",
      hr: "var(--colour-primary-400)",
    },
    text: {
      body: "var(--colour-primary-900)",
      heading: "var(--colour-primary-900)",
      subheading: "var(--colour-primary-500)",
    },
  },
};
