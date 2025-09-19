import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { CiSearch } from "react-icons/ci";
import { ItemListContainer } from "../components";

export const Busqueda = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setNoResults(false);

    try {
      const productsRef = collection(db, "products");
      const querySnapshot = await getDocs(productsRef);

      const searchLower = searchQuery.toLowerCase();
      const filteredProducts = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((product) =>
          product.title.toLowerCase().includes(searchLower)
        );

      setProducts(filteredProducts);
      setNoResults(filteredProducts.length === 0);
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Flex flexDirection={"column"} width={"90%"} margin={"0 30px"}>
      <Heading size="2xl">Búsqueda de productos</Heading>
      <br />
      <Flex>
        <InputGroup>
          <Input
            type="text"
            placeholder="Buscar producto por nombre..."
            onChange={handleChange}
            onKeyDown={handleKeyPress} // Detectar "Enter"
          />
          <InputRightAddon onClick={handleSearch} cursor="pointer">
            <CiSearch />
          </InputRightAddon>
        </InputGroup>
      </Flex>
      <br />

      {loading && (
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      )}

      {noResults && !loading && (
        <Text textAlign="center" fontSize="xl" color="gray.500">
          No se encontraron resultados :c
        </Text>
      )}

      {!loading && !noResults && <ItemListContainer products={products} />}
    </Flex>
  );
};
