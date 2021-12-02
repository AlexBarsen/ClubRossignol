import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import "./RowSubComponent.scss";

import Button from "react-bootstrap/Button";

import { updateOrderStatusStart } from "../../../../../redux/order/order.actions";

import TabItem from "../TabItem/TabItem";

import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

const RowSubComponent = ({ row, updateOrderStatusStart }) => {
  const { t } = useTranslation();

  const { status, orderedItems, orderID } = row.original;

  const [orderStatus, setOrderStatus] = useState(status);

  const handleStatusChange = (selected, props) => {
    setOrderStatus(selected.value);
  };

  const handleStatusUpdate = (orderID, orderStatus) => {
    updateOrderStatusStart(orderID, orderStatus);
  };

  console.log(orderedItems);

  const options = [
    { value: "received", label: t("received") },
    { value: "prepared", label: t("prepared") },
    { value: "complete", label: t("complete") },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
      textAlin: "center",
      width: 150,
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
      textAlign: "center",
    }),
  };
  return (
    <Container className="d-flex">
      <div style={{ width: "85%" }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {orderedItems.map((item) => (
                  <Nav.Item className="tab-item mb-2">
                    <Nav.Link
                      key={item.id}
                      eventKey={item.id}
                      className="tab-link"
                    >
                      {t(item.name)}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {orderedItems.map((item) => (
                  <Tab.Pane eventKey={item.id}>
                    <TabItem
                      key={item.id}
                      item={item}
                      status={row.original.status}
                    />
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      <div
        style={{ width: "15%" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        {status !== "complete" ? (
          <>
            <Select
              className="mb-3"
              defaultValue={{
                value: orderStatus,
                label: t(orderStatus),
              }}
              onChange={handleStatusChange}
              styles={customStyles}
              options={options}
              isSearchable={false}
            />
            <div>
              <Button onClick={() => handleStatusUpdate(orderID, orderStatus)}>
                Change Status
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateOrderStatusStart: (orderID, orderStatus) =>
    dispatch(updateOrderStatusStart({ orderID, orderStatus })),
});

export default connect(null, mapDispatchToProps)(RowSubComponent);
