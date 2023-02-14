import axios from "axios";
const baseUrl = "http://localhost:3000/api";

//Card larni ma'lumotlari uchun
const getCards = async () => {
	try {
		const res = await axios.get(`${baseUrl}/cardsData`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
//teamlarni malumotlarini olish uchun
const getTeams = async () => {
	try {
		const res = await axios.get(`${baseUrl}/teamsData`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

const getTeam = async (id) => {
	try {
		const res = await axios.get(`${baseUrl}/teams/${id}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export { getCards, getTeams, getTeam };
