import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

const Icon = ({ x, y, src }) => {
  const [TTOPEN, setTTOPEN] = useState(false);

  return (
    <Icon__Container
      onClick={() => setTTOPEN(!TTOPEN)}
      x={x}
      y={y}>
      <Image__Wrapper>
        <Image src={src} />
      </Image__Wrapper>
    </Icon__Container>
  );
};

const Icon__Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: ${(props) => props.x && `${props.x + 60}px`};
  top: ${(props) => props.y && `${props.y - 35}px`};

  width: 76px;
  height: 76px;
  background-color: var(--icon_background);
  border-radius: 100%;
  border: 1px dashed black;
`;

const Image__Wrapper = styled.div`
  width: 40px;
  height: 40px;
  overflow: visible;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: invert(92%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(99%) contrast(85%);
`;

export default Icon;
