SELECT COUNT(*)
FROM users_users
WHERE user_to_follow_id = $1;