import styled from 'styled-components';

export const Topbar__Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 50;

  width: 100vw;
  max-height: 80px;
  transform-style: preserve-3d;
  background-color: black;
  padding: 6px 8px;
  padding-bottom: 9px;

  & > div {
    flex: 1 1;
  }

  & > div:nth-child(1) {
    max-width: 60px;
  }

  // Double Border
  border-bottom: 2px solid #cf985f;
  &:before {
    content: ' ';
    position: absolute;
    z-index: 9;
    pointer-events: none;

    top: 0;
    bottom: 2px;
    left: 0;
    right: 0;

    border-bottom: 2px solid #86623e;
  }
`;

export const Dropdown__Container = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
`;

export const Dropdown__Button = styled.div`
  border: 1px solid #cf995f63;

  height: 35px;
  width: 55px;

  padding: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: invert(69%) sepia(51%) saturate(443%) hue-rotate(345deg) brightness(87%) contrast(84%);
    display: block;
  }
`;

export const Dropdown__Content = styled.div`
  position: absolute;
  background-color: black;
  left: 0;
  right: 0;
  bottom: 0;
  top: 100%;

  width: 100vw;
  height: 100vh;
  opacity: ${(props) => props.visible || `0.8`};
  transform: translateZ(-10px);
  transform: ${(props) => props.visible || `translateY(-125%)`};
  transition: transform 0.2s cubic-bezier(0, 0, 0.4, 1), opacity 0.15s ease-in-out;
  z-index: -51;

  overflow-y: scroll;

  & > div:nth-child(1) {
    border-top: none;
  }

  & > div:nth-child(2) {
    padding: 8px 12px;
  }
`;

export const Action__Buttons = styled.div`
  border-top: var(--primary_color) 1px solid;
  border-bottom: var(--primary_color) 1px solid;
  padding: 10px 0;

  display: flex;
  justify-content: center;
  font-size: 16px;
  gap: 25px;
  font-weight: 400;

  & > span {
    font-size: 16px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      user-select: none;
    }
  }
`;
