import React from "react";
import styled from "styled-components/macro";
import * as Switch from "@radix-ui/react-switch";
import VisuallyHidden from "../primitives/VisuallyHidden/MyAttempt/VisuallyHidden";
import { ThemeContext } from "../../contexts/ThemeProvider/ThemeProvider";

export default function ThemeSelect() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <form>
      <Wrapper>
        <Toggle
          id="dark-mode"
          checked={theme === "dark"}
          onCheckedChange={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
          <ToggleThumb />
        </Toggle>
        <Label htmlFor="dark-mode">
          <VisuallyHidden>Dark Mode</VisuallyHidden>
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <MoonPath
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </Icon>
        </Label>
      </Wrapper>
    </form>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 100%;
`;

const Label = styled.label`
  block-size: 22px;
  inline-size: 22px;
  cursor: pointer;
`;

const MoonPath = styled.path`
  stroke: var(--background-icon);
  transition: stroke 500ms ease-in;
`;

const Icon = styled.svg`
  &:hover ${MoonPath} {
    stroke: var(--colour-accent);
    transition: stroke 200ms ease-out;
  }
`;

const Toggle = styled(Switch.Root)`
  width: 40px;
  height: 20px;
  background-color: var(--colour-primary-500);
  border-radius: 9999px;
  position: relative;
  border: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 500ms ease-in;
  cursor: pointer;

  /* Need these to override Safari user style sheet defaults */
  padding-inline: 6px;
  padding-block: 2px;

  &[data-state="checked"] {
    background-color: var(--colour-accent);
  }

  &:hover {
    background-color: var(--colour-accent);
    transition: background-color 200ms ease-out;
  }

  &:focus {
    outline: 2px solid var(--colour-accent);
    outline-offset: 2px;
  }

  &:hover ~ ${Label} > ${Icon} > ${MoonPath} {
    stroke: var(--colour-accent);
    transition: stroke 200ms ease-out;
  }
`;

const ToggleThumb = styled(Switch.Thumb)`
  display: block;
  width: 14px;
  height: 14px;
  background-color: var(--colour-primary-900);
  border-radius: 9999px;
  box-shadow: 0 2px 2px var(--blackA7);
  transition: transform 250ms;
  transform: translateX(-3px);
  transform-origin: left;
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(17px);
  }
`;
