import React from "react";
import { useTranslation } from "react-i18next";

import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import { OrderedItems } from "./OrderElements";

import ProgressBar from "react-bootstrap/ProgressBar";

import OrderItem from "../OrderItem/OrderItem";

const Order = ({ order, orderID }) => {
  const { t } = useTranslation();

  const { orderedItems, total } = order;

  const orderDate =
    order.orderedAt.toDate().toLocaleDateString() +
    " " +
    order.orderedAt.toDate().toLocaleTimeString();

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <div>
          <h6>Order Date: {orderDate}</h6>
          <h6>Number of Items: {orderedItems.length}</h6>
          <h6>Order ID: {orderID}</h6>
          <div>Total: {order.total} RON</div>

          <div className="d-flex justify-content-around mt-3">
            <div>Order placed</div>
            <div>Order prepared</div>
            <div>Order complete</div>
          </div>

          <ProgressBar style={{ width: "45rem" }}>
            <ProgressBar animated striped variant="warning" now={33} key={1} />
            <ProgressBar animated struped variant="info" now={33} key={2} />
            <ProgressBar animated striped variant="success" now={34} key={3} />
          </ProgressBar>
        </div>
      </Accordion.Header>

      <Accordion.Body>
        <OrderedItems>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  {orderedItems.map((item, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={index}>{t(item.name)}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {orderedItems.map((item, index) => (
                    <Tab.Pane eventKey={index} key={-index}>
                      <OrderItem
                        key={item.id}
                        item={item}
                        total={total}
                        index={index}
                      />
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </OrderedItems>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Order;
