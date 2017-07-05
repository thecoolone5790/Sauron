/**
 * Created by shawn on 2017. 7. 4..
 */

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('../views/v_index.html');
  });
  app.get('/about', function (req,res) {
    res.render('../views/v_about.html');
  });
};