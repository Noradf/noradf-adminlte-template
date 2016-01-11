'use strict';

module.exports = function (config, assets) {

    assets.put(this, 'bower_css', 'bootstrap/dist/css/bootstrap.css', 1);
    assets.put(this, 'bower_css', 'font-awesome/css/font-awesome.css', 2);
    assets.put(this, 'bower_css', 'Ionicons/css/ionicons.css', 3);

    var skins = ['black', 'black-light', 'blue', 'blue-light', 'green', 'green-light', 'purple', 'purple-light', 'red', 'red-light', 'yellow', 'yellow-light'];
    if (!config.adminlte) {
        config.adminlte = {};
    }

    if (!config.adminlte.skin || skins.indexOf(config.adminlte.skin) === -1) {
        config.adminlte.skin = 'blue';
    }
};