// # ==== Precursor Directives ====
//
const electron = require('electron');
const { app, BrowserWindow, ipcMain, Menu } = require('electron'); // ipc nin ne olduguna bak
const path = require('path');
const url = require('url');
//const { template } = require('application/js/menu')

// # ==== Variables ====
//
var imgDirectory = '/application/resources/img';
var appDirectory = '/application/';

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
        icon: path.join(__dirname, imgDirectory, 'mindsculpt.png'),
        backgroundColor: '#FFF',
        frame: false, 
        //titleBarStyle: 'hidden',
        //transparent: true,
        webPreferences:{
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, appDirectory, 'html/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // var menu = Menu.buildFromTemplate([
    //     {
    //         label: 'Menu',
    //         submenu: [
    //             {label:'Adjust Notification Value'},
    //             {label:'CoinMarketCap'},
    //             {label:'Exit'}
    //         ]
    //     }
    // ]);
    // Menu.setApplicationMenu(menu); 

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
