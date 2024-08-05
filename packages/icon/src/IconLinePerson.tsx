import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconLinePerson = ({ width, height }: Props) => {
  return (
    <StyledIcon
      source={require('../public/linePerson.png')}
      width={width}
      height={height}
    />
  );
};

export default IconLinePerson;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
