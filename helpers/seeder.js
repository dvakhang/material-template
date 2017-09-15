/**
 * Copyright © 2017 DOU Networks. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jun 22, 2017
 */

const _ = require('lodash');
const User = require('../models/user');

const createUsers = () => {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const admin = new User({
      email: 'dvakhang34@gmail.com',
      username: 'admin',
      password: '1',
      profile: {
        name: 'Administrator',
        gender: 'Male',
        phone: '+84979587892',
      },
      deleteFlag: false,
      activeFlag: true,
      admin: true,
      publish: false,
    });

    User.create([admin], (error) => {
      if (!error) {
        console.log('The first Users were created successfully!');
      }
    });
  });
};

module.exports = {
  createUsers,
};
