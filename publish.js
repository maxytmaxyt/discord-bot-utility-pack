#!/usr/bin/env node
const { execSync } = require("child_process");

try {
  console.log("🔹 Prüfe Node.js Version...");
  execSync("node -v", { stdio: "inherit" });

  console.log("🔹 Prüfe NPM Login...");
  execSync("npm whoami", { stdio: "inherit" });

  console.log("🔹 Version hochsetzen (Patch)...");
  execSync("npm version patch", { stdio: "inherit" });

  console.log("🔹 NPM Publish...");
  execSync("npm publish --access public", { stdio: "inherit" });

  console.log("✅ Publish erfolgreich!");
} catch (err) {
  console.error("❌ Fehler beim Publish:", err.message);
  process.exit(1);
}
