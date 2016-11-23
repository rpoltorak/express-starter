'use strict';

const logsController = {
    log
};

function log(request, response) {
    response.send('test');
}

module.exports = logsController;