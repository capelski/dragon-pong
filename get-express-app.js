const express = require('express');
const { join } = require('path');
const matchesController = require('./controllers/matches-controller');

module.exports = () => {
	const app = express();
	app.use('/', express.static(join(__dirname, 'public')));
	app.use(
		'/dragon-pong',
		(req, res, next) => res.sendFile(join(__dirname, 'public', 'index.html'))
	);
    app.get('/matches', matchesController.getAll);
	return app;
};
