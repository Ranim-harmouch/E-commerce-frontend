// import React from "react";
// import "../css/navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <aside className="sidebar">
//       <ul>
//         <li><Link to="/smartphones">Smartphones</Link></li>
//         <li><Link to="/laptops">Laptops</Link></li>
//         <li><Link to="/tvs">TVs</Link></li>
//         <li><Link to="/smartwatches">Smartwatches</Link></li>
//         <li><Link to="/headphones">Headphones</Link></li>
//         <li><Link to="/others">Others</Link></li>
//       </ul>
//     </aside>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-52 bg-white p-5 border-r border-gray-300">
      <ul className="list-none p-0">
        <li className="mb-4">
          <Link to="/smartphones" className="text-black text-lg hover:text-blue-500">
            Smartphones
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/laptops" className="text-black text-lg hover:text-blue-500">
            Laptops
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/tvs" className="text-black text-lg hover:text-blue-500">
            TVs
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/smartwatches" className="text-black text-lg hover:text-blue-500">
            Smartwatches
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/headphones" className="text-black text-lg hover:text-blue-500">
            Headphones
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/others" className="text-black text-lg hover:text-blue-500">
            Others
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
