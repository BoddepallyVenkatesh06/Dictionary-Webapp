import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/macro";
import { motion, useReducedMotion } from "framer-motion";
import Source from "../Source/Source";
import SectionDivider from "../primitives/SectionDivider/SectionDivider";

const wrapperVariants = {
  start: {
    opacity: 1,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const childVariants = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const childVariantsReducedMotion = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

function WordMeaning({ payload }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={wrapperVariants}
      initial="start"
      animate="end"
      aria-label="Word Meanings"
    >
      {payload[0]?.meanings.map((entry, index) => {
        return (
          <React.Fragment key={index}>
            <DividerContainer
              variants={
                shouldReduceMotion ? childVariantsReducedMotion : childVariants
              }
            >
              <PartOfSpeech>{entry.partOfSpeech}</PartOfSpeech>
              <SectionDivider />
            </DividerContainer>
            <Subheader
              variants={
                shouldReduceMotion ? childVariantsReducedMotion : childVariants
              }
            >
              Meaning
            </Subheader>
            <DefinitionList>
              {entry.definitions.map((entry, index) => {
                return (
                  <React.Fragment key={index}>
                    <DefinitionItem
                      variants={
                        shouldReduceMotion
                          ? childVariantsReducedMotion
                          : childVariants
                      }
                    >
                      {entry.definition}
                    </DefinitionItem>
                    {entry.example && (
                      <Example
                        variants={
                          shouldReduceMotion
                            ? childVariantsReducedMotion
                            : childVariants
                        }
                      >
                        <ExampleQuote>{entry.example}</ExampleQuote>
                      </Example>
                    )}
                  </React.Fragment>
                );
              })}
            </DefinitionList>
            {entry.synonyms[0] && (
              <SynonymWrapper
                variants={
                  shouldReduceMotion
                    ? childVariantsReducedMotion
                    : childVariants
                }
              >
                <Subheader style={{ display: "inline" }}>Synonyms</Subheader>
                <SynonymList>
                  {entry.synonyms.map((entry, index) => {
                    return <SynonymItem key={index}>{entry}</SynonymItem>;
                  })}
                </SynonymList>
              </SynonymWrapper>
            )}
          </React.Fragment>
        );
      })}
      <SectionDivider />
      <Source
        payload={payload}
        variants={
          shouldReduceMotion ? childVariantsReducedMotion : childVariants
        }
      />
    </motion.article>
  );
}

WordMeaning.propTypes = {
  payload: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const DividerContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: var(--size-s);
`;

const PartOfSpeech = styled.h2`
  font-size: var(--font-size-l);
  font-style: italic;
`;

const Subheader = styled(motion.h3)`
  margin-block-end: var(--size-s);
  font-weight: var(--font-weight-regular);
  color: var(--text-subheading);
  font-size: var(--font-size-m);
`;

const DefinitionList = styled(motion.ul)`
  padding-inline-start: 1rem;
  margin-block-end: var(--size-s);
`;

const DefinitionItem = styled(motion.li)`
  margin-block-end: 12px;
  padding-inline: 12px;

  &::marker {
    color: var(--colour-accent);
  }
`;

const SynonymWrapper = styled(motion.div)`
  display: flex;
  gap: var(--size-s);
`;

const SynonymList = styled.ul`
  display: flex;
  align-items: baseline;
  padding-inline-start: 0;
  flex-wrap: wrap;
  gap: 8px;
`;

const SynonymItem = styled.li`
  list-style: none;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  color: var(--colour-accent);
`;

const ExampleQuote = styled.blockquote`
  font-style: italic;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`;

const Example = styled(motion.li)`
  color: var(--text-subheading);
  padding-inline: 12px;
  margin-block-end: 12px;

  &::marker {
    color: transparent;
  }
`;

export default WordMeaning;
