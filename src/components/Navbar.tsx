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
         <NavItem to="/pagination" linkText="Pagination" />
         <NavItem to="/infinite" linkText="Infinite" />
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
