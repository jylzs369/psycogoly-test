/* import Koa from 'koa';
import Router from '@koa/router';
import koaStatic from 'koa-static';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Index from '../src/index';

const app = new Koa();
const router = new Router();

app.use(
  koaStatic(path.join(__dirname, '../build', 'static'), {
    index: 'root'
  }));

router.get('/', async (ctx) => {
  const html = fs.readFileSync(path.join(__dirname, '../build', 'index.html'), 'utf-8').toString();
  const context = {}
  const view = renderToString(
    <StaticRouter location={ctx.request.url} context={context}>
      <Index />
    </StaticRouter>
  );
  ctx.response.type = 'html';
  ctx.response.body = html.replace('{{root}}', view);
});

app.use(router.routes()); */

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(3001);
console.log('server is running on port 3001')
