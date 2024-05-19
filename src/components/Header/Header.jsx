import styled from "styled-components/macro";
import FontSelect from "../FontSelect/FontSelect";
import ThemeSelect from "../ThemeSelect/ThemeSelect";
import Logo from "../Logo/Logo";
import SectionDivider from "../primitives/SectionDivider/SectionDivider";

export default function Header() {
  return (
    <Wrapper aria-label="Change the visual theme of page">
      <Logo />
      <FontSelect />
      <SectionDivider orientation="vertical" />
      <ThemeSelect />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  block-size: 2rem;
  gap: var(--size-s);
`;
