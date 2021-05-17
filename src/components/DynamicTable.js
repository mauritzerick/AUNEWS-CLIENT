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
    label: 'name',
    minWidth: 15,
    align: 'right'
  },
  {
    id: 'current_price',
    label: 'current_price',
    minWidth: 15,
    align: 'right'
  },
  {
    id: 'market_cap_rank',
    label: 'market_cap_rank',
    minWidth: 15,
    align: 'right'
  },
  {
    id: 'price_change_percentage_24h',
    label: 'price_change_percentage_24h',
    minWidth: 15,
    align: 'right'
  },
  {
    id: 'last_updated',
    label: 'last_updated',
    minWidth: 15,
    align: 'right'
  }

];
const useStyles = makeStyles({
  root: {
    width: 500,
  },
  container: {
    maxHeight: 440,
  },
  header: {
    fontWeight: 500,
  },
});
export default function DynamicTable(props) {

  const rows = [];

  for (let i = 0; i < props.coins.length; i += 1) {
    rows.push(props.coins[i]);
  }



  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
          <TableHead className={classes.header}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
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
                    return (
                      <TableCell key={column.id} align={column.align}>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
