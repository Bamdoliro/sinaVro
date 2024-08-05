import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconActionBlackBell = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/actionBlackBell.png')}
      width={width}
      height={height}
    />
  );
};

export default IconActionBlackBell;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
