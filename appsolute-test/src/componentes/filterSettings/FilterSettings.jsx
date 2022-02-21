import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SettingsIcon from "@mui/icons-material/Settings";
import { grey } from '@mui/material/colors';
import SearchContext from "../../context/SearchContext";


const FilterSettings = () => {
  const [open, setOpen] = useState(false);
  const ctx = useContext(SearchContext);
  const [searchValue, setSearchValue] = ctx;

  const languageHandleChange = (event) => {
    setSearchValue({query: searchValue.query, language: event.target.value, sortBy: searchValue.sortBy, searchIn: searchValue.searchIn});
  };

  const sortByHandleChange = (event) => {
    setSearchValue({query: searchValue.query, language: searchValue.language, sortBy: event.target.value, searchIn: searchValue.searchIn});
  };

  const searchInHandleChange = (event) => {
    setSearchValue({query: searchValue.query, language: searchValue.language, sortBy: searchValue.sortBy, searchIn: event.target.value});
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <SettingsIcon sx={{ color: grey[300] }}/>
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Filters Selection</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="searchIn-select-label">Search In</InputLabel>
              <Select
                defaultValue="title,content,description"
                labelId="searchIn-select-label"
                id="searchIn-select"
                onChange={searchInHandleChange}
                value={searchValue.searchIn}
                input={<OutlinedInput label="Search In" />}
              >
                <MenuItem value={"title,content,description"}>All</MenuItem>
                <MenuItem value={"title"}>Title</MenuItem>
                <MenuItem value={"description"}>Description</MenuItem>
                <MenuItem value={"content"}>content</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="language-select-label">Language</InputLabel>
              <Select
                defaultValue="fr"
                labelId="language-select-label"
                id="language-select"
                onChange={languageHandleChange}
                value={searchValue.language}
                input={<OutlinedInput label="language" />}
              >
                <MenuItem value={"fr"}>French</MenuItem>
                <MenuItem value={"es"}>Spanish</MenuItem>
                <MenuItem value={"de"}>German</MenuItem>
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"it"}>Italian</MenuItem>
                <MenuItem value={"pt"}>Portuguese</MenuItem>
                <MenuItem value={"ru"}>Russian</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="sortBy-select-label">Sort By</InputLabel>
              <Select
                defaultValue="publishedAt"
                labelId="sortBy-select-label"
                id="sortBy-select"
                onChange={sortByHandleChange}
                value={searchValue.sortBy}
                input={<OutlinedInput label="Sort By" />}
              >
                <MenuItem value={"publishedAt"}>News First</MenuItem>
                <MenuItem value={"popularity"}>Popularity</MenuItem>
                <MenuItem value={"relevancy"}>Relevancy</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterSettings;
