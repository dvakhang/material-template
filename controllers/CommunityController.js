/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Community'
  };
  res.render('community/index', model);
};

module.exports = {
  getIndex,
};