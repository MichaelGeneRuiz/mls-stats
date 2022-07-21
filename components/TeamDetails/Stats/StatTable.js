import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import classes from "./StatTable.module.css";

function StatTable(props) {
  const { fixtures, goals } = props;

  return (
    <Container>
      <h1 className="center">Team Stats</h1>
      <Table className={classes.table} bordered responsive size="sm">
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col className={classes.tableAllCol}></col>
        </colgroup>
        <thead className={classes.tableHeader}>
          <tr>
            <th>&nbsp;</th>
            <th>Home</th>
            <th>Away</th>
            <th>All</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Games Played</td>
            <td>{fixtures.played.home}</td>
            <td>{fixtures.played.away}</td>
            <td>{fixtures.played.total}</td>
          </tr>
          <tr>
            <td>Wins</td>
            <td>{fixtures.wins.home}</td>
            <td>{fixtures.wins.away}</td>
            <td>{fixtures.wins.total}</td>
          </tr>
          <tr>
            <td>Draws</td>
            <td>{fixtures.draws.home}</td>
            <td>{fixtures.draws.away}</td>
            <td>{fixtures.draws.total}</td>
          </tr>
          <tr>
            <td>Losses</td>
            <td>{fixtures.loses.home}</td>
            <td>{fixtures.loses.away}</td>
            <td>{fixtures.loses.total}</td>
          </tr>
        </tbody>
        <thead className={classes.tableHeader}>
          <tr>
            <th colSpan="4">Goals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goals For</td>
            <td>{goals.for.total.home}</td>
            <td>{goals.for.total.away}</td>
            <td>{goals.for.total.total}</td>
          </tr>
          <tr>
            <td>Goals Against</td>
            <td>{goals.against.total.home}</td>
            <td>{goals.against.total.away}</td>
            <td>{goals.against.total.total}</td>
          </tr>
        </tbody>
        <thead className={classes.tableHeader}>
          <tr>
            <th colSpan="4">Goals Average</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goals For</td>
            <td>{goals.for.average.home}</td>
            <td>{goals.for.average.away}</td>
            <td>{goals.for.average.total}</td>
          </tr>
          <tr>
            <td>Goals Against</td>
            <td>{goals.against.average.home}</td>
            <td>{goals.against.average.away}</td>
            <td>{goals.against.average.total}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default StatTable;
