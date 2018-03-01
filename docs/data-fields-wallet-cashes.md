---
id: data-fields-wallet-cashes
title: wallet_cashes
---

交易记录

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| value | bigint | 提现金额 |
| user_id | int | 提现用户 |
| type | varchar | 提现方式 |
| account | varchar | 提现账户 |
| status | tinyint | 状态：0 - 待审批，1 - 已审批，2 - 被拒绝 |
| remark | text | 备注 |
