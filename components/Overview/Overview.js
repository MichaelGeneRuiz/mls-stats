import Container from "react-bootstrap/Container";
import AllTeams from "./AllTeams/AllTeams";

import Standings from "./Standings/Standings";

function Overview(props) {
  const { easternData, westernData, storedDate, teams } = props;

  return (
    <Container>
      <Standings
        easternData={easternData}
        westernData={westernData}
        storedDate={storedDate}
      />
      <hr />
      <AllTeams teams={teams} />
    </Container>
  );
}

export default Overview;
