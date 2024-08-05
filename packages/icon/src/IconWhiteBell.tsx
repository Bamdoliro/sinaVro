import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconWhiteBell = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/whiteBell.png')}
      width={width}
      height={height}
    />
  );
};

export default IconWhiteBell;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
