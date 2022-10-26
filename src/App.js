import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

// Components
import Map from './components/Map/Map';
import Icon from './components/Icon/Icon';

// Style
import GlobalStyle from './GlobalStyle';

// Data
import IMAGES from './assets';

const ICON_DATA = {
  stores: [
    { name: 'bank', src: IMAGES.bank, size: 50, coordinates: { x: 823, y: 376 } },
    { name: 'savory', src: IMAGES.savoury, size: 50, coordinates: { x: 565, y: 298 } },
    { name: 'fertilizer', src: IMAGES.bulletModifer, size: 50, coordinates: { x: 811, y: 268 } },
    { name: 'pottery', src: IMAGES.vase, size: 50, coordinates: { x: 659, y: 188 } },
    { name: 'draw', src: IMAGES.drawer, size: 50, coordinates: { x: 655, y: 654 } },
  ],
};

function App() {
  console.clear();

  const icons = [];

  Object.entries(ICON_DATA).map(([key, value]) => {
    value.map((element, index) => {
      console.log(element);
      icons.push(
        <Icon
          key={index}
          x={element.coordinates.x}
          y={element.coordinates.y}
          src={element.src}></Icon>
      );
    });
  });

  return (
    <div className='app'>
      <GlobalStyle />

      {/* <Sidebar>
        <p>Sidebar</p>
      </Sidebar> */}

      <Content__Container>
        <Map>{icons}</Map>
      </Content__Container>
    </div>
  );
}

const Content__Container = styled.div`
  min-width: 400px;
  flex: 1;
  overflow: hidden;

  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

const Sidebar = styled.div`
  min-width: 400px;
  border: 1px solid #cf985f;
`;

export default App;
