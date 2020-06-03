import React,{Component} from "react"
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import {connect} from "react-redux";
import * as Actions from "../../actions"
class TableItem extends Component{
  state = {
    checked : false
  }
  onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ?  target.checked : target.value ;
    if(target.type === 'checkbox'){
      if(value){
        this.props.onSelected(1)
      }else{
        this.props.onSelected(-1)
      }
    }

    this.setState({
      [name] : value
    })
  }
  render(){
    const {post} = this.props;
    const {checked} = this.state;
    return(
      <TableRow>
        <TableCell component="th" scope="row">
        <Checkbox
          checked = {checked}
          onChange = {this.onChange}
          inputProps = {{"aria-label":"secondary checkbox"}}
          name = "checked"
        />
        </TableCell>
        <TableCell align="right">{post.id}</TableCell>
        <TableCell align="right">{post.title}</TableCell>
        <TableCell align="right">{post.published}</TableCell>
        <TableCell align="right">{post.com ? <CheckIcon/> : ""}</TableCell>
        <TableCell align="right">{post.views}</TableCell>
        <TableCell align="right">{post.status ? "Published" : "Draft"}</TableCell>
        <TableCell align="right">{post.author}</TableCell>
        <TableCell align="right">
          <Button color='primary'>
            <EditIcon/>
            EDIT
            </Button>
          <Button color='primary'>
            <DeleteIcon/>
            DELETE
            </Button>
        </TableCell>
      </TableRow>
    )
  }
}

const mapStateToProps = state=>{
  return {

  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onSelected : (payload)=>{
      dispatch(Actions.selected(payload));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TableItem);
