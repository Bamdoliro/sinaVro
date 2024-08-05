import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconBook = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/book.png')} width={width} height={height} />
  );
};

export default IconBook;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
