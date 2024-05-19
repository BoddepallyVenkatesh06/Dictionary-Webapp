import PropTypes from "prop-types";
import styled from "styled-components/macro";
import WordSummary from "../WordSummary/WordSummary";
import WordMeaning from "../WordMeaning/WordMeaning";
import NoWordFound from "../NoWordFound/NoWordFound";
import PageLoadingSkeleton from "../PageLoadingSkeleton/PageLoadingSkeleton";

function Result({ payload, payloadReceived, status }) {
  if (status === "idle") {
    return null;
  }

  if (status === "loading") {
    return (
      <Wrapper key="loading">
        <PageLoadingSkeleton />
      </Wrapper>
    );
  }

  if (status === "success" && payloadReceived) {
    return (
      <Wrapper key="success">
        <WordSummary payload={payload} />
        <WordMeaning payload={payload} />
      </Wrapper>
    );
  }

  if (status === "error" && payloadReceived) {
    return (
      <Wrapper key="error">
        <NoWordFound errorMsg={payload} />
      </Wrapper>
    );
  }
}

Result.propTypes = {
  payload: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  payloadReceived: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
};

const Wrapper = styled.section`
  margin-block-start: var(--size-xl);
  display: flex;
  flex-direction: column;
`;

export default Result;
