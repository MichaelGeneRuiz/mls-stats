import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import StatTable from "./StatTable";
import DisciplineGraph from "./Discipline";
import Lineups from "./Lineups";
import MiscStats from "./MiscStats";

import classes from "./Stats.module.css";

function Stats(props) {
  const {
    fixtures,
    goals,
    cards,
    failed_to_score,
    clean_sheet,
    penalty,
    lineups,
  } = props;

  return (
    <Container>
      <Row>
        <div className={classes.table}>
          <StatTable fixtures={fixtures} goals={goals} />
        </div>
        <div className={classes.chart}>
          <DisciplineGraph cards={cards} />
        </div>
      </Row>
      <br />
      <Row>
        <div className={classes.miscStats}>
          <MiscStats
            noScores={failed_to_score}
            cleanSheets={clean_sheet}
            penalties={penalty}
          />
        </div>
        <div className={classes.lineups}>
          <Lineups lineups={lineups} />
        </div>
      </Row>
    </Container>
  );
}

export default Stats;
