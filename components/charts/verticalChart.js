import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
		},
	},
};

const labels = ["a"];

export const data = {
	labels,
	datasets: [
		{
			label: "Marketing",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 3000 })),
			backgroundColor: "#FABE7A",
		},
		{
			label: "HR",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 3000 })),
			backgroundColor: " #F6866A",
		},
		{
			label: "Developers",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 3000 })),
			backgroundColor: " #59E6F6",
		},
		{
			label: "Design",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 3000 })),
			backgroundColor: "#7661E2",
		},
	],
};

export function VerticalChart() {
	return (
		<Bar
			data={data}
			options={options}
		/>
	);
}
