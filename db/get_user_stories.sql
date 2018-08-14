SELECT *
FROM stories s
  JOIN articles a
  ON s.article_id = a.article_id
WHERE s.user_id = $1;