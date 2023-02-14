import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#7661E2",
		},
	},
	status: {
		danger: orange[500],
	},
});
