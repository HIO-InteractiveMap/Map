import React, { useState, useRef, useEffect } from 'react';
import { useWindowSize } from '@react-hook/window-size';
import { UncontrolledReactSVGPanZoom, ReactSVGPanZoom } from 'react-svg-pan-zoom';
import styled from 'styled-components';

// Style
import GlobalStyle from './GlobalStyle';

// Assets
import Map from './assets/Map_Downtown_EN_v2.png';

function App() {
  const Viewer = useRef(null);
  const [tool, onChangeTool] = useState('pan');
  const [value, onChangeValue] = useState(0);
  const [width, height] = useWindowSize({ initialWidth: 400, initialHeight: 400 });

  useEffect(() => {
    const view = Viewer.current;
    view.fitToViewer();
  }, []);

  const transformOptions = {
    initialScale: 0.2,
    minScale: 0.5,
    maxScale: 2,
  };

  return (
    <div className='app'>
      <GlobalStyle />

      <Sidebar>
        <p>website</p>
      </Sidebar>

      <Content__Container>
        <ReactSVGPanZoom width={width} height={height} ref={Viewer} value={value} onChangeValue={onChangeValue} tool={tool} onChangeTool={onChangeTool} SVGBackground='black' background='black' options={transformOptions}>
          <svg width={1885} height={2048}>
            <g>
              <image href={Map} />
            </g>
          </svg>
        </ReactSVGPanZoom>

        {/* <UncontrolledReactSVGPanZoom ref={Viewer} width={1885} height={2048} defaultTool='pan'>
          <svg width={1885} height={2048}>
            <g>
              <image href={Map} />
            </g>
          </svg>
        </UncontrolledReactSVGPanZoom> */}
      </Content__Container>
    </div>
  );
}

const Content__Container = styled.div`
  /* padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px; */
`;

const Sidebar = styled.div`
  min-width: 400px;
  border: 1px solid #cf985f;
`;

export default App;
