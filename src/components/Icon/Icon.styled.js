import styled from 'styled-components';

export const Icon__Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: ${(props) => props.x && `${props.x}px`};
  top: ${(props) => props.y && `${props.y}px`};

  width: ${(props) => props.size && `${props.size}px`};
  height: ${(props) => props.size && `${props.size}px`};

  transform: ${(props) => props.isHovered && `scale(1.2)`};
  transition: all 0.1s ease-in-out;

  background-color: red;
  background-color: var(--icon_background);
  background-color: ${(props) => props.isHovered && `#c49a6d`};
  border-radius: 100%;
  border: 1px dashed var(--icon_foreground);
  padding: 6px;

  z-index: ${(props) => props.isHovered && 2};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 28px;
  max-height: 28px;
  object-fit: contain;
  filter: invert(92%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(99%) contrast(85%);
`;
