import { Sidebar__Container, Logo__Wrapper, Page__Title, Action__Buttons, Search__Input, Filter__Container } from './Sidebar.styled';

// Assets
import LOGO from '../../assets/LOGO.png';

const Sidebar = ({ ICON_DATA, handleToggle }) => {
  const filters = [];
  getLayerTitles(ICON_DATA).forEach((layer) => {
    filters.push(
      <div
        className='layer'
        key={layer}>
        <h1>{layer}</h1>
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
        })}
      </div>
    );
  });

  return (
    <Sidebar__Container>
      <Logo__Wrapper>
        <img src={LOGO}></img>
      </Logo__Wrapper>
      <Page__Title>Hell Is Others Interactive Map (unofficial)</Page__Title>
      <Search__Input>
        <span>Search...</span>
        <span>SEARCH</span>
      </Search__Input>
      <Action__Buttons>
        <span>SHOW ALL</span>
        <span>HIDE ALL</span>
      </Action__Buttons>
      <Filter__Container>{filters}</Filter__Container>
    </Sidebar__Container>
  );
};

const getLayerTitles = (ICON_DATA) => {
  const layer_titles = [];
  ICON_DATA.map((e) => {
    layer_titles.find((element) => element == e.layer) || layer_titles.push(e.layer);
  });
  return layer_titles;
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
