import Feed from "../feed/Feed";
import FeedSearch from "../feedSearch/FeedSearch";
import SearchButton from "../searchButton/SearchButton";

export default function LeftBar() {
  return (
    <>
      <SearchButton />
      <FeedSearch />
    </>
  );
}
