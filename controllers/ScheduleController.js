/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Schedule'
  };
  res.render('schedule/index', model);
};

module.exports = {
  getIndex,
};
