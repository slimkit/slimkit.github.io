---
id: data-fields-conversations
title: conversations
---

用户反馈+系统通知

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| type | varchar | 会话类型 system 系统通知 feedback 用户反馈 |
| user_id | int | 用户 |
| to_user_id | int | 被发送用户 |
| content | text | 会话内容 |
| options | text | 给推送平台的额外参数 |
| system_mark | biging | 移动端存储标记 |
