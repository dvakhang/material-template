/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Quick Guide'
  };
  res.render('quick-guide/index', model);
};

module.exports = {
  getIndex,
};