```json

{
  "manifest_version": 3,
  "name": "Chrome Extension tutorial",
  "version": "1.0.0",
  "description": "Cool extension",

//   This is the icon that would show up on the extension page
  "icons": {
    "16": "icon16.png",
    "32": "icon32.png",
    "48": "icon32.png",
    "128": "icon32.png"
  },

    // This icons on the top right corner.
  "action": {
    "default_icon": {
      "16": "images/icon16.png",   
      "24": "images/icon24.png",   
      "32": "images/icon32.png"    
    },
    "default_title": "Click Me",
    "default_popup": "popup.html"  
  },
}


```