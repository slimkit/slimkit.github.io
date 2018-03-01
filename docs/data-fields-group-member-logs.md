---
id: data-fields-group-member-logs
title: group_member_logs
---

加入圈子记录

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| group_id | int | 圈子id |
| user_id | int | 用户 |
| member_id | int | 圈子成员ID |
| status | tinyint | 审核状态：0 - 待审核、1 - 通过、2 - 拒绝 |
| auditer | int | 审核人 |
| audit_at | timestamp | 审核时间 |
