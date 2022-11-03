import React from 'react';
import styled from 'styled-components';

const Filter = ({ ICON_DATA, handleToggle }) => {
  const filters = [];
  getLayerTitles(ICON_DATA).forEach((layer) => {
    const tags = getTags(ICON_DATA, layer, handleToggle);
    const halfway = Math.floor(tags.length / 2);
    filters.push(
      <Layer__Container key={layer.id}>
        <Layer__Header>{layer}</Layer__Header>
        <Layer__Body>
          <Layer__Body__Col>{tags.slice(halfway, tags.length)} </Layer__Body__Col>
          <Layer__Body__Col>{tags.slice(0, halfway)}</Layer__Body__Col>
        </Layer__Body>
      </Layer__Container>
    );
  });

  return <Layer__Wrapper>{filters}</Layer__Wrapper>;
};

const getTags = (ICON_DATA, layer, handleToggle) => {
  const tags = [];
  ICON_DATA.map((element) => {
    element.layer == layer &&
      tags.push(
        <p
          key={element.id}
          className={element.visable ? '' : 'visable'}
          onClick={() => handleToggle(element.id, layer)}>
          {element.name}
        </p>
      );
  });
  return tags;
};

const getLayerTitles = (ICON_DATA) => {
  const layer_titles = [];
  ICON_DATA.map((e) => {
    layer_titles.find((element) => element == e.layer) || layer_titles.push(e.layer);
  });
  return layer_titles;
};

export default Filter;

const Layer__Container = styled.div``;

const Layer__Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Layer__Header = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 5px;
`;

const Layer__Body = styled.div`
  display: flex;

  & > div {
    flex: 50%;
  }
`;

const Layer__Body__Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  p {
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
    user-select: none;

    &:hover {
      color: #ff1520;
      text-shadow: 0 0 25px rgba(255, 0, 0, 0.5), 0 0 55px rgba(255, 0, 0, 0.5), 0 0 115px rgba(255, 0, 0, 0.5);
    }
  }

  & > .visable {
    text-decoration: line-through;
    opacity: 0.4;
  }
`;

{
  /* <h1>{layer}</h1>
        {ICON_DATA.map((element) => {
          if (element.layer == layer) {
            return (
              <p
                key={element.id}
                onClick={() => handleToggle(element.id, layer)}>
                {element.name}
              </p>
            );
          }
        })} */
}
