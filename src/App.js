import React, { useState, useEffect } from 'react';
import TextComponent from './Components/TOBECHANGED';
// import add from './utils'; // Make sure you use it if it's imported

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  React.useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    console.log(chrome.tabs, chrome.tabs.query, chrome.tabs.sendMessage)
    chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      console.log(tabs[0].id)

      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: 'GET_DOM' },
        (response) => {
          console.log('Response from the content script:', response);
        });
    });
  });


  useEffect(() => {
    function getWindowSize() {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (tab && tab.id !== undefined) {
          chrome.tabs.sendMessage(tab.id, { action: "getWindowSize" }, (response) => {
            if (response) {
              console.log('Window size:', response);
              setWindowSize({ width: response.width, height: response.height });
            }
          });
        }
      });
    }
    getWindowSize();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setOutput(event.target.value.toUpperCase());
  };

  return (
    <div className="w-64 h-32 p-4 space-y-4">
      <div>Width: {windowSize.width}, Height: {windowSize.height}</div>
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
