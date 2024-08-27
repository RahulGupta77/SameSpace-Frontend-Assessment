import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SongSearchBar = ({ searchedText, setSearchedText }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(searchedText);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchedText]);

  return (
    <div className="my-6 relative w-full">
      <input
        type="text"
        placeholder="Search Song, Artist"
        className="pl-4 pr-4 py-2 w-full bg-white bg-opacity-15  rounded-md  focus:outline-none"
        value={searchedText}
        onChange={(e) => {
          setSearchedText(e.target.value.trim());
        }}
      />

      <FaSearch className="absolute cursor-pointer text-xl right-5 top-1/2 transform -translate-y-1/2 text-[#ffffff85]" />
    </div>
  );
};

export default SongSearchBar;
