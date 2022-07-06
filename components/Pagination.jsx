import { Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Pagination = ({ pageCount, page}) => {
    console.log("🚀 ~ file: Pagination.jsx ~ line 5 ~ Pagination ~ page", page)
    console.log("🚀 ~ file: Pagination.jsx ~ line 5 ~ Pagination ~ pageCount", pageCount)
    
    const handlePage = () => {

    }

    const [pages, setPages] = useState(() => {
        let x = page;
        let pageLinks = [];
        let manyPages = true;
        while (x < page + 4) {
            pageLinks.push(x)
            x++;
        }
        pageLinks.push(pageCount - 1);
        if (pageCount - page < 2) {
            manyPages = false;
        }
        return {pageLinks: pageLinks, manyPages: manyPages}
    });

    console.log(pages)

    return (
        <Flex justifyContent="center" alignItems="center" w="full" my="30px" gap="10px">
            { page > 0 && <Button variant='outline' colorScheme='linkedin' size="xs">Prev</Button> }
            {pages.pageLinks.map((pageLink, index) => {
                if (pageLink === page) {
                    return (
                        <Button onClick={() => handlePage()} key={index} colorScheme='linkedin' size="xs">{pageLink + 1}</Button>
                    )
                } else if (index === pages.pageLinks.length - 1) {
                    return (
                        <Flex key={index} gap="10px">
                            <Text>...</Text>
                            <Button onClick={() => handlePage()} variant='outline' colorScheme='linkedin' size="xs">{pageLink + 1}</Button>
                        </Flex>
                    )
                } else {
                    return (
                        <Button onClick={() => handlePage()} key={index} variant='outline' colorScheme='linkedin' size="xs">{pageCount}</Button>
                    )
                }
            })}

            { pageCount > page + 1 && <Button variant='outline' colorScheme='linkedin' size="xs">Next</Button> }
        </Flex>
    );
}
 
export default Pagination;