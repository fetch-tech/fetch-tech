SELECT *
FROM bookmarks b
  JOIN articles a
  ON b.article_id = a.article_id
WHERE b.user_id = $1 in

