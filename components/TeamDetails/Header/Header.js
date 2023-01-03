import Image from "next/image";

import Container from "react-bootstrap/Container";

import RecentForm from "./RecentForm";

import classes from "./Header.module.css";

function Header(props) {
  const { teamName, logo, form } = props;

  let lastFiveGames;

  if(!form)
    lastFiveGames = "";
  else 
    lastFiveGames = form.slice(-5);

  return (
    <Container>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Image src={logo} alt={teamName} layout="fill" />
        </div>
        <h1 className={classes.teamName}>{teamName}</h1>
        <div className={classes.whiteSpace}></div>
        <RecentForm form={lastFiveGames} />
      </div>
    </Container>
  );
}

export default Header;
