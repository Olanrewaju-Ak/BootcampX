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
    `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teacher;
`,
    [args[0]]
  )
  .then((res) => {
    console.log(res.rows);
    res.rows.forEach((user) => console.log(`${user.cohort}: ${user.teacher} `));
  })
  .catch((err) => console.error('query error', err.stack));
