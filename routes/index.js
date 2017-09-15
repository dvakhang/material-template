/**
 * Copyright © 2017 DOU Networks. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jun 22, 2017
 */
const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const dashboardController = require('../controllers/DashboardController');
const { ROOT, SIGN_IN, SIGN_OUT, DASHBOARD} =
    require('../configs/constants').ROUTES;

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('../configs/passport');
const RequireAuthenticated = passportConfig.isAuthenticated;

router.get(ROOT, authController.getSignIn);
router.route(SIGN_IN)
    .get(authController.getSignIn)
    .post(authController.postSignIn);
router.get(SIGN_OUT, authController.signOut);

// Dashboard
router.get(DASHBOARD, dashboardController.getIndex);

module.exports = router;
