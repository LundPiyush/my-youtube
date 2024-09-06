import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; //Early return
  const IconsList = [
    {
      name: "Home",
    },
    {
      name: "Shorts",
    },
    {
      name: "Feedback",
    },
    {
      name: "Videos",
    },
    {
      name: "Live",
    },
    {
      name: "Movies",
    },
    {
      name: "Sports",
    },
    {
      name: "Music",
    },
    {
      name: "Gaming",
    },
  ];
  return (
    <div className="w-48 shadow p-5">
      <ul>
        {IconsList?.map((icon) => (
          <li key={icon.name}>
            <Link to={icon.name === "Home" ? "" : `search?q=${icon.name}`}>
              {icon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
