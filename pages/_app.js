import { theme } from "styles/theme";
import "../styles/style.css";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
	 const [showing, setShowing] = useState(false);

      useEffect(() => {
        setShowing(true);
      }, []);
    
      if (!showing) {
        return null;
      }
    
      if (typeof window === 'undefined') {
        return <></>;
	  }else return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Head>
				<title>My next dashboard</title>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
