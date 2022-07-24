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
        If the page was last updated more than a day ago, refresh the page to
        see a more recent version.
      </p>
      <p className="center">Last Updated: {storedDate}</p>
    </Container>
  );
}

export default Details;
