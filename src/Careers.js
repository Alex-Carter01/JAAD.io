import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import logoT from "./logoTransparent.png";
import { careers_data } from "./data/careers_data";

const useStyles = makeStyles({
  table: {
    width: 650,
    backgroundColor: "#DCFBCE",
  },
});

const imgStyle = {
  justifyContent: "flex-end",
  alignSelf: "flex-end",
  width: "150px",
  height: "120px",
  marginTop: "200px",
  marginLeft: "1800px",
  marginBottom: "0px",
  marginRight: "10px",
};

const headerStyle = {
  fontFamily: "Lato",
  fontSize: "25px",
  color: "#293D20",
  padding: "50px 350px 20px 50px",
};

const rightHeaderStyle = {
  fontFamily: "Lato",
  fontSize: "25px",
  color: "#293D20",
  padding: "20px 250px 20px 0px",
};

const leftHeaderStyle = {
  fontFamily: "Lato",
  fontSize: "25px",
  color: "#293D20",
  padding: "20px 250px 20px 260px",
};

const containerStyling = {
  overflowX: "hidden",
};

const wrapStyling = {
  marginTop: "100px",
  marginLeft: "100px",
  marginRight: "100px",
  marginBottom: "100px",
  backgroundColor: "#DCFBCE",
};

const contentStyle = {
  fontFamily: "Lato",
  fontSize: "18px",
  color: "#000000",
  padding: "10px 300px 10px 100px",
  alignItems: "center",
};

const buttonStyle = {
  fontFamily: "Acme",
  fontSize: "18px",
  color: "#FFFFFF",
  backgroundColor: "#293D20",
  padding: "10px 50px 10px 50px",
  alignItems: "center",
};

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div style={wrapStyling}>
      <TableContainer component={Paper} style={containerStyling}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow style={headerStyle}>
              <TableCell style={leftHeaderStyle}> Career </TableCell>
              <TableCell align="right" style={rightHeaderStyle}>
                Average Salary
              </TableCell>
              <TableCell align="right" style={rightHeaderStyle}>
                {" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {careers_data.careers.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" style={contentStyle}>
                  {" "}
                  {row.title}
                </TableCell>
                <TableCell align="right" style={contentStyle}>
                  {" "}
                  {row.averageSalary}
                </TableCell>
                <TableCell align="right" style={contentStyle}>
                  {" "}
                  <Button
                    variant="contained"
                    style={buttonStyle}
                    href={`/careers/${row.name}`}
                  >
                    {" "}
                    Learn more
                  </Button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
