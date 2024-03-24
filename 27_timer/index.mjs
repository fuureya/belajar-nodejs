// callback
// setInterval(() => {
//     console.info(`start time at ${new Date()}`);
// }, 1000);

// promise
import timers from "timers/promises"

for await (const startTime of timers.setInterval(1000, new Date())) {
    console.info(`Start time at ${startTime}`);
}