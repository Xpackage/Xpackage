const { app , BrowserWindow} = require('electron');






let mainWindow

windowSize = {width : 800,height : 600}
app.on('ready',createWindow)

function createWindow() {
    mainWindow = new BrowserWindow(windowSize)

    mainWindow.loadFile('index.html')


    mainWindow.on('closed',() => {
        mainWindow = null
    })
}





app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    if(mainWindow == null){
        createWindow()
    }
})