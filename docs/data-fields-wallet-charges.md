---
id: data-fields-wallet-charges
title: wallet_charges
---

交易记录

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| channel | varchar | 支付频道，参考 Ping++，增加 user 选项，表示站内用户凭据 |
| user_id | varchar | 关联用户，可不存在，例如直接支付方式等。存在便于按照用户检索。 |
| account | text | 交易账户，减项为目标账户，增项为来源账户，当 type 为 user 时，此处是用户ID |
| charge_id | varchar | 凭据id, 来自 Ping ++  |
| action | tinyint | 类型：1 - 增加，0 - 减少 |
| amount | bigint | 总额 |
| currency | varchar | 货币类型 |
| subject | varchar | 订单标题 |
| body | text | 订单详情 |
| transaction_no | varchar | 平台记录ID |
| status | tinyint | 状态：0 - 等待, 1 - 成功, 2 - 失败 |
