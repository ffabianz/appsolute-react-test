import { useState, useContext } from "react";
import SearchContext from "../../context/SearchContext"
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const ctx = useContext(SearchContext);
  const { children } = props;
  const history = useHistory();
  const [enteredValue, setEnteredValue] = useState("");
  const [, setSearchValue] = ctx;
  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "Enter" && enteredValue !== "") {
      console.log("enter pressed");
      setSearchValue(enteredValue);
      history.push("/search");
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              appsolute
            </Typography>
            <Search>
              <StyledInputBase
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <Button />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
}
