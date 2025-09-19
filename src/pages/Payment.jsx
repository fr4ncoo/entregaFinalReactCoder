import React, { useContext, useState } from "react";

import { collection, addDoc } from "firebase/firestore";

import { CartContext } from "../context";

import { db } from "../firebase";

import { Flex, Input, Heading, Button } from "@chakra-ui/react";

import Swal from 'sweetalert2'


export const Payment = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("")

  const { cartState } = useContext(CartContext);

  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyCartItem,
    0
  );

  const handleConfirmOrder = () => {
    if (name === "" || lastName === "" || email === "" || adress === "") {
      Swal.fire({
        title: "Datos obligatorios",
        text: 'Todos los datos son obligatorios',
        icon: "error",
        confirmButtonText: "Aceptar"
      })
      return;
    }
    const orderObj = {
      buyer: {
        name,
        lastName,
        email,
        adress,
      },
      items: cartState.map((item) => {
        return {
          id: item.id,
          title: item.title,
          quantity: item.qtyCartItem,
          price: item.price,
        };
      }),
      total,
    };

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, orderObj)
      .then(({id}) => {
        Swal.fire({
            title: "Orden Creada",
            text: 'Orden creada exitosamente, tu número de orden es: ' + id,
            icon: "success",
            confirmButtonText: "Aceptar"
          })
      })
      .catch((error) => console.error(error));
  };

  return (
    <Flex w={"100vw"} flexDirection={"column"} alignItems={"center"}>
      <Heading>Pago de orden</Heading>
      <Flex w={"30%"} flexDirection={"column"} mt={5}>
        <Input placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
        <br />
        <Input
          placeholder="Apellido"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <Input
          placeholder="Dirección"
          onChange={(e) => setAdress(e.target.value)}
        />
        <br />
        <Input
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Button onClick={handleConfirmOrder}>Confirmar pago</Button>
      </Flex>
    </Flex>
  );
};