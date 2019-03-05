const requireLogin = require('../middleware/requireLogin');

module.exports= (app) => {

  app.get('/map', requireLogin, (req, res) => {
    res.send('map page');
  });

}
