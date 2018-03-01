---
id: data-fields-group-members
title: group_members
---

圈子成员

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| group_id | int | 圈子id |
| user_id | int | 用户id |
| audit | tinyint | 审核状态：0 - 待审核、1 - 通过 |
| role | varchar | 角色，member - administrator - 管理者、founder - 创建者 |
| disabled | tinyint | 是否禁用 |
