import React from 'react';
import styled from 'styled-components';

const Filter = ({ ICON_DATA, handleToggle, handleToggleAllTags, handleToggleExclude }) => {
  const filters = [];
  getUniqueLayers(ICON_DATA).forEach((layer) => {
    const tags = getTags2(ICON_DATA, layer, handleToggle, handleToggleExclude);
    const halfway = Math.floor(tags.length / 2);
    filters.push(
      <Layer__Container key={layer}>
        <Layer__Header
          onClick={() => handleToggleAllTags(layer)}
          onContextMenu={() => handleToggleExclude(layer)}>
          {layer}
        </Layer__Header>
        <Layer__Body>
          <Layer__Body__Col>{tags.slice(halfway, tags.length)}</Layer__Body__Col>
          <Layer__Body__Col>{tags.slice(0, halfway)}</Layer__Body__Col>
        </Layer__Body>
      </Layer__Container>
    );
  });

  return <Layer__Wrapper>{filters}</Layer__Wrapper>;
};

const getTags2 = (ICON_DATA, layer, handleToggle, handleToggleExclude) => {
  const tags = [];
  ICON_DATA.map((element, index) => {
    if (element.layer == layer) {
      if (ICON_DATA[index - 1] == undefined || element.name != ICON_DATA[index - 1].name) {
        tags.push(
          <Tag__Filter
            visible={element.visible}
            key={element.id}>
            <Tag__Icon>
              <img src={element.src}></img>
            </Tag__Icon>
            <Tag__Text>
              <p
                onClick={() => handleToggle(element.name, layer)}
                onContextMenu={() => handleToggleExclude(element.name)}>
                {element.name}
              </p>
            </Tag__Text>
            <Tag__Amount></Tag__Amount>
          </Tag__Filter>
        );
      }
    }
  });
  return tags;
};

const getUniqueTags = (ICON_DATA, layer) => {
  const tags = [];

  return tags;
};

const getUniqueLayers = (ICON_DATA) => {
  const layer_titles = [];
  ICON_DATA.map((e) => {
    layer_titles.find((element) => element == e.layer) || layer_titles.push(e.layer);
  });
  return layer_titles;
};

export default Filter;

const Tag__Filter = styled.div`
  display: flex;
  gap: 8px;

  opacity: ${(props) => props.size && `${props.size}px`};

  text-decoration: ${(props) => props.visible || `line-through`};
  opacity: ${(props) => props.visible || '0.4'};

  user-select: none;
`;

const Tag__Icon = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    display: block;
    object-fit: contain;
    filter: invert(42%) sepia(44%) saturate(430%) hue-rotate(350deg) brightness(100%) contrast(90%);
  }
`;

const Tag__Text = styled.div`
  p {
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;

    &:hover {
      opacity: 0.6;
      /* color: #ff1520;
      text-shadow: 0 0 25px rgba(255, 0, 0, 0.5), 0 0 55px rgba(255, 0, 0, 0.5), 0 0 115px rgba(255, 0, 0, 0.5); */
    }
  }
`;
const Tag__Amount = styled.div``;

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
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
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
