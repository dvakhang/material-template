/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const _ = require('lodash');
const request = require('request-promise');
const Process = require('../models/process');
const mongoose = require('mongoose');

const getIndex = (req, res) => {
    const model = {
        title: 'Process Type'
    };
    res.render('process-type/index', model);
};

const getProcess = (req, res) => {
    mongoose
        .model('process')
        .find((err, process) => {
            res.send(process);
        });
}

const addProcess = (req, res, next) => {
    let lengthProcess = Object.keys(req.body.paramValue).length;
    if (lengthProcess > 0) {
        mongoose.model('process').count((err, count) => {
            if (count > 0) {
                res.send('Process type: ' + count)
            } else {
                const process = [];
                req.body.paramValue.forEach(function (element) {
                    process.push({ processName: element.processName, leadTime: element.leadTime, stDt: element.stDt, endDt: element.endDt });
                }, this);
                mongoose.model('process').create(process, (err, doc) => {
                    if (err) res.json(err);
                    else res.send("Successfully");
                });
            }
        });
    }
}

module.exports = {
    getIndex, getProcess, addProcess
};