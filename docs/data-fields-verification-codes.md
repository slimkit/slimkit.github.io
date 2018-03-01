---
id: data-fields-verification-codes
title: verification_codes
---

验证码记录

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| channel | varchar | 发送频道，例如 mail, sms |
| user_id | int | 回答者 |
| account | text | 发送账户 |
| code | varchar | 验证码 |
| state | tinyint | 状态 |
