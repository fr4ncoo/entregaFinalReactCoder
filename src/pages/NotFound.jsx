import React from 'react'
import {Flex, Heading, Text, Button, Divider} from "@chakra-ui/react";
import { Link } from 'react-router';



export const NotFound = () => {
  return (
    <div>
        <Flex alignItems={"center"} justifyContent={"Center"} flexDirection={"column"}>

            <Heading>
                Error 404 NotFound
            </Heading>
            <Text>La página solicitada no existe.</Text>
            <br></br>
            <Divider/>
            <br></br>
            <br></br>
            <Button>
            <Link to="/">Volver al inicio</Link>
            </Button>
        </Flex>
    </div>
  )
}

