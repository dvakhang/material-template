/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  if (req.user) {
    const model = {
      title: 'Notice Hole Result'
    };
    res.render('notice-hole-result/index', model);
  } else {
    res.render('home/index', {
      title: 'Sign In'
    });
  }
};

module.exports = {
  getIndex,
};