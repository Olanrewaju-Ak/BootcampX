SELECT assignments.day as day,COUNT(assignments) as number_of_assignments, SUM(assignments.duration) as duration
FROM assignments
GROUP BY day
ORDER BY assignments.day;