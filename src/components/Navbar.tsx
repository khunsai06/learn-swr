import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav>
         <Nav />
      </nav>
   );
};

const Nav = () => {
   return (
      <ul>
         <NavItem to="/" linkText="Parallel & Depended" />
         <NavItem to="/" linkText="Dynamic" />
         <NavItem to="/" linkText="Pagination" />
         <NavItem to="/" linkText="Infinite" />
         <NavItem to="/" linkText="Placeholder" />
         <NavItem to="/" linkText="Initialize" />
         <NavItem to="/mutation" linkText="Mutation" />
      </ul>
   );
};

const NavItem = ({ to, linkText }: any) => {
   return (
      <li>
         <NavLink className="nav-link" to={to}>
            {linkText}
         </NavLink>
      </li>
   );
};

export default Navbar;
