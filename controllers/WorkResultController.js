/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Work Result'
  };
  res.render('work-result/index', model);
};

module.exports = {
  getIndex,
};