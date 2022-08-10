const config = require("./config.json")
let id = config.appID
const client = require('discord-rich-presence')(id);
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Print text:", function (extend) {
client.updatePresence({
    state : extend,
    largeImageKey: "pornhub",
    istance: true,
});
console.log("Presence started!");
}); 