const fs = require("fs");
const readline = require("readline");

const COLORS = Object.freeze({
    RED: "\x1b[31m",
    GREEN: "\x1b[32m",
    YELLOW: "\x1b[33m",
    WHITE: "\x1b[0m",
});

/**
  * @param {string} msg
  * @param {keyof typeof COLORS} color
  */
function prettyLog(msg, color) {
  console.log(COLORS[color || "WHITE"] + "%s" + COLORS.WHITE, msg);
}

const args = process.argv.slice(2);
const confirm = args.includes("--yes") || args.includes("-y");
const targets = args.filter((arg) => arg !== "--yes" && arg !== "-y");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function removeTargetPaths() {
  if (targets.length === 0) {
    prettyLog("No file paths provided. Usage:");
    prettyLog("  node remove.js [-y | --yes] <file1> <file2> ...");
    process.exit(1);
  }

  for (const target of targets) {
    if (!fs.existsSync(target)) {
      prettyLog(`Invalid path: ${target}`, "RED");
      continue;
    }

    let shouldRemove = confirm;
    if (!confirm) {
      const answer = await new Promise((resolve) => {
        rl.question(`Remove ${target}: [y/N] `, resolve);
      });
      shouldRemove = answer.trim().toLowerCase() === "y";
    }

    if (!shouldRemove) {
      prettyLog(`Skipping: ${target}`, "YELLOW");
      continue;
    }

    try {
      fs.rmSync(target, { recursive: true });
      prettyLog(`Removed ${target}`, "GREEN");
    } catch (err) {
      prettyLog(`Error while removing ${target}: ${err}`, "RED");
    }
  }

  rl.close();
};

removeTargetPaths();
