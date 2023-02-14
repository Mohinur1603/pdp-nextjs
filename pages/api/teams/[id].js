import { teamsData } from "data/teamsData";

export default function handler(req, res) {
	const teamName = req.query.id;

	const team = teamsData.find((item) => item.slug === teamName);
	res.status(200).json(team);
}
