import { Sidebar__Container, Logo__Wrapper, Page__Title, Action__Buttons, Search__Input, Filter__Container } from './Sidebar.styled';
import Filter from '../Filter/Filter';

// Assets
import LOGO from '../../assets/LOGO.png';

const Sidebar = ({ ICON_DATA, handleToggle, handleToggleAllTags, handleToggleAll, handleToggleExclude }) => {
  return (
    <Sidebar__Container onContextMenu={(e) => e.preventDefault()}>
      <Logo__Wrapper>
        <img src={LOGO}></img>
      </Logo__Wrapper>
      {/* <Page__Title>Hell Is Others Interactive Map</Page__Title> */}
      {/* <Search__Input>
        <span>Search...</span>
        <span>SEARCH</span>
      </Search__Input> */}
      <Action__Buttons>
        <span onClick={() => handleToggleAll(true)}>SHOW ALL</span>
        <span onClick={() => handleToggleAll(false)}>HIDE ALL</span>
      </Action__Buttons>
      <Filter
        ICON_DATA={ICON_DATA}
        handleToggle={handleToggle}
        handleToggleAllTags={handleToggleAllTags}
        handleToggleExclude={handleToggleExclude}
      />
    </Sidebar__Container>
  );
};

export default Sidebar;

// return (
//   <div
//     className='layer'
//     key={key}>
//     <h1>{key}</h1>
//     {ICON_DATA[key].map((el) => {
//       return (
//         <p
//           key={el.id}
//           onClick={() => handleToggle(el.id, key)}>
//           {el.name}
//         </p>
//       );
//     })}
//   </div>
// );
