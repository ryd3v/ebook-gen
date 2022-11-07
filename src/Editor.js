import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const Editor = () => {
  const code = '# hello';
  const options = {
    selectOnLineNumbers: true,
    minimap: {
      enabled: false,
    },
  };

  const editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor, monaco);
    editor.focus();
  };

  const onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  };

  return (
    <MonacoEditor
      language='markdown'
      theme='vs-dark'
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  );
};

export default Editor;
