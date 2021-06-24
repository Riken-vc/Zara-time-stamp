import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    maxWidth: 800,
  },
  head: { fontWeight: 600 },
  value: { backgroundColor: "#6f86d6" },
});

function EmployeeDetails() {
  const classes = useStyles();
  const employeeDetails = {
    employeeName: "John Smith",
    id: "#188442",
    workType: "Quality Assurance",
    employmentType: "Permanent",
  };
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="timeRecords">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" className={classes.head}>
              Employee Name
            </TableCell>
            <TableCell align="right" className={classes.value}>
              {employeeDetails.employeeName}
            </TableCell>
            <TableCell component="th" scope="row" className={classes.head}>
              ID
            </TableCell>
            <TableCell align="right" className={classes.value}>
              {employeeDetails.id}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={classes.head}>
              Work Type
            </TableCell>
            <TableCell align="right" className={classes.value}>
              {employeeDetails.workType}
            </TableCell>
            <TableCell component="th" scope="row" className={classes.head}>
              Employment Type
            </TableCell>
            <TableCell align="right" className={classes.value}>
              {employeeDetails.employmentType}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeDetails;
