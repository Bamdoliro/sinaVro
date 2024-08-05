import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconBlackPerson = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/blackPerson.png')}
      width={width}
      height={height}
    />
  );
};

export default IconBlackPerson;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
