import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconBlackArrow = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/blackArrow.png')}
      width={width}
      height={height}
    />
  );
};

export default IconBlackArrow;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
