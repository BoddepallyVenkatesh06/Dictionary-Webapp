import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const wrapperVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const emojiVariants = {
  hidden: {
    opacity: 0,
    rotate: 60,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      rotate: {
        duration: 1,
        bounce: 0.75,
        type: "spring",
      },
    },
  },
};

function NoWordFound({ errorMsg }) {
  return (
    <Wrapper
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
    >
      <Emoji variants={emojiVariants}>😕</Emoji>
      <Subheading variants={childVariants}>{errorMsg.title}</Subheading>
      <Resolution variants={childVariants}>
        {errorMsg.message} {errorMsg.resolution}
      </Resolution>
    </Wrapper>
  );
}

NoWordFound.propTypes = {
  errorMsg: PropTypes.object.isRequired,
};

const Wrapper = styled(motion.section)`
  padding-block-start: var(--size-3xl);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Emoji = styled(motion.h1)`
  font-size: var(--font-size-xxl);
  margin-block-end: var(--size-l);
`;

const Subheading = styled(motion.h2)`
  font-size: var(--font-size-l);
  margin-block-end: var(--size-s);
`;

const Resolution = styled(motion.p)`
  font-size: var(--font-size-m);
  color: var(--text-subheading);
  text-align: center;
`;

export default NoWordFound;
