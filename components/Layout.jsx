import Head from 'next/head';
import { Box } from '@chakra-ui/react';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Ovie Reator</title>
            </Head>
            <Box maxWidth={1440} m="auto">
                <header>
                    Navbar
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </Box>
        </>
    );
}
 
export default Layout;