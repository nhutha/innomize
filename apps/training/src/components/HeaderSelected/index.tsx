import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
class HeaderSelected extends Component {
  render() {
    const { numSelected } = this.props;
    return (
      <>
        <Typography color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
        <Tooltip title="Filter list">
          <div>
            <IconButton color="primary" aria-label="Reset view">
              <EyeIcon />
                RESET VIEWS
            </IconButton>
            <IconButton color="primary" aria-label="create">
              <DeleteIcon />
              DELETE
            </IconButton>
          </div>
        </Tooltip>
      </>
    );
  }
}

export default HeaderSelected;
