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

const PORT = 3030;
const TEST_PORT = 8002;

const ROUTES = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  SIGN_IN: '/auth/signin',
  SIGN_UP: '/signup',
  SIGN_OUT: '/signout',
  FORGOT: '/forgot',
  ACCOUNT: '/account'
};

module.exports = {
  ENV,
  PORT,
  TEST_PORT,
  ROUTES,
}
