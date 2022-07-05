import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Ovie Reator</title>
            </Head>
            <Box maxWidth={1440} m="auto" minHeight={"100vh"}>
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    );
}
 
export default Layout;