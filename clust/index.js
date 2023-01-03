const cluster = require('node:cluster');
const http = require('node:http');
const { cpus } = require('node:os');
const process = require('node:process');

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  let arrWoker = [];
  let pidToPort = {};
  let worker, port;

  for (let i = 0; i < numCPUs - 1; i++) {
    port = 4000 + i;
    worker = cluster.fork({ port: port });
    arrWoker.push(worker);
    pidToPort[port] = worker.process.pid;
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} if (cluster.isWorker) {
  const { server } = require('../src/index.js');
  
  console.log(`Worker ${process.pid} started`);
}
