const app = require('../server/server.js');

module.exports = (req, res) => {
    return app(req, res);
};
