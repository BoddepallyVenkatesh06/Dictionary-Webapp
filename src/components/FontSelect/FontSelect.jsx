import React from "react";
import Select from "../primitives/Select/Select";
import { ThemeContext } from "../../contexts/ThemeProvider/ThemeProvider";

export default function FontSelect() {
  const { font, setFont } = React.useContext(ThemeContext);
  return (
    <Select
      label="Select a font"
      onChange={(event) => {
        setFont(event.target.value);
      }}
      value={font}
    >
      <option value="sans">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="mono">Mono</option>
    </Select>
  );
}
