SELECT article_id, comment_id, comment_text, profile_pic, username from comments  join users on users.user_id = comments.user_id where article_id=$1;