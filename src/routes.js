'use strict';

import express from 'express';
import logsCtrl from './logs/logs.controller.js'

const router = express.Router();

router.route('/log').get(logsCtrl.log);

module.exports = router;