
const { BrowserWindow, app } = require('electron')

function createWindow(){
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // load the file
    win.loadFile('index.html') 

    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)



// aa.on(String, ()=> { if(process.platform !== 'darwin'){ app.quit() } })