import { useEffect, useState, useId } from "react";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MdCancel from 'react-icons/md';
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
    
    const router = useRouter();
    const path = router.pathname;
    const { query } = router;

    const id = useId()
    const [filters, setFilters] = useState(() => {
        let tempFilter = filterData
        console.log("🚀 ~ file: SearchFilters.jsx ~ line 17 ~ const[filters,setFilters]=useState ~ path", query)
        if (query.purpose === 'for-sale') {
            tempFilter[0].default = 'for-sale';
            console.log("🚀 ~ file: SearchFilters.jsx ~ line 18 ~ const[filters,setFilters]=useState ~ tempFilter[0].default", tempFilter[0].default)
            return tempFilter;
        } else{
            return tempFilter;
        }
    });
    
    const searchProperties = (filterValues) => {
        
        
        const values = getFilterValues(filterValues);
        
        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        })

        console.log("🚀 ~ file: SearchFilters.jsx ~ line 38 ~ searchProperties ~ path", path)
        router.push({pathname: path, query });
    }

    return (
        <Flex bg="gray.100" justifyContent={"center"} flexWrap="wrap" gap={"15px"} py="20px" w="full">
            {filters.map((filter) => (
                <Flex key={filter.queryName} alignItems="center" justifyContent={"center"} gap="5px" fontSize="sm">
                    <label htmlFor={`${id}-${filter.queryName}`}>{filter.placeholder}</label>
                    <Select
                     boxShadow="md"
                     bg="white"
                     name={filter.queryName}
                     id={`${id}-${filter.queryName}`}
                     value={filter.default}
                     onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                    >
                        {filter?.items?.map((items) => (
                            <option value={items.value} key={items.value}>
                                {items.name}
                            </option>
                        ))}
                    </Select>
                </Flex>
            ))}
        </Flex>
    );
}
 
export default SearchFilters;