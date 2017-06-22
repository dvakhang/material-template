/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Dashboard'
  };
  res.render('dashboard/index', model);
};

module.exports = {
  getIndex,
};
