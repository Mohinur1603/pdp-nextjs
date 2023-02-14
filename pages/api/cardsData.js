import { cardsData } from "data/cardsData";

export default function handler(req, res) {
	res.status(200).json(cardsData);
}
