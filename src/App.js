import React, { useEffect, useState } from 'react';

// Components
import Map from './components/Map/Map';
import Icon from './components/Icon/Icon';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';

// Style
import GlobalStyle from './GlobalStyle';
import Chevron from './assets/right-chevron.png';
import { Content__Container, Sidebar__Close, Sidebar__Container } from './App.styled';

// Data
import DATA from './data';

function App() {
  const [ICON_DATA, setICON_DATA] = useState(DATA);
  const [navIsOpen, setNavIsOpen] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

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

      {windowSize.innerWidth < 800 ? (
        <Topbar
          ICON_DATA={ICON_DATA}
          handleToggle={handleToggle}
          handleToggleAllTags={handleToggleAllTags}
          handleToggleAll={handleToggleAll}
          handleToggleExclude={handleToggleExclude}
          handleOnMouseEnter={handleOnMouseEnter}
          handleOnMouseLeave={handleOnMouseLeave}
        />
      ) : (
        <Sidebar__Container navIsOpen={navIsOpen}>
          <Sidebar__Close
            navIsOpen={navIsOpen}
            onClick={() => setNavIsOpen(!navIsOpen)}>
            <img src={Chevron}></img>
          </Sidebar__Close>

          <Sidebar
            ICON_DATA={ICON_DATA}
            handleToggle={handleToggle}
            handleToggleAllTags={handleToggleAllTags}
            handleToggleAll={handleToggleAll}
            handleToggleExclude={handleToggleExclude}
            handleOnMouseEnter={handleOnMouseEnter}
            handleOnMouseLeave={handleOnMouseLeave}
          />
        </Sidebar__Container>
      )}

      <Content__Container>
        <Map initialPosition={windowSize.innerWidth < 800 ? -40 : 410}>{icons}</Map>
      </Content__Container>
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default App;
