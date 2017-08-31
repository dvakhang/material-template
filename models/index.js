const Sequelize = require('sequelize');
const path = require('path');

var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
}
process.env.DATABASE_URI = 'mysql://gamification:123789@10.0.14.199:3306/gamification-fwd';

const sequelize = new Sequelize(process.env.DATABASE_URI, opts);

const User = sequelize.import(path.join(__dirname, 'User.js'));
const GMF_CUMLT_FREQ_DISTR = sequelize.import(path.join(__dirname, 'GMF_CUMLT_FREQ_DISTR.js'));

const db = {};
db.User = User;
db.GMF_CUMLT_FREQ_DISTR = GMF_CUMLT_FREQ_DISTR;

db.sequelize = sequelize;

module.exports = db