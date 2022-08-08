import Container from "react-bootstrap/Container";

import Header from "./Header/Header";
import Stats from "./Stats/Stats";
import Venue from "./Venue/Venue";

function Details(props) {
  const { teamDetails, venueDetails, storedDate } = props;

  return (
    <Container>
      <Header
        teamName={teamDetails.team.name}
        logo={teamDetails.team.logo}
        form={teamDetails.form}
      />
      <hr />
      <Stats
        fixtures={teamDetails.fixtures}
        goals={teamDetails.goals}
        cards={teamDetails.cards}
        failed_to_score={teamDetails.failed_to_score}
        clean_sheet={teamDetails.clean_sheet}
        penalty={teamDetails.penalty}
        lineups={teamDetails.lineups}
      />
      <hr />
      <Venue venueDetails={venueDetails} />
      <hr />
      <p className="center">
        If the data presented is not accurate, please allow the page 24 hours to
        fetch the most recent data from the API.
      </p>
      <p className="center">Last Updated: {storedDate}</p>
    </Container>
  );
}

export default Details;
