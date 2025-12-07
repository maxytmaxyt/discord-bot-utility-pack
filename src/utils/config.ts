import fs from "fs";
import path from "path";

export default function loadConfig(file = "config.json") {
  const filePath = path.join(process.cwd(), file);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Config file not found: ${file}`);
  }

  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data) as Record<string, any>;
}
