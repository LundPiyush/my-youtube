import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSugestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    //console.log(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); // dispatch(action)
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer mt-3"
          alt="hamburger-menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-14 hover:cursor-pointer "
            alt="youtube-logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-1/2 rounded-l-full border border-gray-400 px-4 py-2"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="rounded-r-full border border-gray-400 px-5 py-2 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white py-2 px-2 shadow-lg rounded-lg border border-gray-100 w-1/3 ml-[18%]">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 text-left">
                  <Link to={`/search?q=` + s} className="block w-[100%]">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 mt-2"
          alt="user-icon"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        />
      </div>
    </div>
  );
};

export default Header;
