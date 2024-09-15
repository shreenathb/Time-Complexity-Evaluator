import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import LanguageSelector from './LanguageSelector'
import Result from './Result'
import { Heading } from '@chakra-ui/react'


export default function TextEditor() {
    const [value, setValue] = useState('')
    const [lang, setLang] = useState('Python')
    const onSelect = (newlang) => {
        setLang(newlang);
    }
    return (<Box>
        <Heading color={'#e2ede8'}>Towards O(n) - Time Complexity Evaluator</Heading>
        <HStack spacing={4} py={10} >

            <Box w='65%'>
                <LanguageSelector lang={lang} onSelect={onSelect} />
                <Box py={2}>
                    <Editor height="75vh"
                        theme="vs-dark"
                        defaultLanguage={lang.toLowerCase()}
                        defaultValue={value}
                        language={lang.toLowerCase()}
                        value={value}
                        py={2}
                        onChange={
                            (value) => setValue(value)
                        }
                    />
                </Box>
            </Box>
            <Result lang={lang} value={value} />
        </HStack>
    </Box>

    )
}
