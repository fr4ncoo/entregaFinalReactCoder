import React, { useEffect, useState } from "react";
import { Flex, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { searchProducts } from "../../services/productServices";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    searchProducts(searchQuery).then((res) => {
      console.log(res);
    });
  };

  return (
    <Flex>
      <InputGroup>
        <Input
          type="text"
          placeholder="Buscar producto por nombre..."
          onChange={handleChange}
        ></Input>
        <InputRightAddon onClick={handleSearch}>
          <CiSearch />
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
};