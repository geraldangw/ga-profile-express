var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:9000/";
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

describe(" GA Profile Express Server API", function() {
  describe("should return information json on get /information", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/information')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });

      it("returns a correct json format", function(done) {
        supertest(app)
          .get('/information')
          .expect({
                  name: 'Gerald Ang',
                  age: 33,
                  email: 'geraldang@gmail.com',
                  contactnum: '+6598800333',
                  dateofbirth: '29th July 1983',
                  image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/11666055_10153973280630639_4839601104696918395_n.jpg?oh=cdd71ed8cfc452b2631959250e50be65&oe=5813EA06',
                  facebook: 'https://www.facebook.com/gerald.ang.982',
                  linkedin: 'https://sg.linkedin.com/in/gerald-ang-8344463a',
                  emailme: 'mailto:geraldangw@gmail.com'
                }, done);
      });
  });
  describe("should return information json on get /projects", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/projects')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });

      it("returns a correct json format", function(done) {
        supertest(app)
          .get('/projects')
          .expect([
            {
              name: 'Tic Tac Toe',
              category: 'Game',
              description:'First Game I Built!',
              link: 'https://geraldangw.github.io/Tic-Tac-Toe-Lab/',
              image: 'https://scontent-sit4-1.xx.fbcdn.net/t31.0-8/13920415_10154898865960639_5229756314756360498_o.jpg'
            },
            {
              name: 'Drunk on Booleans',
              category: 'Game',
              description:'On to more JS user interactions!',
              link: 'https://geraldangw.github.io/unit1a-project-quiz/',
              image: 'https://scontent-sit4-1.xx.fbcdn.net/t31.0-8/13925607_10154898866025639_7730790895999287354_o.jpg'
            },
            {
              name: 'Run DMZ',
              category: 'Game',
              description:'My first Canvas game. Great learnings.',
              link: 'https://geraldangw.github.io/unit1b-project-game/',
              image: 'https://scontent-sit4-1.xx.fbcdn.net/t31.0-8/13938238_10154898866020639_6758609099757328789_o.jpg'
            },
            {
              name: 'Bulk',
              category: 'E-Commerce',
              description:'My first rails app. E-Commerce with a twist.',
              link: 'https://agile-anchorage-94149.herokuapp.com/',
              image: 'https://scontent-sit4-1.xx.fbcdn.net/t31.0-8/13925974_10154898865965639_394232039478127775_o.jpg'
            },
            {
              name: 'Yoda API',
              category: 'Novelty',
              description:'Testing APIs with a simple Yoda speak translator API.',
              link: 'https://benyang00.github.io/yodaspeak/',
              image: 'https://scontent-sit4-1.xx.fbcdn.net/t31.0-8/13958151_10154898865970639_7060651853364951691_o.jpg'
            }
          ], done);
      });
  });
});

describe("Express Server Front end", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      supertest(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done); // note that we're passing the done as parameter to the expect
    });
  });

  describe("GET /about", function() {
  it("returns status code 200", function(done) {
    request.get(base_url + 'about',
      function(err, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      }
    );
  });
});

describe("GET /contact", function() {
  it("returns status code 200", function(done) {
    request.get(base_url + 'contact',
      function(err, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      }
    );
  });
});

});
