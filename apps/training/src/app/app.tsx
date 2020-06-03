import React from 'react';
import './app.css';
import TableList from "../components/TableList";
import Header from "../components/Header";
import Paper from '@material-ui/core/Paper';
export const App = () => {
  return (
    <Paper>
      <Header/>
      <TableList/>
    </Paper>

  );
};

export default App;




