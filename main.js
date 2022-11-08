const { app, BrowserWindow, Menu } = require('electron');
const menu = require('./menu');

Menu.setApplicationMenu(menu);

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
  });

  // and load the index.html of the app.
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  //   win.webContents.openDevTools()
}
app.on('ready', createWindow);
