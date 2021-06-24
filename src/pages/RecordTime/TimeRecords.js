import React from "react";
import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@material-ui/core";

function TimeRecords() {
  const rows = [];
  return (
    <Paper>
      <div style={{ padding: 8, borderBottom: "1px solid grey" }}>
        <Typography variant="h6">Time Records</Typography>
      </div>
      <div style={{ padding: 8 }}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tasks Assigned</TableCell>
                <TableCell align="right">Total Time Spent</TableCell>
                <TableCell align="right">01-07-2021</TableCell>
                <TableCell align="right">02-07-2021</TableCell>
                <TableCell align="right">03-07-2021</TableCell>
                <TableCell align="right">04-07-2021</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
  );
}

export default TimeRecords;
