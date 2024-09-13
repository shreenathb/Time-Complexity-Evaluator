import { Box, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Result({ lang, setLang, value, setValue }) {

  const [res, setRes] = useState("Hope its not O(n^2)")

  const handleClick = async(e) => {
    const response = await fetch("http://127.0.0.1:5000/time_complexity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {code : value}
        )
      });

      const res1 = await response.json(); 
      setRes(res1.tc)

  };

  return (
    <Box>
      <Button onClick={handleClick}>
        Evaluate
      </Button>
      <Text>
        {res}
      </Text>
    </Box>
  )
}
