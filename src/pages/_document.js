import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

const getCache = () => {
    const cache = createCache({ key: 'custom', prepend: true });
    cache.compat = true;

    return cache;
};

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <meta name="description" content="A gallery of Excigma's projects, notes and other things he tinkers with." />
                    <meta name="theme-color" content="#2f3136" />
                    <meta name="subject" content="Blog" />
                    <meta name="author" content="Excigma" />

                    <meta name="og:type" content="website" />
                    <meta name="og:image" content="/icons/apple-icon-72x72.png" />
                    <meta name="og:site_name" content="Excigma's Webpage" />
                    <meta name="og:description" content="A gallery of Excigma's projects, notes and other things he tinkers with." />

                    <link rel="shortcut icon" href="favicon.ico" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />

                    <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

                    <meta name="msapplication-TileColor" content="#2f3136" />
                    <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />

                    <link rel="manifest" href="/manifest.json" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="preconnect" href="https://umami.up.railway.app" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

                <script async defer data-website-id="0b58b0f1-03c3-4420-aec0-d4ae8e4518c8" src="https://umami.up.railway.app/umami.js"></script>

                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'" />
                <link
                    rel="preload"
                    href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'" />

                <noscript>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet"
                    />
                </noscript>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    const cache = getCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
            // Take precedence over the CacheProvider in our custom _app.js
            // eslint-disable-next-line react/display-name
            enhanceComponent: (Component) => (props) => (
                <CacheProvider value={cache}>
                    <Component {...props} />
                </CacheProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
            ...emotionStyleTags,
        ],
    };
};