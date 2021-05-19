import React from "react";
import Head from "next/head";

export default function Header() {
    return (
        <div>
            <Head>
                <meta name="description" content="A storage of Excigma's Notes." />
                <meta name="robots" content="noindex, nofollow" />
                <link rel="shortcut icon" href="favicon.ico" />
                <script src="https://umami.up.railway.app/umami.js"></script>
            </Head>

            <main>
                <nav className="blue darken-3" role="navigation">
                    <div className="nav-wrapper container">
                        <a id="logo-container" href="/" className="brand-logo">
                            <img height="40px" width="40px" src="/static/img/favicon-96x96.png" style={{ transform: "translateY(6px)" }} />
                        </a>

                        <ul className="right hide-on-med-and-down waves-effect waves-dark">
                            <li><a href="/<%- subject %>">lmao</a></li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                            <li><a href="/">Home</a></li>

                            <li><a href="<%- subject %>">joy</a></li>
                        </ul>

                        <a href="#" data-target="nav-mobile" className="sidenav-trigger" style={{ fontSize: "30px" }}>≡</a>
                    </div>
                </nav>
            </main>
        </div>
    );
}