import styled from "styled-components/macro";
import VisuallyHidden from "../primitives/VisuallyHidden/MyAttempt/VisuallyHidden";

export default function Logo() {
  return (
    <Wrapper href="#">
      <VisuallyHidden>DictionaryApp</VisuallyHidden>
      <img
        src="./assets/images/logo.svg"
        alt="DictionaryApp"
        style={{ height: "100%" }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.a`
  margin-inline-end: auto;
`;
