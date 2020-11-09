// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'mad_max',
//   password: '',
//   port: 5432,
// });


// const getUsers = (request, response) => {
//   console.log("hitting queries js")
//   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// module.exports = {
//   getUsers
// }