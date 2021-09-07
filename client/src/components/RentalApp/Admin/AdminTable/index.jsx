import React, { useMemo, useState } from "react";
import { useTable, useExpanded } from "react-table";
import AdminOrderItem from "../AdminOrderItem/index";
import Select from "react-select";
import { connect } from "react-redux";

import { updateOrderStatusStart } from "../../../../redux/order/order.actions";

import {
  Table,
  Head,
  Heading,
  Row,
  Data,
  Body,
  Wrapper,
  AdminOrderedItems,
  SelectContainer,
} from "./AdminTableElements";

const AdminTable = ({ data, updateOrderStatusStart }) => {
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
            accessor: "orderedAt",
          },
          {
            Header: "Number of Items",
            accessor: "numberOfItems",
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

  const [status, setStatus] = useState(null);

  const handleStatusChange = (selected, props) => {
    setStatus(selected.value);
  };

  const handleStatusUpdate = (orderID, status) => {
    updateOrderStatusStart(orderID, status);
  };

  const options = [
    { value: "recevied", label: "received" },
    { value: "prepared", label: "prepared" },
    { value: "complete", label: "complete" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "2rem",
      textAlin: "center",
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "2rem",
      textAlign: "center",
    }),
  };

  const renderRowSubComponent = ({ row }) => (
    <Wrapper>
      <AdminOrderedItems>
        {row.original.orderedItems.map((item) => (
          <>
            <AdminOrderItem
              key={item.id}
              item={item}
              status={row.original.status}
            />
          </>
        ))}
      </AdminOrderedItems>

      <SelectContainer>
        {row.original.status !== "complete" ? (
          <Select
            defaultValue={{
              value: row.original.status,
              label: row.original.status,
            }}
            onChange={handleStatusChange}
            styles={customStyles}
            options={options}
          />
        ) : null}

        <button
          onClick={() => handleStatusUpdate(row.original.orderID, status)}
        >
          Change Status
        </button>
      </SelectContainer>
    </Wrapper>
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

const mapDispatchToProps = (dispatch) => ({
  updateOrderStatusStart: (orderID, status) =>
    dispatch(updateOrderStatusStart({ orderID, status })),
});

export default connect(null, mapDispatchToProps)(AdminTable);
