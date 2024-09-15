import { Box } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'

import React from 'react'

export default function LanguageSelector(props) {
    return (
        
        <Box>
            <Menu>
                <MenuButton as={Button}>
                    {props.lang}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={()=>props.onSelect("CPP")}>C++</MenuItem>
                    <MenuItem onClick={()=>props.onSelect("Java")}>Java</MenuItem>
                    <MenuItem onClick={()=>props.onSelect("Python")}>Python</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}
