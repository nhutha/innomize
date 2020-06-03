import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderSearch from "../HeeaderSearch";
import HeaderSelected from "../HeaderSelected";
class Header extends Component {
  render() {
    const {numSelected}= this.props;
    return(
      <Toolbar style={{display : "flex",justifyContent:"space-between"}}>
        {numSelected > 0 ?  (<HeaderSelected numSelected={numSelected} />) : (<HeaderSearch/>)}
      </Toolbar>
    )
  }
}

export default Header;
