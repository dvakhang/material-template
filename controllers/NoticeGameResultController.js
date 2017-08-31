/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Notice Game Result'
  };
  res.render('notice-game-result/index', model);
};

module.exports = {
  getIndex,
};