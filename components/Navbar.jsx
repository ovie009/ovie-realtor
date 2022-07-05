import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, useMediaQuery} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout, FcSearch, FcDepartment } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';

const Navbar = ({closeSearchFilters}) => {

    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

    return (
        <Flex p="2" px="10px" borderBottom="1px" borderColor="gray.100" alignItems={"center"} maxWidth="1440px" margin={"auto"}>
            <Box fontSize={"xl"} color="blue.300">
                <Link href="/" paddingLeft="10px">
                    <Flex alignItems="center" gap="10px" cursor="pointer">
                        <FcDepartment />
                        Ovie Realtor
                    </Flex>
                </Link>
            </Box>
            <Spacer />
            <Box>
                {isLargerThan1280 ?
                    <Flex alignItems={"center"} gap="30px">
                        <Link href="/" passHref>
                            <Flex cursor="pointer" alignItems={"center"}>Home</Flex>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <Flex onClick={() => closeSearchFilters()} cursor="pointer" alignItems={"center"}>Buy property</Flex>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <Flex onClick={() => closeSearchFilters()} cursor="pointer" alignItems={"center"}>Rent Property</Flex>
                        </Link>
                        <Link href="/search" passHref>
                            <Flex onClick={() => closeSearchFilters()} cursor="pointer" gap="10px" alignItems={"center"}> <FcSearch/> Search</Flex>
                        </Link>
                    </Flex> : 
                    <Menu>
                        <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color={"red.400"} />
                        <MenuList>
                            <Link href="/" passHref>
                                <MenuItem icon={<FcHome/>}>Home</MenuItem>
                            </Link>
                            <Link href="/search" passHref>
                                <MenuItem onClick={() => closeSearchFilters()} icon={<FcSearch/>}>Search</MenuItem>
                            </Link>
                            <Link href="/search?purpose=for-sale" passHref>
                                <MenuItem onClick={() => closeSearchFilters()} icon={<FcAbout/>}>Buy Property</MenuItem>
                            </Link>
                            <Link href="/search?purpose=for-rent" passHref>
                                <MenuItem onClick={() => closeSearchFilters()} icon={<FiKey/>}>Rent Property</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                }
            </Box>
        </Flex>
    );
}
 
export default Navbar;