const mongoose = require('mongoose');


const getIndex = (req, res) => {
    const model = {
        title: 'Cumulative'
    };
    res.render('cumulative/index', model);
};

const getCumulative = (req, res) => {
    mongoose
        .model('process')
        .find((err, process) => {
            res.send(getAlgorithm(process));
        });
}

const getAlgorithm = (processList) => {
    const hashObj = {}
    processList.forEach((itm) => {
        if (!!hashObj[itm.processName]) {
            if (hashObj[itm.processName].leadTimes) {
                const len = hashObj[itm.processName].leadTimes.length;
                // const lastItm = hashObj[itm.processName].leadTimes[len - 1]
                if (hashObj[itm.processName].max <= itm.leadTime) {
                    hashObj[itm.processName].max = itm.leadTime
                    hashObj[itm.processName].maxCeil = ceil05(hashObj[itm.processName].max)
                }

                if (hashObj[itm.processName].min >= itm.leadTime) {
                    hashObj[itm.processName].min = itm.leadTime
                    hashObj[itm.processName].minFloor = Math.floor(hashObj[itm.processName].min)
                }

                hashObj[itm.processName].leadTimes.push(itm.leadTime)
            } else {
                hashObj[itm.processName].leadTimes = [itm.leadTime]
                hashObj[itm.processName].max = itm.leadTime
                hashObj[itm.processName].min = itm.leadTime
                hashObj[itm.processName].minFloor = Math.floor(hashObj[itm.processName].min)
                hashObj[itm.processName].maxCeil = ceil05(hashObj[itm.processName].max)
            }
        } else {
            hashObj[itm.processName] = {
                leadTimes: [itm.leadTime],
                max: itm.leadTime,
                min: itm.leadTime,
                maxCeil: ceil05(itm.leadTime),
                minFloor: Math.floor(itm.leadTime)
            }
        }

    })
    const resArr = []
    Object.keys(hashObj).forEach(k => {
        const max = hashObj[k].maxCeil
        const min = hashObj[k].minFloor
        let temp = 0;
        let sumLeadTime = hashObj[k].leadTimes.length;
        console.log(k + " is: " + sumLeadTime);
        for (let i = min; i < max; i += 0.5) {
            temp = temp + countIf(hashObj[k].leadTimes, { lowerBound: i, upperBound: i + 0.5 });
            let countfre = countIf(hashObj[k].leadTimes, { lowerBound: i, upperBound: i + 0.5 });
            let percen = Math.round(temp * 100 / sumLeadTime * 100) / 100;
            resArr.push({
                processName: k,
                lowerBound: i,
                upperBound: i + 0.5,
                frequency: countIf(hashObj[k].leadTimes, { lowerBound: i, upperBound: i + 0.5 }),
                cumuFrequency: temp,
                percentage: percen,
                level: setLevel(percen)
            })
        }
    })
    saveCumulative(resArr);
    return resArr;
}

/**
 * 
 * @param {*} arr [list of number]
 * @param {*} obj {lowerBound, upperBound}
 */
const countIf = (arr, obj) => {
    let count = 0
    arr.forEach(itm => {
        if (obj.lowerBound <= itm && obj.upperBound > itm) {
            count += 1
        }
    })
    return count
}

const ceil05 = (num) => {
    if (num - Math.floor(num) > 0.5) {
        return Math.ceil(num)
    } else if (num - Math.floor(num) == 0) {
        return num
    } else {
        return Math.floor(num) + 0.5
    }
}

const setLevel = (percen) => {
    switch (true) {
        case (percen > 0 && percen <= 10):
            return 1;
            break;
        case (percen > 10 && percen <= 20):
            return 2;
            break;
        case (percen > 20 && percen <= 30):
            return 3;
            break;
        case (percen > 30 && percen <= 40):
            return 4;
            break;
        case (percen > 40 && percen <= 50):
            return 5;
            break;
        case (percen > 50 && percen <= 60):
            return 6;
            break;
        case (percen > 60 && percen <= 70):
            return 7;
            break;
        case (percen > 70 && percen <= 80):
            return 8;
            break;
        case (percen > 80 && percen <= 90):
            return 9;
            break;
        case (percen > 90 && percen <= 100):
            return 10;
            break;
        default:
            return 0;
            break;
    }
}

const saveCumulative = (lstData) => {
    mongoose.model('cumulative').remove((err, result) => {
        return result;
    })
    mongoose.model('cumulative').create(lstData, (err, result) => {
        return result;
    })
}

module.exports = {
    getCumulative, getIndex
};