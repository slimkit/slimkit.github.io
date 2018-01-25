---
id: api-v2-feeds-comment-pay
title: 设置评论收费
---

```
PATCH /feeds/:feed/comment-paid
```

## Input
| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| amount | Integer | 收费金额 |

#### Response

```
Status: 201 Created
```
```json
{
    "message": [
        "设置成功"
    ],
    "paid_node": 11
}
```
