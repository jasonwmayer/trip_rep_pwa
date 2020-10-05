import React from "react";
import PropTypes from "prop-types";
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
  },
  table: {
    flexGrow: 1,
    minwidth: 650,
  },
}));

const IvrProjects = ({ projects }) => {
  const classes = useStyles();
  console.log("IVR Projects: ", projects);
  const ivrProjects = [...projects.efp, ...projects.rsa];
  //   console.log("List of Projects:", ivrProjects);

  return (
    <>
      <h6>Projects</h6>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          arial-aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Project Code</TableCell>
              <TableCell>ETA End Date</TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {ivrProjects.map((item) => (
              <TableRow key={item.project_code}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{item.project_code}</TableCell>
                <TableCell>{item.end_date}</TableCell>
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
    </>
  );
};

IvrProjects.propTypes = {
  projects: PropTypes.object.isRequired,
};

export default IvrProjects;
