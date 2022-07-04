import Link from 'next/link';
import { Image } from '@chakra-ui/react';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/Bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../assets/house.jpg';

const Property = ({ property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID} }) => {
console.log("🚀 ~ file: Property.jsx ~ line 11 ~ Property ~ rentFrequency", rentFrequency)
    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex flexWrap="wrap" w="25%" minWidth={300} cursor="pointer" padding="5" pt={0}>
                <Box w="full">
                    <Image src={coverPhoto ? coverPhoto.url : defaultImage} width="full" alt="house"/>
                </Box>
                <Box w="full">
                    <Flex pt={2} alignItems="center" justifyContent={"space-between"}>
                        <Flex alignItems={"center"}>
                            <Box pr={3} color="green.400">{isVerified && <GoVerified />}</Box>
                            <Text fontWeight={"bold"} fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
                        </Flex>
                        <Box>
                            <Avatar size={"sm"} src={agency?.logo?.url}></Avatar>
                        </Box>
                    </Flex>
                    <Flex alignItems={"center"} p="1" justifyContent={"space-between"} w="full" color={"blue.400"}>
        	            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize={"lg"} color="gray.700">
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    );
}
 
export default Property;