import React, { useState } from 'react';
import TextComponent from './Components/TOBECHANGED';
import add from './utils';
import printwidth from './content';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(event.target.value.toUpperCase());
  };
  
  const width = printwidth();

  return (
    <div className="w-64 h-32 p-4 space-y-4">
      {width}
      <TextComponent />
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="Input"
        value={input}
        onChange={handleInputChange}
      />
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="Output"
        value={output}
        readOnly
      />
    </div>
  );
}

export default App;