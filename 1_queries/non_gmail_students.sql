SELECT name,email,id,cohort_id
FROM  students
WHERE phone is NULL and
email NOT LIKE '%gmail.com%'
