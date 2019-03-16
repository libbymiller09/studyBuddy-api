const chai = require('chai');
const chaiHttp = require('chai-http');

const {app} = require('../server');

const should = chai.should();
chai.use(chaiHttp);

describe('AUTH routes', function() {

  it('should 302 on GET requests', function() {
    return chai.request(app)
      .get('/auth/google')
      .then(function(res) {
        res.should.have.status(302);
      });
  });

  it('should 302 on GET requests', function() {
    return chai.request(app)
      .get('/auth/google/callback')
      .then(function(res) {
        res.should.have.status(302);
      });
  });

  it('should 200 on GET requests', function() {
    return chai.request(app)
      .get('/api/logout')
      .then(function(res) {
        res.should.have.status(200);
      }); 
  });

  it('should 302 on GET requests', function() {
    return chai.request(app)
      .get('/api/user')
      .then(function(res) {
        res.should.have.status(200);
      }); 
  });
});