import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import classes from "./Discipline.module.css";

function DisciplineGraph(props) {
  const { cards } = props;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = Object.keys(cards.yellow);

  let yellowCards = [];
  for (const key in cards.yellow) {
    if (cards.yellow[key].total === null) {
      yellowCards.push(0);
    } else {
      yellowCards.push(cards.yellow[key].total);
    }
  }

  let redCards = [];
  for (const key in cards.red) {
    if (cards.red[key].total === null) {
      redCards.push(0);
    } else {
      redCards.push(cards.red[key].total);
    }
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Yellow Cards",
        data: yellowCards,
        backgroundColor: "yellow",
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Red Cards",
        data: redCards,
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container>
      <h1 className="center">Discipline</h1>
      <Bar options={options} data={data} />
      <Table className={classes.table} responsive size="sm">
        <thead>
          <tr>
            <th>Total Yellow Cards</th>
            <th>Total Red Cards</th>
          </tr>
          <tr>
            <td>{yellowCards.reduce((a, c) => a + c)}</td>
            <td>{redCards.reduce((a, c) => a + c)}</td>
          </tr>
        </thead>
      </Table>
    </Container>
  );
}

export default DisciplineGraph;
