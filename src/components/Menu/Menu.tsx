import { NavLink } from 'react-router-dom';
import {
  StyledMenuContainer,
  StyledMenuList,
  StyledMenuListItem,
} from './Menu.style';
import { links } from './Menu.constants';
export default function Menu() {
  return (
    <StyledMenuContainer>
      <StyledMenuList>
        {links.map((link) => (
          <StyledMenuListItem key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </StyledMenuListItem>
        ))}
      </StyledMenuList>
    </StyledMenuContainer>
  );
}
