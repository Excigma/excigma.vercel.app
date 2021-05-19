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
    const path = name || "/";

    return (
        <div>
            <Head>
                <title>{path} - PastpaperArmyKnife</title>

                <meta name="robots" content="noindex, nofollow" />

                <meta name="description" content="A storage of Excigma's class notes and some past paper questions - by topic." />
                <meta name="theme-color" content="#2f3136" />
                <meta name="subject" content="Notes"/>
                <meta name="author" content="Excigma" />
                

                <meta name="og:title" content={`${path} - PastpaperArmyKnife`}/>
                <meta name="og:type" content="website"/>
                <meta name="og:image" content="/static/img/favicon-32x32.png"/>
                <meta name="og:site_name" content="PastpaperArmyKnife"/>
                <meta name="og:description" content="A storage of Excigma's class notes and some past paper questions - by topic."/>
                
                <link rel="shortcut icon" href="favicon.ico" />

                <script src="https://umami.up.railway.app/umami.js"></script>
            </Head>

            <Header />

            <Component {...pageProps} />

            <Footer />
        </div>
    );
}

export default MyApp;
