import React from "react";
import styled from "styled-components/macro";
import VisuallyHidden from "../VisuallyHidden/MyAttempt/VisuallyHidden";
import PropTypes from "prop-types";

export default function Select({
  label,
  value,
  onChange,
  children,
  ...delegated
}) {
  if (!label) {
    throw new Error(
      `No label prop provided for Select component. This is a required prop for accessibility reasons.`
    );
  }

  if (!children) {
    throw new Error(
      `No children provided: please add some options using the HTML <option> tag.`
    );
  }

  if (!value) {
    throw new Error(
      `No value prop provided for Select component: please provide piece of .`
    );
  }
  function getDisplayedValue(value, children) {
    const childArray = React.Children.toArray(children);
    const selectedChild = childArray.find(
      (child) => child.props.value === value
    );

    return selectedChild.props.children;
  }

  const inputID = React.useId(null);

  const selectedItem = getDisplayedValue(value, children);

  return (
    <>
      <label htmlFor={inputID}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <Wrapper>
        <NativeSelect
          value={value}
          onChange={onChange}
          id={inputID}
        >
          {children}
        </NativeSelect>
        <Presentation {...delegated}>
          <Text>{selectedItem}</Text>
          <img src="../assets/images/icon-arrow-down.svg" />
        </Presentation>
      </Wrapper>
    </>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
  position: relative;
  inline-size: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  inline-size: 100%;
  block-size: 100%;
  opacity: 0;
  cursor: pointer;
  appearance: none;
`;

const Presentation = styled.div`
  padding: var(--size-xxs);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  display: flex;
  align-items: center;
  gap: 16px;
  pointer-events: none;
  transition: background 500ms;
  block-size: 100%;
  border-radius: var(--border-xs);

  ${NativeSelect}:focus + & {
    color: var(--text-body);
    outline: 2px solid;
    outline-color: var(--colour-accent);
    transition: outline 100ms, color 100ms;
  }

  ${NativeSelect}:hover + & {
    background: var(--background-input);
    transition: background 100ms;
    color: currentColor;
  }
`;

const Text = styled.p`
  margin-block-start: 2px;
  margin-block-end: 0;
`;
