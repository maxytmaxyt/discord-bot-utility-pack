const fs = require("fs");
const path = require("path");
const Logger = require("./logger");

module.exports = function loadEvents(client, dir = "./events") {
  const files = fs.readdirSync(path.join(process.cwd(), dir));

  for (const file of files) {
    if (!file.endsWith(".js")) continue;

    const event = require(path.join(process.cwd(), dir, file));

    if (!event.name || !event.run) {
      Logger.warn(`Event ${file} fehlt "name" oder "run".`);
      continue;
    }

    client.on(event.name, (...args) => event.run(client, ...args));

    Logger.success(`Event geladen: ${event.name}`);
  }
};
