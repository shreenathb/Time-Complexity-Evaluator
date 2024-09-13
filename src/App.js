

import { Box, ChakraProvider } from '@chakra-ui/react'
import TextEditor from "./components/TextEditor";


function App() {
  return (
    <Box minH = "100vh" bg = "#0f0a19" color = "gray.500" px={6} py = {4}> 
      <TextEditor/>
    </Box>
    
  );
}

export default App;
