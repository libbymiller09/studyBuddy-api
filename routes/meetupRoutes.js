const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Meetup = mongoose.model('meetups');

module.exports= (app) => {

  app.get('/meetups', async (req, res) => {
    const meetups = await Meetup.find({});
      res.send(meetups);
  });

  // app.get('/meetups/new', (req, res) => {
  //   res.send('meetups');
  // })

  app.post('/meetups', requireLogin, async (req, res) => {
    const { subject, time, place } = req.body;

    const meetup = new Meetup({
      subject,
      time,
      place,
      _user: req.user.id
    });
    await meetup.save();
    res.send(meetup);
  });

  app.delete('/meetups', requireLogin, async (req, res) => {

  })
};
