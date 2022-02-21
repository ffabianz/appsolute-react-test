import Home from "./pages/Home/Home";
import { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import SearchContext from "./context/SearchContext";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchAppBar from "./componentes/searchappbar/SearchAppBar";

const App = () => {
  const [searchValue, setSearchValue] = useState({query: "", language: "fr", sortBy: "publishedAt", searchIn: "title,content,description"});


  return (
    <SearchContext.Provider value={[searchValue, setSearchValue]}>
      <SearchAppBar>
        <Redirect from="/" to="home" />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </SearchAppBar>
    </SearchContext.Provider>
  );
};

export default App;
