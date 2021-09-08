const readline = require('readline');
const {
    Webhook,
    MessageBuilder
} = require('discord-webhook-node');
const config = require("./config.json");



const webhook = new Webhook(config.webhook_url);
const webhook_avatar = config.httpavatar;
webhook.setUsername(config.webhook_username);
webhook.setAvatar(config.webhook_avatar);


function main() {
    return new Promise(function(resolve, reject) {
        let rl = readline.createInterface(process.stdin, process.stdout)
        console.log("Super Simple webhook executor written on NodeJS (C)\n")

        rl.setPrompt(`SendMessage@${config.webhook_username}: `);
        rl.prompt();
        rl.on('line', function(command, error) {
            if (command === "!exit" || command === "!quit" || command == '!q') {
                console.log('bye')
                process.exit(1)
            }
            if (command == "!clear") {
                console.clear();
            } else {
                if (!command) {
                    console.log(`please enter the message`)
                } else {
                    try {
                        webhook.send(command)
                    } catch (err) {
                        return console.log("error goblog");
                    }
                }
            }
            rl.prompt()

        })
    })
}

function run() {
    try {
        main()
    } catch (err) {
        return console.log("Something went wrong.");
    }
}
run()
