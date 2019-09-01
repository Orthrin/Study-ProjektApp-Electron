// # ==== Precursor Directives ====
//
const electron = require('electron');
const { app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// # ==== Variables ====
//
var imgDirectory = '/images/';
var appDirectory = '/application/';

// # ==== Functions ====
//
// this function creates a variable for window size
function createWindow()
{
    //define a variable for window
    let win = new  BrowserWindow({
        width: 1000,
        height: 600,
        icon: path.join(__dirname, imgDirectory, 'mindsculpt.png'),
        frame: false, 
        //transparent: true,
        webPreferences:{
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, appDirectory, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools.
    //win.webContents.openDevTools()
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // controls if its a mac
    if(process.platform !== 'darwin' )
    {
        app.quit();
    }
});
