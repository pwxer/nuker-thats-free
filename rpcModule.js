const rpc = require('discord-rpc')
const rpcClient = new rpc.Client({
    transport: 'ipc'
})

class RPC {
    run() {
        rpcClient.on('ready', () => {
            rpcClient.request('SET_ACTIVITY', {
                pid: process.pid,
                activity: {
                    details: "Terminal Runs CordZ?",
                    state: 'youtube.com/c/TerminalNukeZ',
                    assets: {
                        large_image: "logo",
                        large_text: "@gxth.kaue"
                    },
                    buttons: [{
                        label: "Download",
                        url: "https://youtube.com/c/TerminalNukeZ"
                    }]
                }
            })
        })

        rpcClient.login({
            clientId: '998269764680044545'
        }).catch(() => {}).then(() => console.log('RPC connected!'))
    }
}

module.exports = RPC
