import React, { useEffect, useState } from "react";
import { SEARCH_RESULTS_API, GOOGLE_API_KEY } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const SearchResults = () => {
  const [queryParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  async function getSearchData() {
    try {
      const data = await fetch(
        SEARCH_RESULTS_API + queryParams.get("q") + "&key=" + GOOGLE_API_KEY
      );
      const json = await data.json();
      setSearchResults(json.items);
      //console.log("json", json);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSearchData();
    //eslint-disable-next-line
  }, [queryParams]);
  return (
    <div>
      {searchResults?.map((item) => {
        const {
          id: { videoId },
          snippet: { channelTitle },
        } = item;
        return (
          <li>
            <Link to={"/watch?v=" + videoId} key={videoId}>
              {channelTitle}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default SearchResults;
