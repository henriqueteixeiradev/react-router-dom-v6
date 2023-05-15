import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "POSTS",
    path: "/posts",
  },
];

export function NavBar() {
  return (
    <nav className="py-6 w-full flex bg-gray-500">
      <ul className="flex gap-4 mx-auto">
        {menuItems.map((item) => (
          <li
            className="text-xl font-bold text-white hover:text-cyan-200"
            key={item.name}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
