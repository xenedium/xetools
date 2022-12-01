import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, type ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { HeaderMiddle } from '../components/header';
import { Analytics } from '@vercel/analytics/react';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


    return (
        <>
            <Head>
                <title>XeTools | Online tools</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="description" content="Xetools is a website that provides some essential developer tools." />

                <meta property="og:url" content="https://xetools.live" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Xetools | Online developer tools" />
                <meta property="og:description" content="Xetools is a website that provides some essential developer tools." />
                <meta property="og:image" content="/ogimage.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="xetools.live" />
                <meta property="twitter:url" content="https://xetools.live" />
                <meta name="twitter:title" content="Xetools | Online developer tools" />
                <meta name="twitter:description" content="Xetools is a website that provides some essential developer tools." />
                <meta name="twitter:image" content="/ogimage.png" />

            </Head>

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme,
                        primaryColor: 'yellow'
                    }}
                >
                    <HeaderMiddle />
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
            <Analytics />
        </>
    );
}