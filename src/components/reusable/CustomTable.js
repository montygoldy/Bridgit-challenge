import React from "react";

// Lib
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import uuid from 'react-uuid';

// Services
import i18n from "../../i18n";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#fff',
    color: '#000',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const CustomTable = ({ tableCategories, tableData, handleRowActions, sorting_blacklist, sortBy, sortOrder, requestSort }) => {
  const classes = useStyles();

  return (
    <Paper>
      <TableContainer>
        <Table className={classes.table} aria-label="entry table">
          <TableHead>
            <TableRow>
              {
                tableCategories.map((category) => {
                  let tempCell;

                  // Check the blacklisted items
                  sorting_blacklist.includes(category)
                  ?
                  tempCell = <StyledTableCell key={uuid()}>
                      {category}
                  </StyledTableCell>
                  :
                  tempCell = <StyledTableCell key={uuid()}>
                    <TableSortLabel
                      active={sortBy === category}
                      direction={sortOrder}
                      onClick={() => requestSort(category)}
                    >
                      {category}
                    </TableSortLabel>
                  </StyledTableCell>;

                  return tempCell;
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tableData.length
              ?
              <>
                {
                  tableData.map((item) => (
                    <TableRow key={item.id}>
                      <StyledTableCell>
                        {item.item}
                      </StyledTableCell>
                      <StyledTableCell>{item.category}</StyledTableCell>
                      <StyledTableCell>{item.price}</StyledTableCell>
                      <StyledTableCell> 
                        <IconButton 
                          color="primary" 
                          component="span"
                          onClick={() => handleRowActions(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </StyledTableCell>
                    </TableRow>
                  ))
                }
              </>
              :
              <TableRow><StyledTableCell>{i18n.t("entry_table__no_records_text")}</StyledTableCell></TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default CustomTable;
