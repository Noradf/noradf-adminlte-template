'use strict';

var path = require('path');

module.exports = function (app, config, assets, menu, adminlte) {

    app.get('/', function (req, res) {
        res.render(path.join(__dirname, '../views/index'), {
            assets: assets.get(),
            config: config,
            menu: menu,
            labels: adminlte.labels
        });
    });
};