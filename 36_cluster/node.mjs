import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.addListener('exit', (worker) => {
        console.info(`worker ${worker.id} is exited`);
    })
}