import Head from "next/head";
import { Fragment } from "react";

import { getTeamStatsAPI } from "../../helpers/api-util";
import {
  getStoredDate,
  getTeamDetailsDB,
  getVenueDB,
  postDate,
  postTeamDetails,
  getAllTeamsDB,
} from "../../helpers/db-util";
import { getFormattedDate } from "../../helpers/util";

import Details from "../../components/TeamDetails/Details";

function TeamDetailPage(props) {
  const parsedTeamDetails = JSON.parse(props.teamDetails);
  const parsedVenueDetails = JSON.parse(props.venueDetails);

  return (
    <Fragment>
      <Head>
        <title>{parsedTeamDetails.team.name}</title>
        <meta
          name="description"
          content="Some in-depth statistics for your favorite soccer teams playing in Major League Soccer."
        />
      </Head>
      <Details
        teamDetails={parsedTeamDetails}
        venueDetails={parsedVenueDetails}
        storedDate={props.storedDate}
      />
    </Fragment>
  );
}

export async function getServerSideProps(context) {

  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=300'
  )

  const year = parseInt(process.env.YEAR);

  const teamId = context.params.teamId;

  const teams = await getAllTeamsDB();

  const exists = teams.some((team) => team.id === +teamId);

  if (!exists) {
    return {
      notFound: true,
    };
  }

  const nowDate = new Date();
  let storedDateObj = await getStoredDate(teamId);
  let storedDate;
  let noDate = false;

  if (!storedDateObj) {
    await postDate(nowDate, teamId);
    storedDateObj = await getStoredDate(teamId);
    noDate = true;
  }

  // 1 day = 86400000
  storedDate = storedDateObj.date;

  if (nowDate - storedDate > 86400000 || noDate) {
    noDate = false;
    const teamDetailData = await getTeamStatsAPI(253, year, teamId);

    await postTeamDetails(teamDetailData, +teamId);

    await postDate(nowDate, teamId);
    storedDate = getFormattedDate(nowDate);
  } else {
    storedDate = getFormattedDate(storedDateObj.date);
  }

  let teamDetails = await getTeamDetailsDB(+teamId);

  if (!teamDetails) {
    const teamDetailData = await getTeamStatsAPI(253, year, teamId);

    await postTeamDetails(teamDetailData, +teamId);

    await postDate(nowDate, teamId);
    storedDate = getFormattedDate(nowDate);

    teamDetails = await getTeamDetailsDB(+teamId);
  }

  const venueDetails = await getVenueDB(teamDetails.team.name);

  return {
    props: {
      storedDate,
      teamDetails: JSON.stringify(teamDetails),
      venueDetails: JSON.stringify(venueDetails),
    },
  };
}

export default TeamDetailPage;
