import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderSearch from "../HeeaderSearch";
import HeaderSelected from "../HeaderSelected";
import {connect} from "react-redux";
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

const mapStateToProps = state=>{
  return {
    numSelected : state.numSelected
  }
}

const mapDispatchToProps = dispatch=>{
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
