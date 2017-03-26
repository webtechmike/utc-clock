const electron = require('electron')
const path = require('path')
const moment = require('moment')
const { app, Menu, Tray }  = electron

app.on('ready', _ => {
    let d = moment()
    let display = moment.utc(d).format('ddd Do h:mm:ssa')

    const tray = new Tray(path.join('src', 'clock-w-16.png'))
    const contextMenu = Menu.buildFromTemplate([
        {
            label: `${setTimeout(_ => { display }, 1000) }`,
            click: _ => {
                console.log(updateDisplay())
                console.log(`${display}`)
            }
        }
    ])

    function updateDisplay() {
        return moment.utc(d).format('ddd Do h:mm:ssa')
    }

    tray.setContextMenu(contextMenu)
    tray.setToolTip('UTC Clock')
})
