export async function getTeamDataAPI(leagueId, season) {
  const response = await fetch(
    `https://v3.football.api-sports.io/teams?league=${leagueId}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-apisports-key": process.env.SOCCER_KEY,
      },
    }
  );

  const result = await response.json();

  return result.response;
}

export async function getTeamStatsAPI(leagueId, season, teamId) {
  const response = await fetch(
    `https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${teamId}&league=${leagueId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.SOCCER_KEY,
      },
    }
  );

  const result = await response.json();

  return result.response;
}

export async function getStandingsAPI(leagueId, season) {
  const response = await fetch(
    `https://v3.football.api-sports.io/standings?league=${leagueId}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-apisports-key": process.env.SOCCER_KEY,
      },
    }
  );

  const result = await response.json();

  return result.response;
}
