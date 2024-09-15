import { Box, Button, Text, Center, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Result({ lang, setLang, value, setValue }) {

  const [res, setRes] = useState("Hope its not O(n^2)")

  const handleClick = async (e) => {

    setRes("Loading...")

    const response = await fetch("http://127.0.0.1:5000/time_complexity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        { code: value }
      )
    });

    const res1 = await response.json();
    setRes(res1.tc)

  };

  return (
    <Box>
      
      <Center>
        <Button onClick={handleClick} cent>
          Evaluate
        </Button>
      </Center>
      

      <Text py={4} color={'#e2ede8'}>
        {res}
      </Text>
    </Box>
  )
}
