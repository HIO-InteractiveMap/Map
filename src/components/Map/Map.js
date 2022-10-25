import React, { useRef, useEffect, useState, useCallback } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

// Components
import Icon from '../Icon/Icon';

// Assets
import MapIMG from '../../assets/Map_Downtown_EN_v2.png';

const Map = ({ dimensions }) => {
  const mapHeight = 2048;
  const mapWidth = 1885;

  if (dimensions.x == 0) return false;

  return (
    <TransformWrapper limitToBounds={false} centerZoomedOut={true} initialScale={0.4} minScale={0.2} maxScale={2} initialPositionX={(75 / 100) * dimensions.x - mapWidth * 0.4} initialPositionY={(3.5 / 100) * dimensions.y}>
      <TransformComponent>
        <img style={{ width: `${mapWidth}px`, height: `100%`, objectFit: 'contain' }} src={MapIMG} />
        <Icon></Icon>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Map;
