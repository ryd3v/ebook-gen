const { Menu, BrowserWindow, dialog } = require('electron');
const fs = require('fs');

function loadFile() {
  const window = BrowserWindow.getFocusedWindow();

  const options = {
    title: 'Choose a markdown file',
    filters: [{ name: 'Markdown files', extensions: ['md'] }],
  };

  dialog.showOpenDialog(window, options, (paths) => {
    if (paths && paths.length > 0) {
      const content = fs.readFileSync(paths[0]).toString();

      window.webContents.send('commands', {
        command: 'file.open',
        value: content,
      });
    }
  });
}

module.exports = Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CommandOrControl+O',
        click() {
          loadFile();
        },
      },
      {
        label: 'Save',
        accelerator: 'CommandOrControl+S',
        click() {
          BrowserWindow.getFocusedWindow().webContents.send('commands', {
            command: 'file.save',
          });
        },
      },
    ],
  },
]);
