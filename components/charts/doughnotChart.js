import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ["Inactive 254", "Active 3000", "Total 3254"],
	datasets: [
		{
			label: "# of Votes",
			data: [2054, 3000, 3254],
			backgroundColor: ["#6956E5", "#FB896B", "#F8C07F"],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"#F8C07F",
			],
			borderWidth: 1,
		},
	],
};

export function DoughnutChart() {
	return <Doughnut data={data} />;
}
