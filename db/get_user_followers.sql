SELECT *
FROM users_users uu
  JOIN users u
  ON uu.user_id = u.user_id
WHERE uu.user_to_follow_id = $1;