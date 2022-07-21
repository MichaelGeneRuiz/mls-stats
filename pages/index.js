import { Fragment } from "react";
import Head from "next/head";

import { getAllTeamsDB } from "../helpers/db-util";

import Overview from "../components/Overview/Overview";

function HomePage(props) {
  const parsedTeams = JSON.parse(props.teams);

  return (
    <Fragment>
      <Head>
        <title>All MLS Teams</title>
        <meta
          name="description"
          content="A complete overview of all teams playing in the MLS."
        />
      </Head>
      <Overview teams={parsedTeams} />
    </Fragment>
  );
}

export async function getStaticProps() {
  /* 
  Code used to initially grab the data for the homepage. Because the
  data will not change very often, if at all, it is commented out to show
  it was only performed once.*/

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
    

  const data = await getAllTeamsDB();

  return {
    props: {
      teams: JSON.stringify(data),
    },
  };
}

export default HomePage;
