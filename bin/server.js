'use strict'

/**
 * Module dependencies.
 */

import http from 'http';
import express from 'express';
import app from '../app';
import path from 'path';
import engines from 'consolidate';
import ejs from 'ejs';

// view engine setup
app.set('views', path.join(__dirname, '../public/views'));
app.use(express.static(path.join(__dirname, '../public/css')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

/**
  * Get port from environment and the environment stage.
 */
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';

/**
  * Create HTTP server.
 */
var server = http.createServer(app);

// start the server
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
