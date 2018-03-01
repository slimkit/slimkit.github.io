---
id: data-fields-group-pinneds
title: group_pinneds
---

帖子置顶申请

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| channel | varchar | 频道 |
| raw | int | 所属资源id，当置顶对象为评论时，该值为帖子id |
| target | text | 目标id |
| user_id | int | 用户 |
| target_user | int | 目标用户 |
| amount | int | 金额```分``` |
| day | int | 固定期限,单位:天 |
| expires_at | timestamp | 置顶到期时间 |
| status | tinyint | 处理状态 0-待审核 1-已通过 2-已拒绝 |
