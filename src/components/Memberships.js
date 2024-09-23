import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Memberships.css";

const Memberships = () => {
  return (
    <div className="">
      <div className="container">
        <h1 className="text-center m-5">MEMBERSHIP PLANS</h1>
        <div className="row d-flex align-items-stretch">
          {/* Basic Plan */}
          <div className="col-md-4 mb-4 d-flex">
            <Card className="text-center h-100 w-100 card">
              <Card.Body>
                <Card.Title className="fs-3">Basic Plan</Card.Title>
                <Card.Text className="fs-1 fw-bold">$19.99/month</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="list-group-item">
                    Access to gym equipment
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    Open gym hours
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    1 guest pass/month
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>

          {/* Standard Plan */}
          <div className="col-md-4 mb-4 d-flex">
            <Card className="text-center h-100 w-100 card">
              <Card.Body>
                <Card.Title className="fs-3">Standard Plan</Card.Title>
                <Card.Text className="fs-1 fw-bold">$39.99/month</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="list-group-item">
                    All Basic Plan benefits
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    Unlimited group fitness classes
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    2 guest passes/month
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    1 free personal training session
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>

          {/* Premium Plan */}
          <div className="col-md-4 mb-4 d-flex">
            <Card className="text-center h-100 w-100 card">
              <Card.Body>
                <Card.Title className="fs-3">Premium Plan</Card.Title>
                <Card.Text className="fs-1 fw-bold">$59.99/month</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="list-group-item">
                    All Standard Plan benefits
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    Unlimited personal training sessions
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    Free nutritional advice
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    Access to sauna and spa facilities
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberships;
