import { Link } from "react-router-dom";

export default function Navlinks() {
  const data = [
    {
      id: 1,
      name: "products",
      link: "/Products",
    },
    {
      id: 2,
      name: "about",
      link: "/About",
    },

    {
      id: 3,
      name: "contact",
      link: "/ContactUs",
    },
  ];
  let nav_links = {
    padding: "0 1rem",
    fontWeight: 500,
  };
  return (
    <ul className="flex relative ">
      {data.map((link) => (
        <li
          key={link.id}
          style={nav_links}
          className="hover:border-b-4 hover:border-purple-500 duration-300 group"
        >
          <Link to={link.link} className="leading-[70px]">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
