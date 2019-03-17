const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Meetup = mongoose.model('meetups');

module.exports= (app) => {

  app.get('/meetups', async (req, res) => {
    const meetups = await Meetup.find({});
      res.send(meetups);
  });

  app.post('/meetups', async (req, res) => {
    const { subject, time, place } = req.body;

    const meetup = new Meetup({
      subject,
      time,
      place,
      // _user: req.user.id
    });
    await meetup.save();
    res.send(meetup);
  });

  app.delete('/meetups/:id', requireLogin, async (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    Meetup.findByIdAndRemove(id).then((meetup) => {
      if (!meetup) {
        return res.status(404).send();
      }
      res.send({ meetup });
    }).catch((e) => {
      res.status(400).send();
    });
  });
}