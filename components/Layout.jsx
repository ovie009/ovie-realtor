import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children, closeSearchFilters}) => {

    return (
        <>
            <Head>
                <title>Ovie Reator</title>
            </Head>
            <Box maxWidth={1440} m="auto" minHeight={"100vh"}>
                <header>
                    <Navbar closeSearchFilters={closeSearchFilters} />
                </header>
                <main>
                    {children}
                </main>
                <footer style={{
                    position: 'absolute',
                    zIndex: "2",
                    width: "100vw",
                    left: "0",
                    bottom: "0"
                }}>
                    <Footer />
                </footer>
            </Box>
        </>
    );
}
 
export default Layout;