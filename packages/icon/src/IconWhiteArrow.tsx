import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconWhiteArrow = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/whiteArrow.png')}
      width={width}
      height={height}
    />
  );
};

export default IconWhiteArrow;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
