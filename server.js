'use strict';

const express = require('express');

// Constants
const PORT = 8033;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('newbdez33\n');
});

app.get('/eos', async (req, res) => {
	const Utils = require('./utils');
	var ut = new Utils();
	const info = await ut.binanceEOS()
	res.send(info);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);