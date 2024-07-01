import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeEditor.css";
import { useState } from "react";
const CodeEditor = () => {
//   const codeString = 'console.log("string");';
  const [code, setCode] = useState("");
  return (
    <>
      <div>
        <h1>Code Editor</h1>
      </div>
      <div className="code-container">
        <textarea
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="code-input"
        >
         
        </textarea> <SyntaxHighlighter
            language="javascript"
            style={dark}
            // style={{dark, fontSize:"50px"}}
            className="code-output"
          >
            {code}
          </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeEditor;
