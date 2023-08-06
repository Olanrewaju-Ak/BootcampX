const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.splice(2);

pool
  .query(
    `SELECT students.id as id,students.name as name,cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohort_id = cohorts.id
		WHERE cohorts.name LIKE '%${args[0]}%'
LIMIT ${args[1]};
`
  )
  .then((res) => {
    console.log(res.rows);
    res.rows.forEach((user) =>
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort.`)
    );
  })
  .catch((err) => console.error('query error', err.stack));
