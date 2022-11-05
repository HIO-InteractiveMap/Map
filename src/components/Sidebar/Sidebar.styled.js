import styled from 'styled-components';

export const Sidebar__Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 400px;
  padding: 15px;
  padding-right: 17px;

  // First border
  border-right: 2px solid #cf985f;
  // Second Border
  position: relative;
  &:before {
    content: ' ';
    position: absolute;
    z-index: -1;
    top: 0px;
    left: calc(100% - 5px);
    right: 2px;
    bottom: 0px;
    border-right: 2px solid #86623e;
  }
`;

export const Logo__Wrapper = styled.div`
  margin-top: -20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export const Page__Title = styled.h1`
  text-align: center;
  font-size: 16px;
  font-weight: 400;

  border-top: var(--primary_color) 1px solid;
  border-bottom: var(--primary_color) 1px solid;
  padding: 10px 0;
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

export const Search__Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  border: var(--primary_color) 1px solid;
  cursor: text;
  margin: 5px 0;
  font-weight: 400;

  & > span {
    font-size: 16px;
  }

  & > span:nth-child(2) {
    border-left: var(--primary_color) 1px solid;
    padding: 6px 12px;
    cursor: pointer;
  }
`;

export const Filter__Container = styled.div`
  & > div > p {
    cursor: pointer;
  }
`;
