const { configureEndpoints } = require('modena');
var matchesController = require('./controllers/matches-controller');

module.exports = configureEndpoints(router => {
	router.get('/', (req, res, next) => res.render('index'));
    router.get('/matches', matchesController.getAll);
});
