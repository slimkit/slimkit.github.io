---
id: data-fields-topic-application
title: topic_application
---

申请创建问答话题

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| name | varchar | 申请创建话题名称 |
| user_id | int | 回答者 |
| description | varchar | 话题描述 |
| status | tinyint | 审核状态 0-未处理 1-已通过 2-被驳回 |
| expires_at | timestamp | 处理时间 |
| examiner | int | 审核用户 |
| remarks | varchar | 备注 |
