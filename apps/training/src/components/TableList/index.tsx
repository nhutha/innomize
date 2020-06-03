import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TableItem from "../TableItem";
import {connect} from "react-redux";
import * as Actions from "../../actions";
class TableList extends Component {


  state = {
    checked : false,
    dataPost : []
  }

  componentDidMount(){
    this.props.getDataAPI();
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ?  target.checked : target.value ;
    this.setState({
      [name] : value
    })
  }

  renderBody = ()=>{
    let element = null;
    const {dataPost} = this.props;
    element = dataPost.map((post,index)=>{
      return  <TableItem key = {index} post={post}></TableItem>
    })

    return element;
  }
  render() {
    const {checked} = this.state;
    return (
      <>
        <TableContainer component={Paper}>
          <Table className="" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                  checked = {checked}
                  onChange = {this.onChange}
                  inputProps = {{"aria-label":"secondary checkbox"}}
                  name = "checked"
                  />
                </TableCell>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Published at</TableCell>
                <TableCell align="right">Com.</TableCell>
                <TableCell align="right">Views</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Author</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             {this.renderBody()}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

const mapStateToProps = state=>{
  return{
    dataPost : state.listPost
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getDataAPI: ()=>{
      dispatch(Actions.getDataAPI());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableList);
