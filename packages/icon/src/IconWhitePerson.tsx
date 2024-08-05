import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconWhitePerson = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/whitePerson.png')}
      width={width}
      height={height}
    />
  );
};

export default IconWhitePerson;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
