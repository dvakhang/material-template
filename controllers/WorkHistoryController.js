/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Work History'
  };
  res.render('work-history/index', model);
};

module.exports = {
  getIndex,
};