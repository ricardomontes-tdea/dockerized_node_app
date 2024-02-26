const express = require('express');
const request = require('request');

const app = express();

const servers = [
  'http://localhost:4000',
  'http://localhost:4000',
  'http://localhost:4001',
  'http://localhost:4001',
];

let currentServer = 0;

const handler = (req, res) => { 
  console.log('>>> Requested Server = ' + servers[currentServer]);
  
  req.pipe(request({ url: servers[currentServer] + req.url })).pipe(res);
  
  currentServer = (currentServer + 1) % servers.length;
};

const server = app.get('*', handler).post('*', handler);

server.listen(8080);