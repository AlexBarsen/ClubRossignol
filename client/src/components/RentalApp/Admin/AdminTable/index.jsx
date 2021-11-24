import React, { useMemo } from "react";
import { useTable, useExpanded, useSortBy } from "react-table";
import { useTranslation } from "react-i18next";

import RowSubComponent from "../RowSubComponent/index";

import { Table, Head, Heading, Row, Data, Body } from "./AdminTableElements";

const AdminTable = ({ data }) => {
  const { t } = useTranslation();

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "expander",
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "👆🏻" : "👇🏻"}
          </span>
        ),
      },
      {
        Header: "Order",
        columns: [
          {
            Header: t("order_id"),
            accessor: "orderID",
          },
          {
            Header: t("email"),
            accessor: "userEmail",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: t("order_date"),
            accessor: "orderedAt",
          },
          {
            Header: t("items_ordered"),
            accessor: "numberOfItems",
          },
          {
            Header: t("order_total"),
            accessor: "total",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    [t]
  );

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = tableInstance;

  return (
    <>
      <Table {...getTableProps()} className="border-0">
        <Head>
          {headerGroups.map((headerGroup) => (
            <Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Heading
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </Heading>
              ))}
            </Row>
          ))}
        </Head>
        <Body {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.original.orderID}>
                <Row {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Data {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </Data>
                    );
                  })}
                </Row>

                {row.isExpanded ? (
                  <Row>
                    <Data colSpan={visibleColumns.length}>
                      <RowSubComponent row={row} />
                    </Data>
                  </Row>
                ) : null}
              </React.Fragment>
            );
          })}
        </Body>
      </Table>
    </>
  );
};

export default AdminTable;
