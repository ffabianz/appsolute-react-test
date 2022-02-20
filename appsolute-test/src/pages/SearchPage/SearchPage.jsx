import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";

const SearchPage = () => {
  const ctx = useContext(SearchContext);
  const [searchValue] = ctx;
  return (
    <>
      <div>banana</div>
      {searchValue}
    </>
  );
};
export default SearchPage;
