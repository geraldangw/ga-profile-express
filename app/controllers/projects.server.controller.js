module.exports = {
  index: function(req, res) {
    res.json([
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
    ]);
  }
};
