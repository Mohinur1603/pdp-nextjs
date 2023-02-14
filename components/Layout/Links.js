import Link from "next/link";
import { styled } from "@mui/system";

export const CustomLink = styled(Link)(({ theme }) => ({
	width: "100%",
	display: "flex",
	alignItems: "center",
	gap: "12px",
	color: "#878787",
	textDecoration: "none",
	cursor: "pointer",
	padding: "12px",
	fontFamily: "'Manrope', sans-serif",
	fontWeight: "500",
	"&:hover": {
		color: "#6956E5",
		background: "#6956E52c",
	},
	"&.active": {
		color: "#6956E5",
		background: "#6956E53c",
	},
}));
