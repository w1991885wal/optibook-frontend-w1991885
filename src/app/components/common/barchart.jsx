import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Appointments",
        data: [12, 19, 8, 15, 22],
        backgroundColor: "#0066CC",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return <Bar data={data} options={options} />;
}
