// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message) => ipcRenderer.send('send-message', message),
  onMessage: (callback) => ipcRenderer.on('message', (event, ...args) => callback(...args))
});
