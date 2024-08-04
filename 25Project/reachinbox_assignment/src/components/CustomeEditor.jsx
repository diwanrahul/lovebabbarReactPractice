import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css'; // Import default Draft.js styling

const CustomEditor = ({ onSave }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showVariables, setShowVariables] = useState(false);

  const handleChange = (state) => {
    setEditorState(state);
  };

  const handleSave = () => {
    // Convert content to raw JSON and pass it to the parent
    const content = editorState.getCurrentContent();
    const rawContent = JSON.stringify(content.toJS());
    onSave(rawContent); // Pass content to parent
  };

  const handleVariables = () => {
    setShowVariables(!showVariables);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onTab = (e) => {
    // Handle tab key for indentation
    const maxDepth = 4;
    const newState = RichUtils.onTab(e, editorState, maxDepth);
    if (newState !== editorState) {
      setEditorState(newState);
    }
  };

  return (
    <div className="custom-editor">
      <div className="toolbar">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleVariables}>Variables</button>
      </div>
      <div className="editor-content">
        <Editor
          editorState={editorState}
          onChange={handleChange}
          handleKeyCommand={handleKeyCommand}
          onTab={onTab}
        />
        {showVariables && <div className="variables-panel">Variables Panel</div>}
      </div>
    </div>
  );
};

export default CustomEditor;
