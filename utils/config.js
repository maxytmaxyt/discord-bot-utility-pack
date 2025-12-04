const fs = require("fs");
const path = require("path");

module.exports = function loadConfig(file = "config.json") {
  const filePath = path.join(process.cwd(), file);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Config file not found: ${file}`);
  }

  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};
