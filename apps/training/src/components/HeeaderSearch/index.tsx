import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import CreateIcon from '@material-ui/icons/Create';
import ExportIcon from '@material-ui/icons/CloudDownload';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
class HeaderSearch extends Component {
  render() {
    return (
      <>
        <form noValidate autoComplete="off">
          <TextField
            id="input-with-icon-textfield"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <Tooltip title="Filter list">
          <div>
            <IconButton color="primary" aria-label="filter list">
              <FilterListIcon />
              ADD FILER
            </IconButton>
            <IconButton color="primary" aria-label="create">
              <CreateIcon />
              CREATE
            </IconButton>
            <IconButton color="primary" aria-label="upload">
              <ExportIcon />
              EXPORT
            </IconButton>
          </div>
        </Tooltip>
      </>
    );
  }
}

export default HeaderSearch;
