/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {
    title: 'Tic Board'
  };
  res.render('tic-board/index', model);
};

module.exports = {
  getIndex,
};