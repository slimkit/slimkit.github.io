---
id: data-fields-reports
title: reports
---

举报

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| target_user | int | 被举报用户 |
| user_id | int | 举报者 |
| subject | varchar | 举报标题 |
| reportable_id | int | 被举报资源id |
| reportable_type | varchar | 被举报的资源类型 |
| status | tinyint | 处理状态 0-待处理 1-已处理 2-已驳回 |
| reason | varchar | 举报理由 |
| mark | varchar | 处理标记 |
