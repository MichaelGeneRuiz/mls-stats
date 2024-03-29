import LetterBlock from "./LetterBlock";

import classes from "./RecentForm.module.css";

function RecentForm(props) {
  const { form } = props;

  const arrayForm = form.split("");

  return (
    <div className={classes.container}>
      <h4 className="center">Last 5 Games</h4>
      <div className={classes.games}>
        {form !== "N/A" && arrayForm.map((letter, index) => (
          <LetterBlock key={index} letter={letter} />
        ))}
        {form === "N/A" && "N/A"}
      </div>
    </div>
  );
}

export default RecentForm;
