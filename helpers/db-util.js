import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.lbscq.mongodb.net/soccerData?retryWrites=true&w=majority`
  );

  return client;
}

async function updateDocument(client, collection, query, update, options) {
  const db = client.db();

  const result = await db
    .collection(collection)
    .updateOne(query, update, options);
  return result;
}

async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}

export async function getStoredDate(teamId) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let date;

  try {
    date = await getAllDocuments(client, "date", {}, { id: teamId });
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return date[0];
}

export async function getStandingDate() {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let date;

  try {
    date = await getAllDocuments(client, "standings", {}, { isDate: true });
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return date[0];
}

export async function postDate(currDate, teamId) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let result;

  try {
    result = await updateDocument(
      client,
      "date",
      { id: teamId },
      { $set: { date: currDate, id: teamId } },
      { upsert: true }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return result;
}

export async function postStandingDate(currDate) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let result;

  try {
    result = await updateDocument(
      client,
      "standings",
      { isDate: true },
      { $set: { date: currDate, isDate: true } },
      { upsert: true }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return result;
}

export async function postTeam(currTeam) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let result;

  try {
    result = await updateDocument(
      client,
      "teams",
      { id: currTeam.id },
      {
        $set: {
          ...currTeam,
        },
      },
      { upsert: true }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return result;
}

export async function postVenue(currVenue) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let result;

  try {
    result = await updateDocument(
      client,
      "venues",
      { id: currVenue.id },
      {
        $set: {
          ...currVenue,
        },
      },
      { upsert: true }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return result;
}

export async function postTeamDetails(currDetails, teamId) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let result;

  try {
    result = await updateDocument(
      client,
      "team-details",
      { "team.id": teamId },
      {
        $set: {
          ...currDetails,
        },
      },
      { upsert: true }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return result;
}

export async function postStandings(standingData, isEastern) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let result;

  try {
    result = await updateDocument(
      client,
      "standings",
      { isEastern: isEastern },
      {
        $set: {
          isEastern: isEastern,
          isDate: false,
          ...standingData,
        },
      },
      { upsert: true }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return result;
}

export async function getAllTeamsDB() {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let documents;

  try {
    documents = await getAllDocuments(client, "teams", { name: 1 });
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return documents;
}

export async function getVenueDB(teamName) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let documents;

  try {
    documents = await getAllDocuments(
      client,
      "venues",
      {},
      { teamName: teamName }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return documents[0];
}

export async function getTeamDetailsDB(teamId) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let documents;

  try {
    documents = await getAllDocuments(
      client,
      "team-details",
      {},
      { "team.id": teamId }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return documents[0];
}

export async function getStandings() {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    console.log(error.message);
    return;
  }

  let documents;

  try {
    documents = await getAllDocuments(
      client,
      "standings",
      {},
      { isDate: false }
    );
  } catch (error) {
    console.log(error.message);
  }

  client.close();

  return documents;
}
