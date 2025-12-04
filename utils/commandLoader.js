const fs = require("fs");
const path = require("path");
const Logger = require("./logger");

module.exports = function loadCommands(client, dir = "./commands") {
  const files = fs.readdirSync(path.join(process.cwd(), dir));

  for (const file of files) {
    if (!file.endsWith(".js")) continue;

    const cmd = require(path.join(process.cwd(), dir, file));

    if (!cmd.data || !cmd.run) {
      Logger.warn(`Command ${file} fehlt "data" oder "run".`);
      continue;
    }

    client.commands.set(cmd.data.name, cmd);
    Logger.success(`Command geladen: ${cmd.data.name}`);
  }
};
