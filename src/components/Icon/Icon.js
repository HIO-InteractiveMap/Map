import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Icon__Container, Image } from './Icon.styled';

const Icon = ({ x, y, src, size }) => {
  const [TTOPEN, setTTOPEN] = useState(false);
  return (
    <Icon__Container
      onClick={() => setTTOPEN(!TTOPEN)}
      x={x}
      y={y}
      size={size}>
      <Image src={src} />
    </Icon__Container>
  );
};

export default Icon;
