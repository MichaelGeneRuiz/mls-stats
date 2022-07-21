import Image from "next/image";
import { useRouter } from "next/router";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import classes from "./TeamBlock.module.css";

function TeamBlock(props) {
  const { team } = props;

  const router = useRouter();

  function detailHandler() {
    router.push(`/team/${team.id}`);
  }

  return (
    <Card className={classes.card}>
      <Card.Header className={classes.teamName}>{team.name}</Card.Header>
      <Card.Body>
        <Card.Text className={classes.yearFounded}>
          Founded in {team.founded ? team.founded : 2015}
        </Card.Text>
        <Image
          className={classes.cardImage}
          src={team.logo}
          alt={team.name}
          width={150}
          height={150}
        />
      </Card.Body>
      <Button className={classes.btn} onClick={detailHandler}>
        Details
      </Button>
    </Card>
  );
}

export default TeamBlock;
