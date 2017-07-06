/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Reward'
  };
  res.render('reward/index', model);
};

module.exports = {
  getIndex,
};