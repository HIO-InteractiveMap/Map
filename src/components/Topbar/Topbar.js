import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { Topbar__Container, Dropdown__Container, Dropdown__Button, Dropdown__Content, Action__Buttons } from './Topbar.styled';
import Filter from '../Filter/Filter';
import Icon_Filter from '../../assets/Icon_Filter.png';

const Topbar = ({ ICON_DATA, handleToggle, handleToggleAllTags, handleToggleAll, handleToggleExclude, handleOnMouseEnter, handleOnMouseLeave }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Topbar__Container>
      <Logo />
      <Dropdown__Container>
        <Dropdown__Button onClick={() => setDropdownOpen(!dropdownOpen)}>
          <img
            src={Icon_Filter}
            alt='Filter Dropdown Icon'
          />
        </Dropdown__Button>
      </Dropdown__Container>

      <Dropdown__Content visible={dropdownOpen}>
        <Action__Buttons>
          <span onClick={() => handleToggleAll(true)}>SHOW ALL</span>
          <span onClick={() => handleToggleAll(false)}>HIDE ALL</span>
        </Action__Buttons>
        <Filter
          ICON_DATA={ICON_DATA}
          handleToggle={handleToggle}
          handleToggleAllTags={handleToggleAllTags}
          handleToggleExclude={handleToggleExclude}
          handleOnMouseEnter={handleOnMouseEnter}
          handleOnMouseLeave={handleOnMouseLeave}
        />
      </Dropdown__Content>
    </Topbar__Container>
  );
};

export default Topbar;
