import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'


const Code = ({ language, value }) => {
    return (
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {value}
        </SyntaxHighlighter>
    )
}

export default Code
