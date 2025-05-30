import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
  setIsOpen(!isOpen);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searching..." + search);
    setIsOpen(false);
  }
 
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute  top-15 md:top-18 left-0 w-full bg-white h-15 z-50" : "w-auto"}`}>
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
          <input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Search..." value={search} className="bg-gray-100 pl-2 px-4 py-2 pr-12 rounded-lg w-full focus:outline-none placeholder:text-gray-700" />
          <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
            <IoSearch className="h-6 w-6"/>
          </button>
          </div>
          {/* close button */}
          <button>
           <HiMiniXMark className="h-6 w-6 hover:text-black text-gray-700" onClick={handleSearchToggle} />
          </button>
        </form>
      ) : (
        <button type="submit"  onClick={handleSearchToggle}>
          <IoSearch className="h-6 w-6 hover:text-black text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
