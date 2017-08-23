/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const request = require('request-promise')

const getIndex = (req, res) => {
  const model = {
    title: 'Test Golf Game'
  };
  res.render('test-golf-game/index', model);
};

const getLevels = (req, res, next) => {
  const reqBody = {
    "username": req.body.username
  }
  console.log(reqBody);
  const reqOpts = {
    method: 'GET',
    uri: 'https://tranquil-dusk-71074.herokuapp.com/golfgame-api/getlevels',
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

const getUpdateLevels = (req, res, next) => {
  const reqBody = {
    "username": req.body.username
  }
  console.log(reqBody);
  const reqOpts = {
    method: 'POST',
    uri: 'https://tranquil-dusk-71074.herokuapp.com/golfgame-api/updatelevels',
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
const getPlayGame = (req, res, next) => {
  const reqBody = {
    "hole": req.body.hole,
    "username": req.body.username,
    "day": "Monday",
    "type": req.body.type
  }
  console.log(reqBody);
  const reqOpts = {
    method: 'POST',
    uri: 'https://tranquil-dusk-71074.herokuapp.com/golfgame-api/playgame',
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

module.exports = {
  getIndex, getLevels, getUpdateLevels, getPlayGame
};