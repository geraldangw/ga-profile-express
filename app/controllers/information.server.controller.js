module.exports = {
  index: function(req, res) {
    res.json(
      {
        name: 'Gerald Ang',
        age: 33,
        email: 'geraldang@gmail.com',
        contactnum: '+6598800333',
        dateofbirth: '29th July 1983',
        image: 'https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/11666055_10153973280630639_4839601104696918395_n.jpg?oh=cdd71ed8cfc452b2631959250e50be65&oe=5813EA06',
        facebook: 'https://www.facebook.com/gerald.ang.982',
        linkedin: 'https://sg.linkedin.com/in/gerald-ang-8344463a',
        emailme: 'mailto:geraldangw@gmail.com'
      }
    );
  }
};
