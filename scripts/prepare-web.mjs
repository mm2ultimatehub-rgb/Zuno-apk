import { mkdir, copyFile } from "node:fs/promises";

const files = ["index.html", "manifest.webmanifest", "icon.svg", "sw.js"];
await mkdir("www", { recursive: true });
for (const file of files) {
  await copyFile(file, `www/${file}`);
}
console.log("Prepared ZUNO web assets for Capacitor.");
