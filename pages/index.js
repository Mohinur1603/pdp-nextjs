import { DoughnutChart } from "components/charts/doughnotChart";
import { LineChart } from "components/charts/lineChart";
import { VerticalChart } from "components/charts/verticalChart";
import Layout from "components/Layout/layout";
import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
// import { useEffect, useState } from "react";
import { getCards } from "../api";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
	//useEffect orqali data ni olish
	// const [forCards, setForCards] = useState();
	// useEffect(() => {
	// 	const res = getCards().then((res) => setForCards(res));
	// 	console.log(res);
	// }, []);
	return (
		<Layout>
			<Stack
				direction={"row"}
				width={"100%"}>
				<Box width={"70%"}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Paper
							sx={{ padding: 2, width: "49%" }}
							key={"1a"}>
							<Typography component='h6'>Teams Strength</Typography>
							<VerticalChart />
						</Paper>
						<Paper
							sx={{ padding: 2, width: "49%" }}
							key={"1b"}>
							<Typography component='h6'>Employees</Typography>
							<DoughnutChart />
						</Paper>
					</div>
					<Paper
						sx={{
							padding: 2,
							width: "100%",
							marginTop: 3,
							boxShadow: "0px 0px 18px 5px rgba(0,0,0,0.1)",
						}} key={'1c'}>
						<Typography component='h6'>Project Deliveries</Typography>
						<LineChart />
					</Paper>
				</Box>
				<Stack
					width={"30%"}
					ml={1.8}>
					{data?.cards?.map((item) => (
						<Paper key={item.count}
							sx={{
								p: 2,
								mb: 2,
								bgcolor: `${item.bg}`,
								textAlign: "center",
							}}>
							<Typography
								variant='h6'
								fontWeight={"700"}>
								{item.count}
							</Typography>
							<span style={{ display: "block", fontSize: "14px" }}>
								{item.title}
							</span>
							<span style={{ fontSize: "12px", color: "#787486" }}>
								{item.desc} Increase from Last Week
							</span>
						</Paper>
					))}

					<Stack
						direction={"row"}
						justifyContent={"space-between"}
						my={5}>
						<Typography variant='h6'>Notifications</Typography>
						<Link sx={{ color: "#6956E5 !important", fontWeight: "600" }}>
							View All
						</Link>
					</Stack>
					<Stack spacing={2}>
						{data?.tiles?.map((item) => (
							<Stack
								direction={"row"}
								key={item.title}
								spacing={1}
								borderRadius={"10px"}
								bgcolor={"#F9F9F9"}
								p={2}>
								<Image
									width={36}
									height={36}
									src={item.url}
									alt='logo'
								/>
								<Box>
									<span
										style={{
											color: "#23262F",
											fontSize: "12px",
											fontWeight: "500",
											display: "block",
										}}>
										{item.title}
									</span>
									<span
										style={{
											color: "#708099",
											fontSize: "10px",
											fontWeight: "500",
											display: "block",
										}}>
										{item.date}
									</span>
								</Box>
							</Stack>
						))}
					</Stack>
				</Stack>
			</Stack>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const res = await getCards();
	console.log(res);
	return {
		props: { data: res },
	};
}
