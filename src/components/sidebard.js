
import React from "react";
import { Link } from "react-router-dom";
import { LogOut, LayoutDashboard, ShoppingCart, Package, List, ShoppingBag } from "lucide-react"; 

const navLinks = [
  { name: "Dashboard", icon: <LayoutDashboard />, path: "/" },
  { name: "Orders", icon: <ShoppingCart />, path: "/orders" },
  { name: "Category", icon: <Package />, path: "/categories" },
  { name: "Cart", icon: <List />, path: "/cart" },
  { name: "Product", icon: <ShoppingBag />, path: "/products" },
];

export default function Sidebar() {
  return (
    <aside className="w-65 bg-white text-black p-4 flex flex-col justify-between h-screen">
      <div>
        <nav>
          <ul className="space-y-4 mt-20 mb-20">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Link
        to="/logout"
        className="flex items-center text-white gap-3 w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition"
      >
        <LogOut size={20} /> Logout
      </Link>
    </aside>
  );
}
