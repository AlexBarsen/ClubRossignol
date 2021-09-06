import React, { useMemo } from "react";
import { useTable, useExpanded } from "react-table";
import AdminOrderItem from "../AdminOrderItem";

import { Table, Head, Heading, Row, Data, Body } from "./TableElements";

const AdminTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "expander",
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "-" : "+"}
          </span>
        ),
      },
      {
        Header: "Order",
        columns: [
          {
            Header: "Order ID",
            accessor: "orderID",
          },
          {
            Header: "User ID",
            accessor: "userID",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Order Date",
          },
          {
            Header: "Number of Items",
            // accessor: "orderedItems",
          },
          {
            Header: "Total",
            accessor: "total",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );
  const tableInstance = useTable(
    {
      columns,
      data,
    },
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

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: "15px",
        }}
      >
        <code>
          {row.original.orderedItems.map((item) => (
            <AdminOrderItem key={item.id} item={item} />
          ))}
        </code>
      </pre>
    ),
    []
  );
  return (
    <>
      <Table {...getTableProps()}>
        <Head>
          {headerGroups.map((headerGroup) => (
            <Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Heading {...column.getHeaderProps()}>
                  {column.render("Header")}
                </Heading>
              ))}
            </Row>
          ))}
        </Head>
        <Body {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <React.Fragment>
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
                      {renderRowSubComponent({ row })}
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
