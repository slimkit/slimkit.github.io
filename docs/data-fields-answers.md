---
id: data-fields-answers
title: answers
---

问答的答案

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| question_id | int | 问题id |
| user_id | int | 回答者 |
| body | text | 答案内容 |
| anonymity | tinyint | 是否匿名; 0: 非匿名, 1: 匿名 |
| adoption | tinyint | 是否被采纳; 0: 未采纳, 1: 已采纳 |
| invited | tinyint | 是否被邀请回答; 0: 非邀请, 1: 被邀请 |
| comments_count | int | 答案的评论统计数 |
| rewards_amount | bigint | 被打赏总数 |
| rewarder_count | int | 打赏人数 |
| likes_count | int | 点赞总数 |
| views_count | int | 答案被查看总数 |
| text_body | text | 纯文字内容 |
