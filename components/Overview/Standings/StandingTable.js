import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import classes from "./StandingTable.module.css";

function StandingTable(props) {
  const { data } = props;
  const arrData = Object.values(data).slice(0, -3);

  return (
    <Container>
      <h2 className={classes.header}>
        {data[0].group === "Eastern Conference"
          ? "Eastern Conference"
          : "Western Conference"}
      </h2>
      <Table className={classes.table} bordered responsive size="sm">
        <thead className={classes.tableHeader}>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {arrData.map((team) => (
            <tr key={team.rank}>
              <td>{team.rank}</td>
              <td>{team.team.name}</td>
              <td>{team.all.played}</td>
              <td>{team.all.win}</td>
              <td>{team.all.draw}</td>
              <td>{team.all.lose}</td>
              <td>{team.goalsDiff}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default StandingTable;
