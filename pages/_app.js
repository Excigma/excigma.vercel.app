import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import "../styles/globals.css";
import "../styles/materialize.min.css";

import Header from "../components/header";
import Footer from "../components/footer";


// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const name = router.pathname.substring(1);

    return (
        <div>
            <Head>
                <title>{ name ? name+ " |" : ""} PastpaperArmyKnife</title>
            </Head>

            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
