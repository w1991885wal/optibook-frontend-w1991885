import { Line } from "react-chartjs-2";
import { noShowData } from "./mock-data";

export default function NoShowLineChart() {
  const data = {
    labels: noShowData.labels,
    datasets: [
      {
        label: "No-Show Rate (%)",
        data: noShowData.rates,
        borderColor: "#004FFF",
        backgroundColor: "rgba(239,68,68,0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y}% no-show`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          callback: (value) => `${value}%`,
        },
        grid: {
          color: "#E5E7EB", // gray-200
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-64">
      <Line data={data} options={options} />
    </div>
  );
}
