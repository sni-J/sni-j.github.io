import React from "react";
import styled from "styled-components";

const ScrollDivWrapper = styled.div<{ horizontal: boolean }>`
  overflow-x: ${({ horizontal }) => (horizontal ? "auto" : "hidden")};
  overflow-y: ${({ horizontal }) => (horizontal ? "hidden" : "auto")};
  width: 100%;
  height: 100%;
  scroll-snap-type: y mandatory;

  > * {
    scroll-snap-align: start;
  }
`;

type ScrollDivProps = {
  horizontal?: boolean;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
};

const ScrollDiv: React.FC<ScrollDivProps> = ({
  horizontal = false,
  setPosition,
  children,
}) => {
  const onScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    setPosition(
      horizontal ? e.currentTarget.scrollLeft : e.currentTarget.scrollTop
    );
  };

  return (
    <ScrollDivWrapper onScroll={onScroll} horizontal={horizontal}>
      {children}
    </ScrollDivWrapper>
  );
};

export default ScrollDiv;
