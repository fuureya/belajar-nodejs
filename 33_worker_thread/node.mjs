import { threadId, Worker } from "worker_threads";

const worker1 = new Worker('./33_worker_thread/worker.mjs');
const worker2 = new Worker('./33_worker_thread/worker.mjs');

worker1.addListener("message", (message) => {
    console.info(`thread ${threadId} receive message : ${message}`);
})

worker2.addListener("message", (message) => {
    console.info(`thread ${threadId} receive message : ${message}`);
})


worker1.postMessage(10);
worker2.postMessage(20)