import { useState } from "react";
import { useRouter } from "next/router";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from 'react-icons/bs';
import Image from 'next/image';
import SearchFilters from "../components/SearchFilters";
import Property from '../components/Property';
import noResult from '../assets/noresult.svg';
import { fetchApi, baseUrl } from '../utils/fetchApi';
import { filterData, getFilterValues } from "../utils/filterData";


const Search = ({ properties, pageCount, searchFilters, handleSearchFilters }) => {
    // console.log("🚀 ~ file: Search.js ~ line 14 ~ Search ~ searchFilters", searchFilters)
    // console.log("🚀 ~ file: Search.js ~ line 12 ~ Search ~ pageCount", pageCount)
    
    const router = useRouter();
    
    return (
        <Box pb="100px">
            <Flex 
                cursor={"pointer"}
                bg="gray.100"
                borderBottom={"1px"}
                borderColor="gray.200"
                p="2"
                fontWeight={"black"}
                fontSize="lg"
                justifyContent={"center"}
                alignItems="center"
                onClick={() => handleSearchFilters()}
            >
                <Text>Search Property By Filters</Text>
                <Icon pl={"2"} w="7" as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters filterData={filterData} getFilterValues={getFilterValues} />}
            <Text fontSize={"xl"} fontWeight="500" w="full" textTransform="uppercase" textAlign="center" my="10px" p="4">Properties {router.query.purpose}</Text>
            <Flex flexFlow="wrap" justifyContent={"center"} gap="20px" >
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent="flex-start" alignItems="center" flexDirection={"column"} p="50px">
                    <Image alt="no result" src={noResult} />
                    <Text fontSize={"2xl"} my="20px" >No Result Found</Text>
                </Flex>
            )}
        </Box>
    );
}
 
export default Search;


export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const roomsMax = query.roomsMax || '10';
    const bathsMax = query.bathsMax || '10';
    const page = query.page || '0';
    const hitsPerPage = query.hitsPerPage || '12';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '30000';
    const furnishingStatus = query.furnishingStatus || 'furnished';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&bathsMax=${bathsMax}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&roomsMax=${roomsMax}&sort=${sort}&areaMax=${areaMax}&page=${page}&hitsPerPage=${hitsPerPage}&furnishingStatus=${furnishingStatus}`);
  
    return {
      props: {
        properties: data?.hits,
        pageCount: data?.nbPages
      }
    }
}
  