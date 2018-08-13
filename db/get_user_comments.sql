SELECT *
FROM comments c
  JOIN articles a
  ON c.article_id = a.article_id
WHERE c.user_id = $1;