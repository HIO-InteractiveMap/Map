// Style
import { Logo__Wrapper } from './Logo.styled';
// Assets
import LOGO from '../../assets/LOGO.png';

const Logo = () => {
  return (
    <Logo__Wrapper>
      <img src={LOGO}></img>
    </Logo__Wrapper>
  );
};

export default Logo;
