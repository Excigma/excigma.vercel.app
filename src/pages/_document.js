import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import createEmotionServer from '@emotion/server/create-instance';

const getCache = () => {
    const cache = createCache({ key: 'css', prepend: true });
    cache.compat = true;

    return cache;
};

    
export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        const cache = getCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
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
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
                ...emotionStyleTags,
            ],
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head >
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="robots" content="noindex, nofollow" /> 

                    <meta name="description" content="A storage of Excigma's class notes and some past paper questions - by topic." />
                    <meta name="theme-color" content="#2f3136" />
                    <meta name="subject" content="Notes"/>
                    <meta name="author" content="Excigma" />
                    
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" href="favicon.ico" />

                    <link rel="apple-touch-icon" href="/icons/icon-72x72.png"></link>
                
                    <script async defer data-website-id="0b58b0f1-03c3-4420-aec0-d4ae8e4518c8" src="https://umami.up.railway.app/umami.js"></script>

                    <meta name="og:type" content="website"/>
                    <meta name="og:image" content="/icons/icon-48x48.png"/>
                    <meta name="og:site_name" content="PastpaperArmyKnife + Notes"/>
                    <meta name="og:description" content="A storage of Excigma's class notes and some past paper questions - by topic."/>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}