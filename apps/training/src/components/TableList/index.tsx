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
class TableList extends Component {


  state = {
    checked : false,
    dataPost : [
      {
        id : 1,
        title : 'post 1',
        published : '3/6/2020',
        com : true,
        views : 200,
        status : false,
        author : 'author 1'
      },
      {
        id : 2,
        title : 'post 2',
        published : '2/6/2020',
        com : true,
        views : 300,
        status : false,
        author : 'author 2'
      },
      {
        id : 3,
        title : 'post 3',
        published : '3/3/2020',
        com : false,
        views : 100,
        status : false,
        author : 'author 3'
      }
    ]
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
    const {dataPost} = this.state;
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

export default TableList;
