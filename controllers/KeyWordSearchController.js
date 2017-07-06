/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Keyword Search'
  };
  res.render('keyword-search/index', model);
};

module.exports = {
  getIndex,
};