import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Timetable = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Class Timetable</h2>
      <Table striped bordered responsive="md" className="timetable">
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6:00 AM</td>
            <td>Spin Class</td>
            <td>Yoga</td>
            <td>HIIT</td>
            <td>Powerlifting</td>
            <td>Boxing</td>
            <td>CrossFit</td>
          </tr>
          <tr>
            <td>8:00 AM</td>
            <td>Yoga</td>
            <td>CrossFit</td>
            <td>Powerlifting</td>
            <td>Spin Class</td>
            <td>HIIT</td>
            <td>Yoga</td>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td>Powerlifting</td>
            <td>Boxing</td>
            <td>Yoga</td>
            <td>CrossFit</td>
            <td>Spin Class</td>
            <td>HIIT</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>Boxing</td>
            <td>HIIT</td>
            <td>Spin Class</td>
            <td>Yoga</td>
            <td>CrossFit</td>
            <td>Powerlifting</td>
          </tr>
          <tr>
            <td>4:00 PM</td>
            <td>CrossFit</td>
            <td>Spin Class</td>
            <td>Boxing</td>
            <td>HIIT</td>
            <td>Yoga</td>
            <td>Boxing</td>
          </tr>
          <tr>
            <td>6:00 PM</td>
            <td>HIIT</td>
            <td>Powerlifting</td>
            <td>CrossFit</td>
            <td>Boxing</td>
            <td>Spin Class</td>
            <td>Yoga</td>
          </tr>
        </tbody>
      </Table>
      <Row className="mt-5">
        <Col md={6}>
          <h5>Spin Class</h5>
          <p>
            A high-energy indoor cycling workout that combines music and
            motivation. Ideal for improving cardiovascular fitness and burning
            calories.
          </p>
          <hr />
          <h5>Yoga</h5>
          <p>
            A mind-body practice that combines physical postures, breathing
            exercises, and meditation to promote flexibility, strength, and
            relaxation.
          </p>
          <hr />
          <h5>HIIT</h5>
          <p>
            High-Intensity Interval Training that alternates short bursts of
            intense exercise with rest or low-intensity periods. Great for fat
            loss and muscle gain.
          </p>
          <hr />
        </Col>
        <Col md={6}>
          <h5>Powerlifting</h5>
          <p>
            A strength sport that focuses on three main lifts: the squat, bench
            press, and deadlift. Ideal for building muscle mass and increasing
            overall strength.
          </p>
          <hr />
          <h5>Boxing</h5>
          <p>
            A high-energy workout combining boxing techniques with cardio.
            Excellent for building endurance, strength, and agility.
          </p>
          <hr />
          <h5>CrossFit</h5>
          <p>
            A high-intensity fitness program incorporating elements from various
            sports and types of exercise. Perfect for those looking for varied
            and challenging workouts.
          </p>
          <hr />
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Link to="/free-trial" className="btn btn-dark btn-lg mb-5 px-5">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Timetable;
