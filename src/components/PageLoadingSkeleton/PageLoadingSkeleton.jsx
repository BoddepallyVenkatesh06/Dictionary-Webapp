import { motion } from "framer-motion";
import styled from "styled-components/macro";

const skeletonItemVariants = {
  start: {
    opacity: 0.5,
  },
  end: {
    opacity: 0.75,
  },
};

const wrapperVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const transition = {
  repeat: Infinity,
  repeatType: "mirror",
  duration: 0.5,
};

const elProps = {
  variants: skeletonItemVariants,
  initial: "start",
  animate: "end",
  transition: transition,
};

export default function PageLoadingSkeleton() {
  return (
    <Wrapper
      variants={wrapperVariants}
      initial="start"
      animate="end"
    >
      <WordSummary>
        <Titles>
          <HeadingSkeleton {...elProps} />
          <SubHeadingSkeleton {...elProps} />
        </Titles>
        <PlaySkeleton {...elProps} />
      </WordSummary>
      <WordDefinition>
        <DividerSkeleton {...elProps} />
        <SubHeadingSkeleton {...elProps} />
        <List>
          <ListItem>
            <BulletSkeleton {...elProps} />
            <LineSkeleton {...elProps} />
          </ListItem>
          <ListItem>
            <BulletSkeleton {...elProps} />
            <LineSkeleton {...elProps} />
          </ListItem>
          <ListItem>
            <BulletSkeleton {...elProps} />
            <LineSkeleton {...elProps} />
          </ListItem>
          <ListItem>
            <BulletSkeleton {...elProps} />
            <LineSkeleton {...elProps} />
          </ListItem>
        </List>
      </WordDefinition>
      <WordDefinition>
        <DividerSkeleton {...elProps} />
        <SubHeadingSkeleton {...elProps} />
        <List>
          <ListItem>
            <BulletSkeleton {...elProps} />
            <LineSkeleton {...elProps} />
          </ListItem>
          <ListItem>
            <BulletSkeleton {...elProps} />
            <LineSkeleton {...elProps} />
          </ListItem>
          <ListItem>
            <BulletSkeleton {...elProps} />
            <LineSkeleton {...elProps} />
          </ListItem>
          <ListItem>
            <BulletSkeleton {...elProps} />
            <LineSkeleton {...elProps} />
          </ListItem>
        </List>
      </WordDefinition>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-block-start: 0.5rem;
`;

const WordSummary = styled.div`
  display: flex;
  align-items: center;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  inline-size: 100%;
`;

const SkeletonBase = styled(motion.div)`
  background: var(--background-input);
  border-radius: var(--border-xs);
`;

const HeadingSkeleton = styled(SkeletonBase)`
  block-size: var(--font-size-xl);
  inline-size: 50%;
`;

const SubHeadingSkeleton = styled(SkeletonBase)`
  block-size: var(--font-size-l);
  inline-size: 35%;
`;

const PlaySkeleton = styled(SkeletonBase)`
  inline-size: var(--size-3xl);
  block-size: var(--size-3xl);
  aspect-ratio: 1/1;
  border-radius: 9999px;
`;

const WordDefinition = styled.div`
  display: flex;
  flex-direction: column;
`;

const DividerSkeleton = styled(SkeletonBase)`
  block-size: 5px;
  margin-block: var(--size-2xl);
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block-start: var(--size-l);
`;

const ListItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BulletSkeleton = styled(SkeletonBase)`
  block-size: 0.5rem;
  inline-size: 0.5rem;
  aspect-ratio: 1/1;
`;

const LineSkeleton = styled(SkeletonBase)`
  block-size: 1rem;
  inline-size: 100%;
`;
