// # Precursor Directives
//
const electron = require('electron');
const { app, BrowserWindow, Tray, ipcMain, Menu } = require('electron'); // ipc nin ne olduguna bak

const path = require('path');
const url = require('url');
const defaultProps = { width: 500, height: 800, show: false };
// const { menuTemplate } = require('./application/js/menu.js');
// const menu = Menu.buildFromTemplate(menuTemplate);

// # Variables
//
var iconPath = 'application/resources/img/mindsculpt.png';
var iconPath2 = 'application/resources/img/logo.png';
let appIcon = null;
let win = null;

// # Tray Menus
//
let contextMenu = Menu.buildFromTemplate([
    {
        label: 'item1',
        type: 'radio'
    },
    {
        label: 'item2',
        submenu: [
            { label: 'submenu1'},
            { label: 'submenu2'}
        ]
    }
]);


// # Functions
//
// this function creates a variable for window size
function createWindow()
{
    //define a variable for window
    let mainWindow = new BrowserWindow({
        width: 1024,
        height: 720,
        minWidth: 180, // set a min width!
        minHeight: 120, // and a min height!
        icon: __dirname + iconPath,
        backgroundColor: '#FFF',
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load index.html of the app
    mainWindow.loadURL(`file://${__dirname}/application/html/index.html`);

    // Open the DevTools.
    mainWindow.webContents.openDevTools({ detached: true });
}


app.on('ready', () =>
{
    // Menu.setApplicationMenu(menu);
    createWindow();
    appIcon = new Tray(iconPath2);
    appIcon.setToolTip('Electron Application Test Tray');
    appIcon.setContextMenu(contextMenu);
});

app.on('window-all-closed', () =>
{
    // controls if its a mac
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});
