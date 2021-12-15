import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,

    "@media screen and (max-width: 768px)": {
      fontSize: 12,
    },
  },
  "@media screen and (max-width: 768px)": {
    fontSize: 12,
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

function bikeData(equipment, price2Hours, price4Hours, priceDay) {
  return { equipment, price2Hours, price4Hours, priceDay };
}

export function WinterPricesTable() {
  const { t } = useTranslation();

  const winterRows = [
    createWinterData(t("ski_snow_adult"), 45, 50),
    createWinterData(t("ski_snow_boots_adult"), 25, 50),
    createWinterData(t("ski_snow_equipment"), 60, 50),
    createWinterData(t("ski_snow_child"), 40, 50),
    createWinterData(t("ski_now_child"), 20, 50),
    createWinterData(t("ski_snow_boots_child"), 50, 50),
    createWinterData(t("helmet"), 20, 50),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 450 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">
              {t("winter_equipment")}
            </StyledTableCell>
            <StyledTableCell align="left">{t("1_day")}</StyledTableCell>
            <StyledTableCell align="left">{t("7_days")}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {winterRows.map((row) => (
            <StyledTableRow key={row.equipment}>
              <StyledTableCell className="table-cell" align="left">
                {row.equipment}
              </StyledTableCell>
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
  const { t } = useTranslation();
  const bikeRows = [
    bikeData(t("ebike_adult"), 125, 175, 225),
    bikeData(t("ebike_child"), 75, 125, 175),
    bikeData(t("bike_adult"), 30, 60, 90),
    bikeData(t("bike_child"), 20, 40, 75),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 450 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">{t("bikes")}</StyledTableCell>
            <StyledTableCell align="left">{t("2h")}</StyledTableCell>
            <StyledTableCell align="left">{t("4h")}</StyledTableCell>
            <StyledTableCell align="left">{t("per_day")}</StyledTableCell>
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
