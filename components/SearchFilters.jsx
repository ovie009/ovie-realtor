import { useEffect, useState, useId } from "react";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MdCancel from 'react-icons/md';
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
    
    const router = useRouter();
    const path = router.pathname;
    const { query } = router;

    const id = useId();

    const [filters] = useState(() => {
        let tempFilter = filterData
        tempFilter.forEach(filter => {
            if (query[filter.queryName]) {
                filter.default = query[filter.queryName];
            } else{
                let findIndex = filterData.find(item => item.queryName === filter.queryName)
                filter.default = findIndex.default;
            }
        });
        return tempFilter;
    });
    
    const searchProperties = (filterValues) => {
        
        
        const values = getFilterValues(filterValues);
        
        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        })

        router.push({pathname: path, query });
    }

    return (
        <Flex bg="gray.100" justifyContent={"center"} flexWrap="wrap" gap={"15px"} py="20px" w="full">
            {filters.map((filter) => {
                if (!(query.purpose === 'for-sale' &&  filter.queryName === 'rentFrequency')) {
                    return (
                        <Flex key={filter.queryName} alignItems="center" justifyContent={"center"} gap="5px" fontSize="sm">
                            <Text grow="3" minWidth="fit-content">{filter.placeholder}</Text>
                            <Select
                            flexGrow="1"
                            fontSize="sm"
                            boxShadow="md"
                            bg="white"
                            name={filter.queryName}
                            id={`${id}-${filter.queryName}`}
                            defaultValue={filter.default}
                            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                            >
                                {filter?.items?.map((items) => {
                                    return (
                                        <option value={items.value} key={items.value}>
                                            {items.name}
                                        </option>
                                    )
                                })}
                            </Select>
                        </Flex>
                    )
                }
            })}
        </Flex>
    );
}
 
export default SearchFilters;