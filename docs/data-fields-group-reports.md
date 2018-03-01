---
id: data-fields-group-reports
title: group_reports
---

圈子举报

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| target_id | int | 被举报用户 |
| user_id | int | 举报用户 |
| group_id | int | 所属圈子 |
| resource_id | int | 被举报的资源id|
| content | text | 举报内容 |
| type | varchar | 举报类型：post or comment |
| status | tinyint | 是否被处理; 0-未处理 1-已处理 2-被驳回 |
| cause | varchar | 驳回原因 |
| handler | int | 审核处理人 |
