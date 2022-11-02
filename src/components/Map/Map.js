import React, { useRef, useEffect, useState, useCallback } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

// Style
import { Map__Wrapper, Map__Container } from './Map.styled';

// Components
import Icon from '../Icon/Icon';

// Assets
import MapIMG from '../../assets/Map_Downtown_EN_v2.png';

const Map = ({ children }) => {
  return (
    <TransformWrapper
      limitToBounds={false}
      initialScale={1}
      minScale={0.2}
      maxScale={2}
      doubleClick={{ disabled: true }}>
      <TransformComponent>
        <Map__Container>
          <Map__Wrapper src={MapIMG} />
          {children}
        </Map__Container>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Map;

// Previous attempt at centering: Think the TransformWrapper is larger than the container div, need to look into
// initialPositionX={(75 / 100) * dimensions.x - mapWidth * 0.4} initialPositionY={(3.5 / 100) * dimensions.y}

// Content Container size
// const contentRef = useRef(null);
// const [dimensions, setDimensions] = useState({ x: 0, y: 0 });

// useEffect(() => {
//   setDimensions({
//     x: contentRef.current?.offsetWidth,
//     y: contentRef.current?.offsetHeight,
//   });
// }, []);
