import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import TextInput from "../primitives/TextInput/TextInput";

function WordSearch({ searchTerm, onChange }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <Wrapper>
      <article aria-label="Word search">
        <TextInput
          label="Word Search"
          icon={<img src="./assets/images/icon-search.svg" />}
          value={searchTerm}
          onChange={onChange}
          placeholder="Search for any word..."
          providedRef={inputRef}
        />
      </article>
    </Wrapper>
  );
}

WordSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Wrapper = styled.section`
  margin-block-start: var(--size-l);
`;

export default WordSearch;
