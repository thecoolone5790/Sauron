/**
 * Created by shawn on 2017. 7. 11..
 */
module.exports = function (app, fs) {
  app.get('/', function (req, res) {
    res.render('index', {
      title: 'MY HOMEPAGE',
      length: 5
    })
  });
};