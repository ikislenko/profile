const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win,
    loadingScreen,
    windowParams = {
        width: 1000,
		height: 700,
		toolbar: false,
		// frame: false,
		// transparent: true,
        show: false
    },
    windowLParams = {
        width: 760,
		height: 550,
		toolbar: false,
		frame: false,
		transparent: true,
        show: false
    };

function createWindow () {
	win = new BrowserWindow(windowParams);

    // and load the index.html of the app.
    win.loadFile("./dist/index.html");
    // win.setProgressBar(-1); // hack: force icon refresh
    win.webContents.on('did-finish-load', () => {
		// setTimeout(()=>
		// {
		// 	win.show();
		// 	win.frame = true;
		// 	if (loadingScreen) {
		// 		let loadingScreenBounds = loadingScreen.getBounds();
		// 		win.setBounds(loadingScreenBounds);
		// 		loadingScreen.close();
		// 	}
		// }, 10000);
    });

    // Open the DevTools.
    // win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    })
}

function createLoadingScreen () {

	loadingScreen = new BrowserWindow(Object.assign(windowLParams, {parent: win}));
	loadingScreen.transparent = true;
	// loadingScreen.setMenu(false)
	// loadingScreen.setFrame(false);
    loadingScreen.loadFile('./dist/loding.html');
    loadingScreen.on('closed', () => loadingScreen = null);
    loadingScreen.webContents.on('did-finish-load', () => {
        loadingScreen.show();
    });
  }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    createLoadingScreen();
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.