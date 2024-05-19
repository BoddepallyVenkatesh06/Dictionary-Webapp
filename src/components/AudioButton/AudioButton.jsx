import styled from "styled-components/macro";
import PropTypes from "prop-types";
import VisuallyHidden from "../primitives/VisuallyHidden/MyAttempt";

function AudioButton({ src }) {
  function handleClick(src) {
    const audio = new Audio(src);
    audio.play();
  }

  return (
    <Wrapper
      onClick={() => {
        handleClick(src);
      }}
    >
      <VisuallyHidden>Play pronuncuation of word</VisuallyHidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
      >
        <g
          fill="#A445ED"
          fillRule="evenodd"
        >
          <circle
            cx="37.5"
            cy="37.5"
            r="37.5"
            opacity=".25"
          />
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>
    </Wrapper>
  );
}

AudioButton.propTypes = {
  src: PropTypes.string.isRequired,
};

const Wrapper = styled.button`
  background: none;
  border: none;
  inline-size: var(--size-3xl);
  padding: 0;
  cursor: pointer;

  & circle {
    transition: opacity 400ms ease-in;
  }

  &:hover circle {
    opacity: 1;
    transition: opacity 200ms ease-out;
  }

  & path {
    fill: #a445ed;
    transition: fill 400ms ease-in;
  }

  &:hover path {
    fill: white;
    transition: fill 200ms ease-out;
  }
`;

export default AudioButton;
