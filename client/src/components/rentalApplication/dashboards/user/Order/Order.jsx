import React from "react";
import "./Order.scss";
import { useTranslation } from "react-i18next";

import { Accordion, Tab, Row, Col, Nav } from "react-bootstrap";

import OrderStatus from "../../ProgressBar/OrderSatus";

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
        <div style={{ width: "50rem" }}>
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <div className="mb-2">Date: {orderDate}</div>
              <div>Order: #{orderID}</div>
            </div>
            <div>
              <div className="mb-2">No. items: {orderedItems.length}</div>
              <div>Total: {order.total} RON</div>
            </div>
            <div>
              <OrderStatus status={order.status} />
            </div>
          </div>
        </div>
      </Accordion.Header>

      <Accordion.Body className="accordion-body">
        <div className="d-flex flex-column">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column tab--nav">
                  {orderedItems.map((item, index) => (
                    <Nav.Item className="tab--item mb-2" key={index}>
                      <Nav.Link className="tab--text" eventKey={index}>
                        {t(item.name)}
                      </Nav.Link>
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
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Order;
