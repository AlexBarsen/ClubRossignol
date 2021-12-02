import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createWinterData(equipment, priceDay, priceWeek) {
  return { equipment, priceDay, priceWeek };
}

const winterRows = [
  createWinterData("Skiuri / Snowboard Adult", 50, 50),
  createWinterData("Bocanci / Booti Adult", 50, 50),
  createWinterData("Ecipament Ski / Snowboard Adult", 50, 50),
  createWinterData("Skiuri / Snowboard Copil", 50, 50),
  createWinterData("Bocanci / Booti Copil", 50, 50),
  createWinterData("Ecipament Ski / Snowboard Copil", 50, 50),
  createWinterData("Casca", 50, 50),
];

function bikeData(equipment, price2Hours, price4Hours, priceDay) {
  return { equipment, price2Hours, price4Hours, priceDay };
}

const bikeRows = [
  bikeData("E-Bike Adult", 125, 175, 225),
  bikeData("E-Bike Copil", 75, 125, 175),
  bikeData("Mountainbike Adult", 30, 60, 90),
  bikeData("Mountainbike Copil", 20, 40, 75),
];

export function WinterPricesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 450 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Echipament</StyledTableCell>
            <StyledTableCell align="left">1 zi</StyledTableCell>
            <StyledTableCell align="left">7 zile</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {winterRows.map((row) => (
            <StyledTableRow key={row.equipment}>
              <StyledTableCell align="left">{row.equipment}</StyledTableCell>
              <StyledTableCell align="left">{row.priceDay}</StyledTableCell>
              <StyledTableCell align="left">{row.priceWeek}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function BikePricesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 450 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Bike</StyledTableCell>
            <StyledTableCell align="left">2 ore</StyledTableCell>
            <StyledTableCell align="left">4 ore</StyledTableCell>
            <StyledTableCell align="left">1 zi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bikeRows.map((row) => (
            <StyledTableRow key={row.equipment}>
              <StyledTableCell align="left">{row.equipment}</StyledTableCell>
              <StyledTableCell align="left">{row.price2Hours}</StyledTableCell>
              <StyledTableCell align="left">{row.price4Hours}</StyledTableCell>
              <StyledTableCell align="left">{row.priceDay}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
