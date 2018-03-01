---
id: data-fields-news
title: news
---

资讯

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| title | int | 文章标题 |
| storage | int | 缩略图 |
| content | longtext | 文章内容 |
| digg_count | int | 点赞统计 |
| from | varchar | 来源 |
| is_recommend | tinyint | 是否被推荐 |
| comment_count | int | 评论统计数 |
| subject | text | 副标题 |
| author | varchar | 作者 |
| likes_count | int | 点赞总数 |
| hits | int | 阅读统计 |
| audit_status | tinyint | 文章状态 0-正常 1-待审核 2-草稿 3-驳回 4-删除 5-退款中 |
| audit_count | tinyint | 投稿审核次数 |
| user_id | int | 用户id |
| cate_id | int | 分类id |
| contribute_amount | int | 投稿金额 |
| text_content | longtext | 纯文字内容 |
