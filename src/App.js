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
  const [ICON_DATA, setICON_DATA] = useState(DATA);

  const handleToggle = (id) => {
    setICON_DATA((current) =>
      current.map((obj) => {
        if (obj.name == id) {
          return { ...obj, visible: !obj.visible };
        }
        return obj;
      })
    );
  };

  const handleToggleAllTags = (layer) => {
    setICON_DATA((current) => {
      const newData = [];

      if (current.filter((obj) => obj.layer.includes(layer)).filter((obj) => obj.visible === false).length > 0) {
        current.map((obj) => {
          obj.layer == layer ? newData.push({ ...obj, visible: true }) : newData.push({ ...obj });
        });
      } else {
        current.map((obj) => {
          obj.layer == layer ? newData.push({ ...obj, visible: false }) : newData.push({ ...obj });
        });
      }

      return newData;
    });
  };

  const handleToggleAll = (option) => {
    setICON_DATA((current) => {
      const newData = [];
      current.map((obj) => {
        newData.push({ ...obj, visible: option });
      });
      return newData;
    });
  };

  const handleToggleExclude = (id) => {
    setICON_DATA((current) =>
      current.map((obj) => {
        if (obj.name != id) {
          return { ...obj, visible: false };
        }
        return { ...obj, visible: true };
      })
    );
  };

  const handleOnMouseEnter = (id) => {
    setICON_DATA((current) =>
      current.map((obj) => {
        if (obj.name != id) {
          return { ...obj, hover: false };
        }
        return { ...obj, hover: true };
      })
    );
  };

  const handleOnMouseLeave = () => {
    setICON_DATA((current) =>
      current.map((obj) => {
        return { ...obj, hover: false };
      })
    );
  };

  const icons = [];
  ICON_DATA.map((icon) => {
    icon.visible &&
      icons.push(
        <Icon
          key={icon.id}
          x={icon.coordinates.x}
          y={icon.coordinates.y}
          src={icon.src}
          size={icon.size}
          hover={icon.hover}
        />
      );
  });

  return (
    <div className='app'>
      <GlobalStyle />

      <Sidebar
        ICON_DATA={ICON_DATA}
        handleToggle={handleToggle}
        handleToggleAllTags={handleToggleAllTags}
        handleToggleAll={handleToggleAll}
        handleToggleExclude={handleToggleExclude}
        handleOnMouseEnter={handleOnMouseEnter}
        handleOnMouseLeave={handleOnMouseLeave}
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
