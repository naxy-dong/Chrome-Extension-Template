chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getWindowSize") {
        sendResponse({ width: window.innerWidth, height: window.innerHeight });
    }
});


const messagesFromReactAppListener = (
    msg,
    sender,
    sendResponse) => {
   
    console.log('[content.js]. Message received', msg);
  
    const headlines = Array.from(document.getElementsByTagName<"h1">("h1"))
                        .map(h1 => h1.innerText);
  
     // Prepare the response object with information about the site
    const response = {
        title: document.title,
        headlines
    };
  
    sendResponse(response);
 }

 chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
