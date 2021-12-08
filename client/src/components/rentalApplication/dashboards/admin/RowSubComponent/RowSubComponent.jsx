import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import "./RowSubComponent.scss";

import { updateOrderStatusStart } from "../../../../../redux/order/order.actions";

import Button from "@mui/material/Button";
import TabItem from "../TabItem/TabItem";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
                  <Nav.Item className="admin-tab-item mb-2" key={item.id}>
                    <Nav.Link eventKey={item.id} className="tab-link">
                      {t(item.name)}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {orderedItems.map((item) => (
                  <Tab.Pane eventKey={item.id} key={item.id}>
                    <TabItem item={item} status={row.original.status} />
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
              <Button
                startIcon={<CloudUploadIcon />}
                variant="contained"
                onClick={() => handleStatusUpdate(orderID, orderStatus)}
                className="custom-button--blue"
              >
                Update Status
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
