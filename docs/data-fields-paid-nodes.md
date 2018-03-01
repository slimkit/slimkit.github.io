---
id: data-fields-paid-nodes
title: paid_nodes
---

付费节点

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| channel | varchar | 付费频道 |
| raw | varchar | 付费原始信息 |
| subject | varchar | 付费主题 |
| body | varchar | 付费内容详情 |
| amount | bigint | 付费金额 |
| user_id | int | 用户ID，主要用于排除付费用户。 |
| extra | text | 拓展信息 |
