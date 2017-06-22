/**
 * Copyright © 2017 DOU Networks. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jun 22, 2017
 */
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');
const authController = require('../controllers/AuthController');
const dashboardController = require('../controllers/DashboardController');
const scheduleController = require('../controllers/ScheduleController');
const { ROOT, SIGN_IN, SIGN_OUT, DASHBOARD, SCHEDULE, WORK_RESULT } = require('../configs/constants').ROUTES;

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('../configs/passport');
const RequireAuthenticated = passportConfig.isAuthenticated;

router.get(ROOT, homeController.getIndex);

router.get(SIGN_IN, authController.getSignIn);
router.post(SIGN_IN, authController.postSignIn);
router.get(SIGN_OUT, authController.signOut);

// Dashboard
router.get(DASHBOARD, dashboardController.getIndex);

// Schedule
router.get(SCHEDULE, scheduleController.getIndex);

// Work Result (Need to implement... After then remove this text)
router.get(WORK_RESULT, scheduleController.getIndex);

module.exports = router;
