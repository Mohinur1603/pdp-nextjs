import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo from "../../assets/nut.png";
import lamp from "../../assets/lamps.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar, Stack } from "@mui/material";
import { lists } from "constants";
import { CustomLink } from "./Links";
import { useRouter } from "next/router";
import Image from "next/image";

const drawerWidth = 290;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	justifyContent: "flex-end",
}));

export default function Layout({ children }) {
	const router = useRouter();
	const theme = useTheme();
	const [open, setOpen] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				position='fixed'
				open={open}
				sx={{ bgcolor: "#fef1f1", boxShadow: "none" }}>
				<Toolbar>
					<IconButton
						color={`${theme.palette.primary}`}
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{ mr: 2, ...(open && { display: "none" }) }}>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						color={"#222"}
						flexGrow={1}>
						Good Morning Anima
						<span
							style={{ color: "#828282", fontSize: "12px", display: "block" }}>
							Hope you have a good day
						</span>
					</Typography>
					<Stack
						direction='row'
						spacing={1}>
						<IconButton>
							<SearchIcon fontSize='small' />
						</IconButton>
						<IconButton>
							<NotificationsNoneOutlinedIcon fontSize='small' />
						</IconButton>
						<Avatar
							alt='Mohin'
							src='https://s3-alpha-sig.figma.com/img/3e7e/1346/9f9936fa68f41c17b224a071bea60ef2?Expires=1676851200&Signature=NZtLH-XfrZW9AsPhy4RP9hwslMamMdlwS9s-47zVT5816wpZ0ZWmHXTuwYX2MddtNsqIU4fke8kZdbL6C6aO7VlhuVLPuZSdTOdIYfKK2n4Ou0peYg2pifEc68bboj2adHpyYoQZ4crT7stE9o2awfY2BmcU88CMefBgw7o~1wFG7oD9LaaG5M99pxlv9fxJxoEAz6Qcb0My-YxVrAdlcVD~4cIHAyeL3EJQynMhon4TquW6RUqtI9AvgymIzRj5mt15l1V45tN7Sm40pLa-fgX~0It87NAgdhhOlh62r-s9baTuok~6Hp7ffc9a6wKDSSVxOgolkTIpqqXeTskJKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
						/>
					</Stack>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						bgcolor: "#f9f9f9",
					},
				}}
				variant='persistent'
				anchor='left'
				open={open}>
				<DrawerHeader>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"space-between"}
						color={`${theme.palette.primary}`}
						width={"100%"}
						p={2}>
						<Typography
							fontSize={"22px"}
							color={theme.palette.primary.main}
							fontWeight={"bold"}
							display={"flex"}
							alignItems={"center"}
							gap={1}>
							<Image
								src={logo}
								alt='/'
							/>
							Teamify
						</Typography>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === "ltr" ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</Box>
				</DrawerHeader>
				<Stack p={2}>
					{lists?.top.map((item) => (
						<CustomLink
							key={item.title}
							href={`${item.path}`}
							className={
								router.pathname.slice(1, -1) === item.path.slice(1, -1)
									? "active"
									: ""
							}>
							{item.icon} <span>{item.title}</span>
						</CustomLink>
					))}
					<Divider />
					{lists?.bottom.map((item) => (
						<CustomLink
							key={item.title}
							href={`${item.path}`}
							className={
								router.pathname.slice(1, -1) === item.path.slice(1, -1)
									? "active"
									: ""
							}>
							{item.icon} <span>{item.title}</span>
						</CustomLink>
					))}
				</Stack>
				<Box
					textAlign={"center"}
					borderRadius={"12px"}
					bgcolor={"#d2cbf89a"}
					width={"200px"}
					m={"0 auto"}
					position={"relative"}>
					<Image
						src={lamp}
						alt='/'
						width={100}
						height={115}
					/>
					<Typography className='abs'>Share Your Thoughts</Typography>
				</Box>
			</Drawer>
			<Main
				open={open}
				style={{ marginTop: "70px" }}>
				{/* <DrawerHeader /> */}
				{children}
			</Main>
		</Box>
	);
}
