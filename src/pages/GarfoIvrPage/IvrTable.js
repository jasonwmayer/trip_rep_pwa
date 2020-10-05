import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Checkbox,
} from "@material-ui/core";
import { CloseRounded, CheckRounded, CreateRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > span": {
      margin: theme.spacing(2),
    },
  },
  table: {
    flexGrow: 1,
    minwidth: "650",
    ariaLabel: "simple table",
  },
}));

const IvrTable = ({ confirmNbrKey, statusKey, trips }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Trip Id</TableCell>
            <TableCell>Confirmation Number</TableCell>
            <TableCell>Caller Permit Number</TableCell>
            <TableCell>Trip Status</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((item) => (
            <TableRow key={item.tripid}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row">
                {item.tripid}
              </TableCell>
              <TableCell>{item[confirmNbrKey]}</TableCell>
              <TableCell>{item.caller_permitnbr}</TableCell>
              <TableCell>{item[statusKey]}</TableCell>
              <TableCell>
                <CheckRounded />
              </TableCell>
              <TableCell>
                <CreateRounded />
              </TableCell>
              <TableCell>
                <CloseRounded />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IvrTable;
