SELECT day, COUNT(*) as total_assignments
FROM assignments
GROUP BY assignments.day
ORDER BY day;