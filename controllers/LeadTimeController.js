/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const _ = require('lodash');
const request = require('request-promise');
//const Process = require('../models/process');
//const mongoose = require('mongoose');

const getIndex = (req, res) => {
    const model = {
        title: 'Lead Time'
    };
    res.render('lead-time/index', model);
};

const getProcess = (req, res) => {
    const reqBody = {
    }
    const reqOpts = {
        method: 'GET',
        uri: 'http://10.0.14.186:5000/golfgame-api/work-history',
        body: reqBody,
        json: true // Automatically stringifies the body to JSON 
    }
    request(reqOpts).then((response) => {
        res.status(200).json(response)
    })
        .catch((error) => {
            console.log(`error: `, error)
            next(error)
        })
}

// const addProcess = (req, res, next) => {
//     let lengthProcess = Object.keys(req.body.paramValue).length;
//     if (lengthProcess > 0) {
//         mongoose.model('work_history').count((err, count) => {
//             if (count > 0) {
//                 res.send('Process type: ' + count)
//             } else {
//                 const process = [];
//                 req.body.paramValue.forEach(function (element) {
//                     process.push({ processName: element.processName, leadTime: element.leadTime, stDt: element.stDt, endDt: element.endDt });
//                 }, this);
//                 mongoose.model('work_history').create(process, (err, doc) => {
//                     if (err) res.json(err);
//                     else res.send("Successfully");
//                 });
//             }
//         });
//     }
// }

module.exports = {
    getIndex, getProcess
};