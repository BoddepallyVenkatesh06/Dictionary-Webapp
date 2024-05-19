import React from "react";
import styled from "styled-components/macro";
import VisuallyHidden from "../VisuallyHidden/MyAttempt";
import {
  CheckCircle,
  XCircle,
  Meh,
  Smile,
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  AlertTriangle,
  Info,
  AlertOctagon,
  X,
} from "react-feather";
import HamburgerIcon from "../../HamburgerIcon";

export default function Icon({
  label,
  id,
  size,
  strokeWidth,
  state,
  ...delegated
}) {
  const icons = {
    check: CheckCircle,
    cross: XCircle,
    unsure: Meh,
    smile: Smile,
    search: Search,
    chevronDown: ChevronDown,
    chevronUp: ChevronUp,
    menu: HamburgerIcon,
    help: HelpCircle,
    notice: Info,
    warning: AlertTriangle,
    error: AlertOctagon,
    close: X,
  };

  const IconSVG = icons[id];

  if (!IconSVG) {
    throw new Error(`Icon with id ${id} does not exist.`);
  }

  return (
    <Wrapper
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
      }}
      {...delegated}
    >
      <VisuallyHidden>{label}</VisuallyHidden>

      <IconSVG
        color="currentColor"
        size={size}
        state={state}
        strokeWidth={strokeWidth}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  block-size: var(--size);
  inline-size: var(--size);

  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;
