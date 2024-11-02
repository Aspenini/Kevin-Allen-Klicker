// renderer.js
const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', () => {
      // Example interaction between front-end and main Electron process
      ipcRenderer.send('button-clicked', 'Hello from the renderer!');
    });
  }

  // Example: Listening for messages from the main process
  ipcRenderer.on('message-from-main', (event, message) => {
    console.log('Message from main process:', message);
  });
});
