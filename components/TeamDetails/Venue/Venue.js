import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./Venue.module.css";

function Venue(props) {
  const { venueDetails } = props;

  return (
    <Container>
      <h1 className={classes.title}>Stadium Info</h1>
      <Row xs={1} md={2} lg={4}>
        <Col>
          <div className={classes.subInfo}>
            <h4>Name</h4>
            <p>{venueDetails.name}</p>
          </div>
        </Col>
        <Col>
          <div className={classes.subInfo}>
            <h4>Address</h4>
            <p>{venueDetails.address}</p>
          </div>
        </Col>
        <Col>
          <div className={classes.subInfo}>
            <h4>City</h4>
            <p>{venueDetails.city}</p>
          </div>
        </Col>
        <Col>
          <div className={classes.subInfo}>
            <h4>Capacity</h4>
            <p>{venueDetails.capacity}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Venue;
