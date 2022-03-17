const express = require('express');
const { join } = require('path');
// const matchesController = require('./controllers/matches-controller');

module.exports = () => {
	const app = express();
	app.use('/dragon-pong', express.static(join(__dirname, 'docs')));
    // app.get('/api/matches', matchesController.getAll);
	return app;
};
