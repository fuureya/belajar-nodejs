import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream('32_console/console/application.log');

const log = new Console({
    stdout: logFile,
    stderr: logFile
});

log.info("halo dunia")
log.error("ups")