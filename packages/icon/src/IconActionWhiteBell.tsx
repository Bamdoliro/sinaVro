import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconActionWhiteBell = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/actionWhiteBell.png')}
      width={width}
      height={height}
    />
  );
};

export default IconActionWhiteBell;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
