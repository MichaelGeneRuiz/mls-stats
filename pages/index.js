import { Fragment } from "react";
import Head from "next/head";

import {
  getAllTeamsDB,
  getStandingDate,
  getStandings,
  postStandingDate,
  postStandings,
} from "../helpers/db-util";
import { getFormattedDate } from "../helpers/util";
import { getStandingsAPI } from "../helpers/api-util";

import Overview from "../components/Overview/Overview";

function HomePage(props) {
  const parsedTeams = JSON.parse(props.teams);
  const parsedEasternData = JSON.parse(props.easternData);
  const parsedWesternData = JSON.parse(props.westernData);

  return (
    <Fragment>
      <Head>
        <title>All MLS Teams</title>
        <meta
          name="description"
          content="A complete overview of all teams playing in the MLS as well as the current MLS standings."
        />
      </Head>
      <Overview
        teams={parsedTeams}
        easternData={parsedEasternData}
        westernData={parsedWesternData}
        storedDate={props.storedDate}
      />
    </Fragment>
  );
}

export async function getServerSideProps() {
  /* Team overview data does not change very often, so it is commented out.*/

  // const teams = await getTeamDataAPI(253, 2022);

  // for (const set in teams) {
  //   const teamName = teams[set]["team"].name;
  //   for (const datapoint in teams[set]) {
  //     if (datapoint === "team") {
  //       const grabbedInfo = teams[set][datapoint];

  //       await postTeam(grabbedInfo);
  //     } else {
  //       const grabbedInfo = teams[set][datapoint];

  //       const customInfo = { ...grabbedInfo, teamName };

  //       await postVenue(customInfo);
  //     }
  //   }
  // }

  const overviewData = await getAllTeamsDB();

  /* ------------------------------------------------------------------------ */

  const nowDate = new Date();
  const storedDateObj = await getStandingDate();
  let storedDate;

  if (!storedDateObj) {
    await postStandingDate(nowDate);
    storedDate = getFormattedDate(nowDate);
  } else {
    storedDate = storedDateObj.date;

    // 3600000ms = 1 hour
    if (nowDate - storedDate > 3600000) {
      const standingData = await getStandingsAPI(253, 2022);

      const easternPostData = standingData[0].league.standings[0];
      const westernPostData = standingData[0].league.standings[1];

      await postStandings(easternPostData, true);
      await postStandings(westernPostData, false);

      await postStandingDate(nowDate);
      storedDate = getFormattedDate(nowDate);
    } else {
      storedDate = getFormattedDate(storedDateObj.date);
    }
  }

  let [easternData, westernData] = await getStandings();

  if (!easternData || !westernData) {
    const standingData = await getStandingsAPI(253, 2022);

    const easternPostData = standingData[0].league.standings[0];
    const westernPostData = standingData[0].league.standings[1];

    await postStandings(easternPostData, true);
    await postStandings(westernPostData, false);

    await postStandingDate(nowDate);
    storedDate = getFormattedDate(nowDate);

    [easternData, westernData] = await getStandings();
  }

  return {
    props: {
      teams: JSON.stringify(overviewData),
      easternData: JSON.stringify(easternData),
      westernData: JSON.stringify(westernData),
      storedDate,
    },
  };
}

export default HomePage;
