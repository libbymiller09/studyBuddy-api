const requireLogin = require('../middleware/requireLogin');

module.exports= (app) => {

  //add in requirelogin bit after testing
  app.get('/map', (req, res) => {
    res.send('map page');
  });

}
