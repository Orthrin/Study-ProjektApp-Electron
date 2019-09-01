const { remote, ipcRenderer } = require('electron');
const currentWindow = remote.getCurrentWindow();

document.getElementById('minimize').addEventListener('click', () => {
    currentWindow.minimize()
})

document.getElementById('maximize').addEventListener('click', () => {
    if(currentWindow.isMaximized())
    {
        currentWindow.unmaximize();
    }
    else
    {
        currentWindow.maximize();
    }
})

document.getElementById('close').addEventListener('click', () => {
    remote.app.quit()
})




// const $ = require('jquery');
// const{ remote } = require('electron');

// var win = remote.getCurrentWindow();

// $('#minimize').click(function(){
//     win.minimize();
// });

// $('#maximize').click(function(){
//     if(!win.isMaximized()){
//         win.maximize();
//     }else{
//         win.unmaximize();
//     }
// });

// $('#close').click(function(){
//     win.close();
// });