import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

// Components

import Map from './components/Map/Map';

// Style
import GlobalStyle from './GlobalStyle';

function App() {
  const contentRef = useRef(null);
  const [dimensions, setDimensions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setDimensions({
      x: contentRef.current?.offsetWidth,
      y: contentRef.current?.offsetHeight,
    });
  }, []);

  return (
    <div className='app'>
      <GlobalStyle />
      <Sidebar>
        <p>Sidebar</p>
      </Sidebar>

      <Content__Container ref={contentRef}>
        <Map dimensions={dimensions}></Map>
      </Content__Container>
    </div>
  );
}

const Content__Container = styled.div`
  min-width: 400px;
  flex: 1;
  overflow: hidden;
`;

const Sidebar = styled.div`
  min-width: 400px;
  border: 1px solid #cf985f;
`;

export default App;
