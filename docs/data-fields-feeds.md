---
id: data-fields-feeds
title: feeds
---

动态

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| feed_from | int | 问题id |
| user_id | tinyint | 动态来源 1:pc 2:h5 3:ios 4:android 5:其他 |
| feed_content | text | 动态内容 |
| like_count | int | 点赞统计 |
| feed_view_count | int | 阅读统计 |
| feed_comment_count | int | 评论统计 |
| feed_longtitude | varchar | 经度 |
| feed_latitude | bigint | 纬度 |
| feed_geohash | varchar | GEO |
| audit_status | tinyint | 审核状态 |
| feed_mark | bigint | 移动端唯一标记 |
| text_body | text | 纯文字内容 |
