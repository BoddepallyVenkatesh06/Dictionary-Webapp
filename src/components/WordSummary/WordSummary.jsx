import PropTypes from "prop-types";
import styled from "styled-components/macro";
import AudioButton from "../AudioButton/AudioButton";
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const variantsReducedMotion = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

function WordSummary({ payload }) {
  const wordTitle = payload[0]?.word;
  const phonetic = payload[0]?.phonetic;
  const audioSrc = payload[0]?.phonetics.find((entry) => entry.audio)?.audio;

  const shouldReduceMotion = useReducedMotion();

  return (
    <Wrapper
      variants={shouldReduceMotion ? variantsReducedMotion : variants}
      initial="start"
      animate="end"
      aria-label="Word summary & pronunciation"
    >
      {payload[0] && (
        <>
          <Word>
            <Title>{wordTitle}</Title>
            <Phonetic>{phonetic}</Phonetic>
          </Word>
          {audioSrc && (
            <Audio>
              <AudioButton src={audioSrc} />
            </Audio>
          )}
        </>
      )}
    </Wrapper>
  );
}

WordSummary.propTypes = {
  payload: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const Wrapper = styled(motion.article)`
  display: flex;
  align-items: center;
`;

const Word = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  color: var(--text-heading);
  font-size: var(--font-size-xl);
`;

const Phonetic = styled.span`
  font-size: var(--font-size-l);
  color: var(--colour-accent);
`;

const Audio = styled.div`
  margin-inline-start: auto;
`;

export default WordSummary;
