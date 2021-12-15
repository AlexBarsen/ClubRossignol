import React, { useMemo } from "react";
import { useTable, useExpanded, useSortBy, usePagination } from "react-table";
import { useTranslation } from "react-i18next";

import { Button, InputGroup, FormControl, Form, Table } from "react-bootstrap";
import RowSubComponent from "../RowSubComponent/RowSubComponent";
import OrderStatus from "../../ProgressBar/OrderSatus";

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
            accessor: "orderNumber",
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
            Header: t("number_equipments"),
            accessor: "numberOfItems",
          },
          {
            Header: t("Total"),
            accessor: (row) => row.total + " RON",
          },
          {
            Header: "Status",
            accessor: (row) => (
              <div className="d-flex justify-content-center">
                <OrderStatus status={row.status} />
              </div>
            ),
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
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    useExpanded,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    visibleColumns,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
      <Table
        striped
        bordered
        {...getTableProps()}
        className="border-0 text-center"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.original.orderID}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>

                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      <RowSubComponent row={row} />
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>

      <div className="pagination mt-3 d-flex align-items-center">
        <div className="me-3 d-flex">
          <div className="me-3">
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </Button>
          </div>
          <div>
            <Button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </Button>
          </div>
        </div>

        <div className="me-3">
          Page
          <strong>
            {" "}
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>

        <div className="me-3">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Page Number</InputGroup.Text>
            <FormControl
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </InputGroup>
        </div>

        <div>
          <Form.Select
            aria-label="Default select example"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 15, 20, 25].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
    </>
  );
};

export default AdminTable;
