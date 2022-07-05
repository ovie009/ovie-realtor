import { Box, Flex, Text, Avatar  } from '@chakra-ui/react';
import { FaBed, FaBath, FaBorderAll } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import ImageScrollbar from '../../components/ImageScrollbar';
import { fetchApi, baseUrl } from '../../utils/fetchApi';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos} }) => (
    <Box maxWidth={"1440px"} margin="auto" p="4" paddingBottom="100px">
        { photos && <ImageScrollbar data={photos} /> }
        <Box w="full" p="6">
            <Flex pt={2} alignItems="center" gap="30px">
                <Flex alignItems={"center"}>
                    <Box pr={3} color="green.400">{isVerified && <GoVerified />}</Box>
                    <Text fontWeight={"bold"} color="gray.900" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`} </Text>
                </Flex>
                <Box>
                    <Avatar size={"sm"} src={agency?.logo?.url}></Avatar>
                </Box>
            </Flex>
            <Flex alignItems={"center"} gap="10px" p="1" w="full" color={"blue.400"}>
                {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <FaBorderAll />
            </Flex>
            <Text fontSize={"lg"} color="gray.700">
                {title}
            </Text>
            <Text lineHeight="2" color="gray.600" py={"20px"}>{description}</Text>
            <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="flex-start" gap="50px">
                <Flex w="200px" p="3" borderColor="gray.100" gap="20px">
                    <Text>Type:</Text>
                    <Text fontWeight="bold">{type}</Text>
                </Flex>
                <Flex w="200px" p="3" borderColor="gray.100" gap="20px">
                    <Text>Purpose:</Text>
                    <Text fontWeight="bold">{purpose}</Text>
                </Flex>
                {furnishingStatus && 
                    <Flex minWidth="200px" p="3" borderColor="gray.100" gap="20px">
                        <Text >Furnishing Status:</Text>
                        <Text fontWeight="bold">{furnishingStatus}</Text>
                    </Flex>
                }
            </Flex>
            <Box>
                {amenities.length > 0 &&
                    <>
                        <Text fontWeight="bold" fontSize="2xl">Amenities:</Text>
                        <Flex flexWrap="wrap">
                            {amenities.map((item) => (
                                item.amenities.map((amenity) => (
                                    <Text
                                    color="blue.400"
                                    fontSize="l"
                                    p="2"
                                    bg="gray.200"
                                    m="1"
                                    borderRadius="5"
                                    key={amenity.text}
                                    >
                                        {amenity.text}
                                    </Text>
                                ))
                            ))}
                        </Flex>
                    </> 
                }
            </Box>
        </Box>
    </Box>
)

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    console.log("🚀 ~ file: [id].js ~ line 34 ~ getServerSideProps ~ data", data)
    
    return {
        props: {
            propertyDetails: data
        }
    }
}
  