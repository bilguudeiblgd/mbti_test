import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-S7R8QW66QB"
                />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6840183695058057"
                    crossorigin="anonymous"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S7R8QW66QB', { page_path: window.location.pathname });
            `,
                    }}
                />

                <meta name="description" content="Та ямар зан чанартай хүн бэ? Myers Briggs Type indicator" />
                <meta name="keywords" content="16 Types, 16 Personalities, Myers briggs type indicator" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <Main />
            <NextScript />
        </Html>
    );
}