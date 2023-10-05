import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; //Early return

  return (
    <div className="w-48 shadow p-5">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subcriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
