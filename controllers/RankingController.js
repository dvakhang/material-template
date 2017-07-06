/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Ranking'
  };
  res.render('ranking/index', model);
};

module.exports = {
  getIndex,
};