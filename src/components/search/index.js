import React from "react";
import { SeracheDiv } from "./search";
import { ReactComponent as SearchIcon } from "../../img/svg/search.svg";

const SearchComponent = () => {
  return (
    <>
      <SeracheDiv>
        <input className="text" type="search" name="busca" placeholder="" />

        {/* <button type="submit"> */}
        <div className="seach">
          <SearchIcon />
        </div>
        {/* </button> */}
      </SeracheDiv>
    </>
  );
};
export default SearchComponent;
