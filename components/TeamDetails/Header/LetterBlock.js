import classes from "./LetterBlock.module.css";

function LetterBlock(props) {
  const { letter } = props;

  const styles = `${classes.letter} ${
    letter === "L"
      ? classes.red
      : letter === "W"
      ? classes.green
      : classes.yellow
  }`;

  return <div className={styles}>{letter}</div>;
}

export default LetterBlock;
