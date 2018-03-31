const db = require('../db');

const getTodaysJobOpenings = ( req, res, next ) => {
  db.any(`select * from jobopening where createdat > CURRENT_DATE  + interval '0 hour'`)
    .then(data => {
        console.log('DATA:', data); // print data;
        if( data && data.length > 0 ) {
          res.send(`${data.length} job opening(s) were created today`);
        } else {
          res.send(`Sorry, No job openings were created today`);
        }
        
    })
    .catch(error => {
      return res.status(500).json({
        msg: "Internal Server error"
      });
    })
}

module.exports = { 
  'getTodaysJobOpenings' : getTodaysJobOpenings
}