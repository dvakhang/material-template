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
const workResultController = require('../controllers/WorkResultController');
const rankingController = require('../controllers/RankingController');
const workHistoryController = require('../controllers/WorkHistoryController');
const communityController = require('../controllers/CommunityController');
const quickGuideController = require('../controllers/QuickGuideController');
const rewardController = require('../controllers/RewardController');
const keywordSearchController = require('../controllers/KeyWordSearchController');
const ticBoardController = require('../controllers/TicBoardController');
const { ROOT, SIGN_IN, SIGN_OUT, DASHBOARD, SCHEDULE, WORK_RESULT, RANKING, WORK_HISTORY, COMMUNITY, REWARD, KEYWORD_SEARCH, TIC_BOARD, QUICK_GUIDE } = require('../configs/constants').ROUTES;

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

//Work Result
router.get(WORK_RESULT, workResultController.getIndex);

//Ranking
router.get(RANKING, rankingController.getIndex);

//Work History
router.get(WORK_HISTORY, workHistoryController.getIndex);

//Community
router.get(COMMUNITY, communityController.getIndex);

//Reward
router.get(REWARD, rewardController.getIndex);

//Keyword Search
router.get(KEYWORD_SEARCH, keywordSearchController.getIndex);

//Tic Board
router.get(TIC_BOARD, ticBoardController.getIndex);

//Quick Guide
router.get(QUICK_GUIDE, quickGuideController.getIndex);

module.exports = router;
