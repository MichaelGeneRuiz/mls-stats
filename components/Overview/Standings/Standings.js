import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import StandingTable from "./StandingTable";

import classes from "./Standings.module.css";

function Standings(props) {
  const { easternData, westernData, storedDate } = props;

  return (
    <Container>
      <h1 className="center">Standings</h1>
      <Row>
        <div className={classes.table}>
          <StandingTable data={easternData} />
        </div>
        <div className={classes.table}>
          <StandingTable data={westernData} />
        </div>
      </Row>
      <p className="center">
        This page will fetch the most recent data from the API at most once per
        hour.
      </p>
      <p className="center">Last Updated: {storedDate}</p>
    </Container>
  );
}

export default Standings;
