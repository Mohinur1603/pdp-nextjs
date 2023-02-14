import Layout from "components/Layout/layout";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Home() {
	return (
		<Layout>
			<Box
				textAlign={"center"}
				sx={{ position: "relative" }}>
				<Image
					style={{
						backgroundSize: "cover",
						margin: "0 auto",
					}}
					width={500}
					height={400}
					src='https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif'
					alt='page is not founded'
				/>
				<Link
					href={"/"}
					className='btn'>
					Home
				</Link>
			</Box>
		</Layout>
	);
}
