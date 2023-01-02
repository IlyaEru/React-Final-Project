import { NavLink } from 'react-router-dom';
import {
  StyledMenuContainer,
  StyledMenuList,
  StyledMenuListItem,
  StyledThemeToggleContainer,
} from './Menu.style';
import { links } from './Menu.constants';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { themeContext } from '../../App';
export default function Menu() {
  const { theme, setTheme } = useContext(themeContext);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'light');
    localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
  };
  return (
    <StyledMenuContainer>
      <div className="place-holder"></div>
      <StyledMenuList>
        {links.map((link) => (
          <StyledMenuListItem key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </StyledMenuListItem>
        ))}
      </StyledMenuList>
      <StyledThemeToggleContainer>
        <input
          checked={theme === 'dark'}
          onChange={handleThemeChange}
          type="checkbox"
          id="darkmode-toggle"
        />
        <label htmlFor="darkmode-toggle">
          <FaSun className="sun" />
          <FaMoon className="moon" />
        </label>
      </StyledThemeToggleContainer>
    </StyledMenuContainer>
  );
}
