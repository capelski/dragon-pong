var matchesData = require('./matches.json');

const getAll = (req, res, next) => res.json(matchesData);

module.exports = {
    getAll
};
