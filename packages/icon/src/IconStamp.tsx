import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconStamp = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/stamp.png')} width={width} height={height} />
  );
};

export default IconStamp;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
