import { teamsData } from "data/teamsData";

export default function handler(req, res) {
	res.status(200).json(teamsData);
}
