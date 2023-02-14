import GridViewIcon from "@mui/icons-material/GridView";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const lists = {
	top: [
		{
			icon: <GridViewIcon />,
			title: "Dashboard",
			path: "/",
		},
		{
			icon: <GroupWorkIcon />,
			title: "Teams",
			path: "/teams",
		},
		{
			icon: <PeopleAltOutlinedIcon />,
			title: "Employees",
			path: "/employees",
		},
		{
			icon: <BusinessCenterOutlinedIcon />,
			title: "Projects",
			path: "/projects",
		},
	],
	bottom: [
		{
			icon: <PhoneOutlinedIcon />,
			title: "Meetings",
			path: "/meetings",
		},
		{
			icon: <FolderOpenOutlinedIcon />,
			title: "Tasks",
			path: "/tasks",
		},
		{
			icon: <SettingsOutlinedIcon />,
			title: "Settings",
			path: "/settings",
		},
	],
};

