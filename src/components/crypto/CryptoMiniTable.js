import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 5,
    align: 'right'
  },
  {
    id: 'current_price',
    label: 'Price',
    minWidth: 5,
    align: 'right'
  },
  {
    id: 'price_change_percentage_24h',
    label: '%Chg',
    minWidth: 5,
    align: 'right'
  }

];
const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 53,

  },
  container: {
    maxHeight: 350,
  },
  header: {
    fontWeight: 900,
    color: 'white',
    textAlign:'center',
    padding: 5,
    backgroundColor: 'black',
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  dataCell:{
    fontSize: 10,
    width: 30,
    height: 10,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'black',
  },
});

export default function DynamicTable(props) {

  const rows = [];
  console.log("Props in DynamicTable:", props);
  for (let i = 0; i < props.coins.length; i += 1) {
    rows.push(props.coins[i]);
  }

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  className={classes.header} >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    const cellName = row['className'];
                    console.log(cellName);
                    return (
                      <TableCell style={{ color: cellName }} className={classes.dataCell} key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>

                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </Paper>
  );
}
