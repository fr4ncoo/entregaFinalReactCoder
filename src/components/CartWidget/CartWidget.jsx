import { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { CartContext } from "../../context";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cartState } = useContext(CartContext);

  const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);

  return (
    <Link to="/checkout">
      <Flex
        alignItems={"center"}
        marginRight={"30px"}
        justifyContent={"space-between"}
        width={"30px"}
      >
        <CiShoppingCart size={40} />
        {totalItems}
      </Flex>
    </Link>
  );
};