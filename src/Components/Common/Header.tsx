import { NavLink } from "react-router-dom";
import Search from "@/assets/svg/search-engine.svg?react";
import { navLinkes } from "@/constant";

const NavLinks = navLinkes.map((link) => (
  <NavLink
    key={link.name}
    to={link.path}
    className={({ isActive }) => `${isActive && "text-blue-600"} duration-300`}
  >
    <li className="text-xl font-semibold cursor-pointer max-lg:text-base">
      {link.name}
    </li>
  </NavLink>
));
const Header = () => {
  return (
    <header className="w-full h-16 border-b-2 flex items-center ">
      <ul className="flex items-center justify-center gap-x-5  lg:mx-40 mx-4">
        <Search className="w-8 h-8" />
        {NavLinks}
      </ul>
    </header>
  );
};

export default Header;
