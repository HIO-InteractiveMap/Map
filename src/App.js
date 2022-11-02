import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

// Components
import Map from './components/Map/Map';
import Icon from './components/Icon/Icon';
import Sidebar from './components/Sidebar/Sidebar';

// Style
import GlobalStyle from './GlobalStyle';

// Data
import DATA from './data';

function App() {
  console.log('');
  const [ICON_DATA, setICON_DATA] = useState(DATA);

  const handleToggle = (id, layer) => {
    console.log(id);

    setICON_DATA((current) =>
      current.map((obj) => {
        if (obj.id == id) {
          return { ...obj, visable: !obj.visable };
        }

        return obj;
      })
    );
  };

  console.log(ICON_DATA);

  const icons = [];
  ICON_DATA.map((icon) => {
    icon.visable &&
      icons.push(
        <Icon
          key={icon.id}
          x={icon.coordinates.x}
          y={icon.coordinates.y}
          src={icon.src}
          size={icon.size}
        />
      );
  });

  return (
    <div className='app'>
      <GlobalStyle />

      <Sidebar
        ICON_DATA={ICON_DATA}
        handleToggle={handleToggle}
      />

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

export default App;
