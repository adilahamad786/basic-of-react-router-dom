import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {

  const NavLinkCss = ({isActive}) => {
    return { 
      color: isActive ? '#95bcf0' : 'white',
      paddingBottom: isActive ? '0.25rem' : '0px',
      borderBottom: isActive ? '4px solid #95bcf0' : 'none',
    }
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink style={NavLinkCss} to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink style={NavLinkCss} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink style={NavLinkCss} to="/products">Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
