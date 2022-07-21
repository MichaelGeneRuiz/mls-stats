import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TeamBlock from "./TeamBlock";

function Overview(props) {
  return (
    <Container>
      <h1 className="center">All MLS Teams</h1>
      <Row xs={1} md={2} xl={4}>
        {props.teams.map((team) => (
          <Col key={team.id}>
            <TeamBlock team={team} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Overview;
