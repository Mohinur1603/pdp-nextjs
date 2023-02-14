import { getTeams } from "api";
import Layout from "components/Layout/layout";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

export default function Teams({ data }) {
	const router = useRouter();
	return (
		<Layout>
			<Stack
				direction={"row"}
				spacing={2}>
				{data?.map((item) => (
					<Box
						width='30%'
						key={item.title}
						onClick={() => router.push("/teams" + `/${item.slug}`)}>
						<Image
							src={item.url}
							width={290}
							height={200}
							alt='logo'
						/>
						<p className='teams-link'>{item.title}</p>
					</Box>
				))}
			</Stack>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const res = await getTeams();
	return {
		props: { data: res },
	};
}
