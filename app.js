// # ==== Libraries & Notes ====
//
// npm install --save-dev electron
// npm install jquery --save

// # ==== Precursor Directives ====
//
const electron = require('electron');
const { app, BrowserWindow, ipcMain, Menu } = require('electron'); // ipc nin ne olduguna bak
//const path = require('path');
// const { menuTemplate } = require('./application/js/menu.js');
// const menu = Menu.buildFromTemplate(menuTemplate);

// # ==== Variables ====
//
var iconPath = '/application/resources/img/mindsculpt.png';

// # ==== Functions ====
//
// this function creates a variable for window size
function createWindow()
{
    //define a variable for window
    let win = new  BrowserWindow({
        width: 1024,
        height: 728,
        minWidth: 180, // set a min width!
        minHeight: 120, // and a min height!
        icon: __dirname + iconPath,
        backgroundColor: '#FFF',
        //frame: false, 
        //titleBarStyle: 'hidden',
        //transparent: true,
        webPreferences:{
            nodeIntegration: true
        }
    });

    // Load index.html of the app
    win.loadURL(`file://${__dirname}/application/html/index.html`);

    // Open the DevTools.
    //win.webContents.openDevTools({detached:true});
}


app.on('ready', () =>{
    // Menu.setApplicationMenu(menu);
    createWindow();
});

app.on('window-all-closed', () => {
    // controls if its a mac
    if(process.platform !== 'darwin' )
    {
        app.quit();
    }
});
