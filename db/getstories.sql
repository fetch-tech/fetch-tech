SELECT u.username, u.profile_pic, a.image_url, a.url, a.description, a.title, a.author, a.source_name
FROM users_users uu
JOIN stories s
ON uu.user_to_follow_id = s.user_id
JOIN articles a
ON a.article_id = s.article_id
JOIN users u
ON u.user_id = uu.user_to_follow_id
WHERE uu.user_id = $1
AND DATE_PART('day', NOW() ::timestamp - s.created_at::timestamp) < 1;