import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconMailBox = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/mailBox.png')} width={width} height={height} />
  );
};

export default IconMailBox;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
