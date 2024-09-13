import { Box, Text } from '@chakra-ui/react'
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
            <Text>
                Language
            </Text>
            <Menu>
                <MenuButton as={Button}>
                    {props.lang}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={()=>props.onSelect("cpp")}>C++</MenuItem>
                    <MenuItem onClick={()=>props.onSelect("java")}>Java</MenuItem>
                    <MenuItem onClick={()=>props.onSelect("python")}>Python</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}
