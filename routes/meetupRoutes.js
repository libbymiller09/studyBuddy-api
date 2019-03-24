const _ = require('lodash');
const mongoose = require('mongoose');
const ObjectId = require('mongodb');
const requireLogin = require('../middleware/requireLogin');

const Meetup = mongoose.model('meetups');

module.exports= (app) => {

  app.get('/api/meetups', async (req, res) => {
    const meetups = await Meetup.find({});
      res.send(meetups);
  });

  app.get('/api/meetups/:id', async (req, res) => {
    let id = req.params.id;
    const meetups = await Meetup.findOne({id});
    console.log(id);
      res.send(meetups);
  })

  app.post('/api/meetups', async (req, res) => {
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

  app.delete('/api/meetups/:id', async (req, res) => {
    let id = req.params.id;
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