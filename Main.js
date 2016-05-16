/*
    Initial author: (https://github.com/)Convery for Ayria.se
    License: LGPL 3.0
    Started: 2016-05-10
    Notes:
        The entrypoint for the desktop client.
        Needs to be rewritten by someone that actually knows JS.
*/

'use strict';

// Use electron as the base for the application.
const Electron = require('electron');
const Application = Electron.app;
var MainWindow = null;

// Application close.
Application.on('window-all-closed', MainwindowClose);
function MainwindowClose()
{
	// The node wiki says Mac processes may want to live.
	// Ask Sokie to verify this later.
	if(process.platform != 'darwin')
	{
		Application.quit();
	}
}

// Message-handler called on startup of a new instance.
function CommandlineMessage(Commandline, Directory)
{
    // Refocus our window if it's hidden.
    if (MainWindow)
    {
        if (MainWindow.isMinimized())
            MainWindow.restore();
        MainWindow.focus();
    }

    // TODO: Switch on commandline.
}
if (Application.makeSingleInstance(CommandlineMessage))
{
    MainformClose();
}

// Create the main window.
Application.on('ready', MainwindowInitialize);
function MainwindowInitialize()
{
	// Create the clients window.
    MainWindow = new Electron.BrowserWindow({ width: 1280, height: 720, minWidth: 300, minHeight: 240, frame: false, show: false });
    MainWindow.webContents.openDevTools();

	// Load the main window.
    MainWindow.loadURL('file://' + __dirname + '/main.html');
    MainWindow.webContents.on('did-finish-load', function ()
    {
        MainWindow.show();
        MainWindow.focus();
    });
}
