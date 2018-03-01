---
id: data-fields-questions
title: questions
---

问题

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| anonymity | tinyint | 是否匿名发布 |
| user_id | int | 回答者 |
| body | text | 问题详情 |
| subject | varchar | 问题主题 |
| automaticity | tinyint | 回答是否自动入帐 |
| amount | int | 悬赏总额，如果为 0，则不走账务流程。 |
| look | tinyint | 是否围观 |
| excellent | tinyint | 是否精华 |
| status | tinyint | 是否已解决，0 - 未解决，1 - 已解决， 2 - 问题关闭|
| comments_count | int | 评论统计数 |
| answers_count | int | 回答量 |
| watchers_count| int | 关注者统计 |
| likes_count | int | 点赞总数 |
| views_count | int | 答案被查看总数 |
| text_body | text | 纯文字内容 |
