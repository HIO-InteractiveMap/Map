import styled from 'styled-components';

export const Content__Container = styled.div`
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

export const Sidebar__Close = styled.div`
  position: absolute;
  height: 70px;
  width: 50px;
  right: -50px;
  top: 10px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 6px 8px 6px 4px;

  & > img {
    transform: ${(props) => props.navIsOpen && `rotate(180deg)`};
    filter: invert(66%) sepia(81%) saturate(297%) hue-rotate(343deg) brightness(86%) contrast(87%);
    width: 100%;
    display: block;
  }

  // Double Border
  border: 2px solid #cf985f;
  &:before {
    content: ' ';
    position: absolute;
    z-index: 9;

    left: 0;
    top: 2px;
    bottom: 2px;
    right: 2px;

    border: 2px solid #86623e;
    border-left: none;
  }
`;

export const Sidebar__Container = styled.div`
  position: absolute;
  background-color: black;
  z-index: 10;

  transform: ${(props) => props.navIsOpen || `translate(-100%)`};
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
  max-width: 400px;
  height: 100vh;

  // Dual Borders
  border-right: 2px solid #cf985f;
  &:before {
    content: ' ';
    position: absolute;
    z-index: -1;
    top: 0px;
    left: calc(100% - 5px);
    right: 2px;
    bottom: -25vh;
    border-right: 2px solid #86623e;
  }
`;
