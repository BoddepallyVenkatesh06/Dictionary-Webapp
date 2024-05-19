import React from "react";
import { createCSSVars } from "../../helpers/createCSSVars";
import { THEME } from "../../helpers/constants";
import PropTypes from "prop-types";

function getInitialDisplayPrefs(type) {
  const preference = window.localStorage.getItem(type);
  const hasPersistedPreference = typeof preference === "string";

  if (hasPersistedPreference) {
    return preference;
  }

  if (type === "theme") {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";

    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }

    return "light";
  }

  if (type === "font") {
    return "sans";
  }
}

export const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [font, setFont] = React.useState(getInitialDisplayPrefs("font"));
  const [theme, setTheme] = React.useState(getInitialDisplayPrefs("theme"));

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--theme-font",
      `var(--font-family-${font})`
    );

    window.localStorage.setItem("font", font);
    window.localStorage.setItem("theme", theme);
  }, [font, theme]);

  React.useEffect(() => {
    const themeVars = createCSSVars(THEME[theme]).split(";");
    themeVars.forEach((variable) => {
      const [property, value] = variable.split(":");
      document.documentElement.style.setProperty(property, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ font, setFont, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
