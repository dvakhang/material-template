/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Notice Hole Result'
  };
  res.render('notice-hole-result/index', model);
};

module.exports = {
  getIndex,
};