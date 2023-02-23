import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import classes from "./Lineups.module.css";

function Lineups(props) {
  const { lineups } = props;

  return (
    <Container>
      <h1 className="center">Formations Played</h1>
      <Table className={classes.table} bordered responsive size="sm">
        <thead className={classes.tableHeader}>
          <tr>
            <th>Formation</th>
            <th>Games Played</th>
          </tr>
        </thead>
        <tbody>
          {lineups.length !== 0 && lineups.map((lineup) => (
            <tr key={lineup.formation}>
              <td>{lineup.formation}</td>
              <td>{lineup.played}</td>
            </tr>
          ))}
          {lineups.length === 0 && <tr>
              <td>N/A</td>
              <td>0</td>
            </tr>}
        </tbody>
      </Table>
    </Container>
  );
}

export default Lineups;
