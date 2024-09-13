import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import LanguageSelector from './LanguageSelector'
import Result from './Result'


export default function TextEditor() {
    const [value, setValue] = useState('')
    const [lang, setLang] = useState('python')
    const onSelect = (lang) => {
        setLang(lang);
    }
    return (
        <HStack spacing = {4}>
            <Box w = '65%'>
                <LanguageSelector lang={lang} onSelect={onSelect} />
                <Box py={2}>
                    <Editor height="75vh"
                        theme="vs-dark"
                        defaultLanguage={lang}
                        defaultValue={value}
                        value={value}
                        py={2}
                        onChange={
                            (value) => setValue(value)
                        }
                    />
                </Box>
            </Box>
            <Result lang = {lang} value = {value}/>
        </HStack>


    )
}
