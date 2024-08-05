import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconCommon = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/common.png')} width={width} height={height} />
  );
};

export default IconCommon;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
