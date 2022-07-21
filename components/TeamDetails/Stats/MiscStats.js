import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import classes from "./MiscStats.module.css";

function MiscStats(props) {
  const { noScores, cleanSheets, penalties } = props;

  return (
    <Container>
      <h1 className="center">Misc Stats</h1>
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
            <td>Clean Sheets</td>
            <td>{cleanSheets.home}</td>
            <td>{cleanSheets.away}</td>
            <td>{cleanSheets.total}</td>
          </tr>
          <tr>
            <td>Failed to Score</td>
            <td>{noScores.home}</td>
            <td>{noScores.away}</td>
            <td>{noScores.total}</td>
          </tr>
          <tr>
            <td colSpan="3">Penalties Scored</td>
            <td>{penalties.scored.total}</td>
          </tr>
          <tr>
            <td colSpan="3">Penalties Missed</td>
            <td>{penalties.missed.total}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default MiscStats;
