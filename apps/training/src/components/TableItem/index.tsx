import React,{Component} from "react"
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
class TableItem extends Component{
  state = {
    checked : false
  }
  onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ?  target.checked : target.value ;
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
        <TableCell align="right">{post.com}</TableCell>
        <TableCell align="right">{post.views}</TableCell>
        <TableCell align="right">{post.status}</TableCell>
        <TableCell align="right">{post.author}</TableCell>
        <TableCell align="right">
          <Button color='primary'>EDIT</Button>
          <Button color='primary'>DELETE</Button>
        </TableCell>
      </TableRow>
    )
  }
}

export default TableItem;
