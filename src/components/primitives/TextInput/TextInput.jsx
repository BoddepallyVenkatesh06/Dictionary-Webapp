import React from "react";
import styled from "styled-components/macro";
import VisuallyHidden from "../VisuallyHidden/MyAttempt/VisuallyHidden";
import PropTypes from "prop-types";

export default function TextInput({
  label,
  value,
  onChange,
  icon,
  providedRef,
  ...delegated
}) {
  const id = React.useId();
  const reactRef = React.useRef(null);
  const formRef = providedRef || reactRef;

  function handleSubmit(e) {
    e.preventDefault();
    formRef.current.blur();
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {icon}
      </label>
      <Input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        {...delegated}
        ref={formRef}
      />
    </Wrapper>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.node,
  providedRef: PropTypes.object,
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background: var(--background-input);
  block-size: clamp(3rem, 4.071vw + 2.046rem, 4rem);
  border-radius: var(--border-m);
  padding-inline: var(--size-l);
  gap: var(--size-l);
  transition: filter 0.2s ease-out;

  &:focus-within {
    outline: 1px solid var(--colour-accent);
  }
`;

const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: var(--text-body);
  font-weight: var(--font-weight-bold);
  font-size: clamp(1rem, 1.018vw + 0.761rem, 1.25rem);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--text-subheading);
  }
`;
