/**
 * Copyright © 2017 DOU Networks. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jun 22, 2017
 */

const ENV = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test',
};

const PORT = 8080;
const TEST_PORT = 8000;

const ROUTES = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  SIGN_OUT: '/signout',
  FORGOT: '/forgot',
  ACCOUNT: '/account',
  SCHEDULE: '/schedule',
  WORK_RESULT: '/work-result',
  RANKING: '/ranking',
  HELP: '/help',
  COMMUNITY: '/community',
  QUICK_GUIDE: '/quick-guide',
  REWARD: '/reward',
  KEYWORD_SEARCH: '/keyword-search',
  TIC_BOARD: '/tic-board',
};

module.exports = {
  ENV,
  PORT,
  TEST_PORT,
  ROUTES,
}
