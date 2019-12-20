const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
const accesToken = null;

let win;

function createWindow(){
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    center: true,
   resizable: true,
//   show: false,
    frame: false,
   titleBarStyle: 'hidden',
   });

   win.setMenu(null);

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'login.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}


app.on('ready', createWindow);
