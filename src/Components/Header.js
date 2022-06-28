import React, { useState } from "react";
import { setTextState } from '../redux/textSlice';
import { useDispatch } from 'react-redux';
function Header() {
  const dispatch = useDispatch();
  const [click,setClick]=useState(false)
  const helpText =`# Heading

# Sub-heading

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

* apples
* oranges
* pears

Numbered list:

  1. ayaykkabı
  2. pastel boya
  3. makas

The rain---not the reign---in
Spain.

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*
  
`
  const getHelper = (inp) => {
    dispatch(setTextState(inp));
    setClick(!click)
  }
  return (
    <header>
      <h1>Markdown Prewiew</h1>
      <button className="helper" onClick={(e) => click?getHelper(''):getHelper(helpText)}>?</button>
    </header>
  );
}

export default Header;
