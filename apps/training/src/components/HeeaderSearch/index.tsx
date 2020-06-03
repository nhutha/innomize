import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import CreateIcon from '@material-ui/icons/Create';
import ExportIcon from '@material-ui/icons/CloudDownload';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import STATUS from "../../constants/Status";
import {connect} from "react-redux";
import * as Actions from "../../actions";
class HeaderSearch extends Component {
  state = {
    myPost : false,
    completed : false,
    status : 0
  }
  onChange = (e)=>{
    const target =e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    if(target.name === 'myPost'){
      this.props.changeMyPost();
    }
    if(target.name === 'completed'){
      this.props.changeCompleted();
    }
    if(target.name === 'status'){
      this.props.changeStatus();
    }

    this.setState({[name]:value})
  }
  renderItemSelect = ()=>{
    let element = null;

    element = STATUS.map((status,index)=>{
      return  <MenuItem value={status.id}>{status.name}</MenuItem>
    })

    return element;
  }
  render() {
    const {myPost,completed , status}= this.props;
    console.log("status",status)
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
              <Typography color="inherit" variant="subtitle1" component="span" style={{marginRight:15,marginLeft:15}}>
                My Post:
              </Typography>
            <Switch
              checked={myPost}
              onChange={this.onChange}
              color="primary"
              name="myPost"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
              <Typography color="inherit" variant="subtitle1" component="span" style={{marginRight:15,marginLeft:15}}>
                Completed:
              </Typography>
            <Switch
              checked={completed}
              onChange={this.onChange}
              color="primary"
              name="completed"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
              <Typography color="inherit" variant="subtitle1" component="span" style={{marginRight:15,marginLeft:15}}>
                Status:
              </Typography>
            <Select style={{width:100}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              name ="status"
              onChange={this.onChange}
            >
              {this.renderItemSelect()}

            </Select>
          </div>
        </Tooltip>
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

const mapStateToProps = state=>{
  return{
    myPost : state.filter.myPost,
    completed : state.filter.completed,
    status : state.filter.status
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    changeMyPost : ()=>{
      dispatch(Actions.changeMyPost())
    },
    changeStatus : ()=>{
      dispatch(Actions.changStatus())
    },
    changeCompleted : ()=>{
      dispatch(Actions.changeComplete())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderSearch);
