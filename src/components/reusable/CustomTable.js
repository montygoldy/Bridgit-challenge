import React from "react";

// Lib
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
import EditIcon from '@material-ui/icons/Edit';
import uuid from 'react-uuid';

// Services
import i18n from "../../i18n";

const CustomTable = ({ tableCategories, tableData, handleRowActions, sorting_blacklist, sortBy, sortOrder, requestSort, rowActions }) => {

  return (
    <Paper>
      <TableContainer>
        <Table className="custom-table" aria-label="entry table">
          <TableHead>
            <TableRow>
              {
                tableCategories.map((category) => {
                  let tempCell;

                  // Check the blacklisted items
                  sorting_blacklist.includes(category.label)
                  ?
                  tempCell = <TableCell key={uuid()}>
                      {i18n.t(category.value)}
                  </TableCell>
                  :
                  tempCell = <TableCell key={uuid()}>
                    <TableSortLabel
                      active={sortBy === category.label}
                      direction={sortOrder}
                      onClick={() => requestSort(category.label)}
                    >
                      {i18n.t(category.value)}
                    </TableSortLabel>
                  </TableCell>;

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
                      <TableCell>
                        {item.item}
                      </TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell> 
                        {
                          rowActions.map((actionItem, i) => (
                            <IconButton 
                              key={i}
                              className="row-action-button"
                              component="span"
                              onClick={() => handleRowActions(actionItem, item.id)}
                            >
                              {
                                actionItem === "DELETE"
                                &&
                                <DeleteIcon />
                              }
                              {
                                actionItem === "UPDATE"
                                &&
                                <EditIcon />
                              }
                            </IconButton>
                          ))
                        }
                      </TableCell>
                    </TableRow>
                  ))
                }
              </>
              :
              <TableRow><TableCell>{i18n.t("entry_table__no_records_text")}</TableCell></TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default CustomTable;
