const electron = require('electron')
const {app, Menu, webContents} = require('electron')
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')


let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({width: 800, height: 600, frame:true, backgroundColor: '#201c1b', thickFrame: true})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/index.html'),
    protocol: 'file:',
    slashes: true
  }))

	mainWindow.webContents.openDevTools()


	let contents = mainWindow.webContents
	console.log("HElllllo" + contents)

	mainWindow.webContents.on('did-finish-load', function() {
		 	mainWindow.webContents.insertCSS('body{-webkit-app-region: drag;}')
		});

	mainWindow.setMinimumSize(350,500);


	mainWindow.setFullScreen(false);

	const template = [
	  {
	    label: 'Edit',
	    submenu: [
	      {role: 'undo'},
	      {role: 'redo'},
	      {type: 'separator'},
	      {role: 'cut'},
	      {role: 'copy'},
	      {role: 'paste'},
	    ]
	  },
	  {
	    role: 'window',
	    submenu: [
	      {role: 'minimize'},
	      {role: 'close'}
	    ]
	  },
	  {
	    role: 'help',
	    submenu: [
	      {
	        label: 'Learn More',
	        click () { require('electron').shell.openExternal('http://tane.us') }
	      }
	    ]
	  }
	]

	if (process.platform === 'darwin') {
	  template.unshift({
	    label: app.getName(),
	    submenu: [
	      {role: 'about'},
	      {role: 'quit'}
	    ]
	  })

	}

	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)

  mainWindow.on('closed', function () {

    mainWindow = null
  })
}

app.setAboutPanelOptions({applicationName: "Lemon Juice", applicationVersion: "1.0.0",credits: "POKEEEKEKE"})

app.on('ready', createWindow)


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
