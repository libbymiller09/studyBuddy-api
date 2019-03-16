const chai = require('chai');
const chaiHttp = require('chai-http');

const {app} = require('../server');

const should = chai.should();
chai.use(chaiHttp);

describe('Meetup routes', function() {

  it('should 200 on GET requests', function() {
    return chai.request(app)
      .get('/meetups')
      .then(function(res) {
        res.should.have.status(200);
      });
  });

  it('should post a new meetup', function() {
    return chai.request(app)
      .post('./meetups')
      .then(function(res) {
        res.should.have.status(200);
      });
  });

  it('should delete a meetup', function() {
    return chai.request(app)
      .delete('./meetups')
      .then(function(res) {
        res.should.have.status(200);
      });
  });
});