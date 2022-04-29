import react from "react";
import { Link } from "react-router-dom";

const navs = [
    {
        path :"/",
        name : "Home"
    },
    {
        path :"/about",
        name : "About"
    },
    {
        path :"/Services",
        name : "Services"
    },
    {
        path :"/Contact",
        name : "Contact"
    },
];

const NavItem = () => (
 <nav className="bg-purple-600 text-white p-4 shadow">
 <ul className="flex space-x-6 justify-end">
     {navs.map((navitems)=>(
         <li><Link to={navitems.path} activeClassName="border-b-2 border-white">{navitems.name}</Link></li>
     ))}
 </ul>
</nav>
);
export default NavItem;