import { getTeam } from "api";
import Layout from "components/Layout/layout";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

export default function Home({ data }) {
	const router = useRouter();
	return (
		<Layout>
			<Stack
				direction={"row"}
				gap={2}
				alignItems={"center"}>
				<Image
					width={300}
					height={300}
					style={{ borderRadius: "50%" }}
					src={data?.url}
					alt='logo'
				/>
				<Box>
					<Typography
						variant='h6'
						color={"coral"}
						fontWeight={"700"}>
						{data?.title}
					</Typography>
					<Typography
						my={2}
						variant='span'
						sx={{ fontSize: "14px", color: "#333", display: "block" }}>
						Count subscribers: {data?.count}
					</Typography>
					<Typography
						variant='p'
						sx={{ fontSize: "15px", color: "#7661eb" }}>
						{data?.desc}
					</Typography>
				</Box>
			</Stack>
		</Layout>
	);
}
export async function getServerSideProps(context) {
	const block = context.query.id;
	const res = await getTeam(block);
	return {
		props: { data: res }, // will be passed to the page component as props
	};
}
