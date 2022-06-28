import React from "react";
import { input } from '../redux/textSlice';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown'

function OutputBox() {
    const inputText = useSelector(input);
    return (
        <div className="outputBox">
            <div className="markdown">
                <ReactMarkdown>{inputText}</ReactMarkdown>
            </div>
        </div>
    );
}

export default OutputBox;
