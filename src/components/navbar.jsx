import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Drawer from './drawer';
import logo from '../assets/logo.png';
import { RiAccountCircleLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="mt-6 sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center rtl:space-x-reverse">
          <img src={logo} className="h-18 w-32" alt="Logo" />
        </Link>

        <div className="flex md:order-2 space-x-10 rtl:space-x-reverse">
          <Drawer />
          <RiAccountCircleLine
            size={34}
            color="gray"
            className="my-icon hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
            alt="cart"
          />
            <RiMenu2Line
            size={34}
            color="gray"
            className="my-icon hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out md:hidden"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:mt-0 mt-4 md:order-1 ${
            menuOpen ? 'block bg-gray-100 ' : 'hidden'
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 md:border-0  text-lg font-semibold md:bg-white">
            <NavItem to="/" text="Home" isActive={isActive} />
            <NavItem to="/shop" text="Shop" isActive={isActive} />
            <NavItem to="/blog" text="Blog" isActive={isActive} />
            <NavItem to="/about" text="About" isActive={isActive} />
            <NavItem to="/contact" text="Contact" isActive={isActive} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text, isActive }) => {
  return (
    <li>
      <Link
        to={to}
        className={`block py-2 px-3 md:p-0 hover:text-gold-100 rounded transition duration-300 ease-in-out ${
          isActive(to) ? 'text-gold-100' : 'text-gray-500'
        }`}
        aria-current={isActive(to) ? 'page' : undefined}
      >
        {text}
      </Link>
    </li>
  );
};

export default Navbar;
