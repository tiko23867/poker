const electron = require('electron')
const {app, Menu, webContents, Tray} = require('electron')
const BrowserWindow = electron.BrowserWindow
const ElectronCookies = require('@exponent/electron-cookies');

// Asynchronous read


const path = require('path')
const url = require('url')

const assetsDir = path.join(__dirname, 'pic')

let mainWindow

//ElectronCookies.enable(file:'extra/file.txt');


function createWindow () {
	tray = new Tray((path.join(assetsDir, 'poker.png')));

  mainWindow = new BrowserWindow({width: 800, height: 600, frame:false, backgroundColor: '#201c1b'})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/index.html'),
    protocol: 'file:',
    slashes: true
  }))


	mainWindow.setMinimumSize(350,500);


	mainWindow.setFullScreen(false);

	mainWindow.webContents.openDevTools();


	mainWindow.webContents.on('did-finish-load', function(){
		mainWindow.webContents.insertCSS('body {-webkit-app-region: drag !important}')
	})

	var HAAA =
	`function myFunct()
	{
		alert("You've found the hidden message!");
	}`

	mainWindow.webContents.executeJavaScript(HAAA);


	tray.on('click', function(event) {
		mainWindow.webContents.executeJavaScript('flop()')
  	})


	const template = [
	  {
	    label: 'Poker Controller',
	    submenu: [
				{
						label: 'Flomp',
						click: () => {
								mainWindow.webContents.executeJavaScript('flop()');
						},
						accelerator: 'CmdOrCtrl+F',
				},
	      {type: 'separator'},
				{
						label: 'BET',
						click: () => {
								mainWindow.webContents.executeJavaScript('bet()');
						}
				},
	      {role: 'paste'},
	    ]
	  },
		{
			label: 'Rererestart',
			submenu: [
				{role: 'reload'}
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

app.on('ready', () => {
	createWindow();

})


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
