import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import Icon_Vase from '../../assets/Icon_Vase.png';

const Icon = () => {
  const [TTOPEN, setTTOPEN] = useState(false);

  return (
    <Icon__Container onClick={() => setTTOPEN(!TTOPEN)}>
      <img src={Icon_Vase}></img>
      {TTOPEN && <p>BEANS AND TOAST MY GUYS</p>}
    </Icon__Container>
  );
};

const Icon__Container = styled.div`
  position: absolute;
  left: 659px;
  top: 188px;

  font-size: 128px;
`;

export default Icon;
