import React from 'react';
import styled from 'styled-components/native';

interface Props {
  width: number;
  height: number;
}

const IconNote = ({ width, height }: Props) => {
  return (
    <StyledIcon source={require('../public/note.png')} width={width} height={height} />
  );
};

export default IconNote;

const StyledIcon = styled.Image<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
