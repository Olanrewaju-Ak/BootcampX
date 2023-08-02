SELECT cohorts.name as cohort, SUM(assistance_requests.completed_at - assistance_requests.started_at) as total_duration
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohort
ORDER BY total_duration;