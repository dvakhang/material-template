/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  if (req.user) {
    const model = {
      title: 'Notice Game Result'
    };
    res.render('notice-game-result/index', model);
  } else {
    res.render('home/index', {
      title: 'Sign In'
    });
  }
};

module.exports = {
  getIndex,
};