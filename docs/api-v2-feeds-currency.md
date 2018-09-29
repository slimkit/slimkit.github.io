---
id: api-v2-feeds-currency
title: 积分部分新增接口
---

- [删除动态](#删除动态)
- [申请动态置顶](#申请动态置顶)
- [申请动态评论置顶](#申请动态评论置顶)
- [通过评论置顶](#通过评论置顶)
- [拒绝评论置顶](#拒绝评论置顶)

## 删除动态

```
DELETE /feeds/:feed/currency
```

#### Response

```
Status: 204 No Content
```

## 申请动态置顶

```
POST /feeds/:feed/currency-pinneds
```

#### Input

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| amount | Integer | 必须，置顶总价格，积分。 |
| day | Integer | 必须，置顶天数。|
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

#### Response

```
Status: 201 Created
```
```json
{
    "message": [
        "申请成功"
    ]
}
```

## 申请动态评论置顶

```
POST /feeds/:feed/comments/:comment/currency-pinneds
```

#### Input

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| amount | Integer | 必须，置顶总价格，积分。 |
| day | Integer | 必须，置顶天数。|
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

#### Response

```
Status: 201 Created
```
```json
{
    "message": [
        "申请成功"
    ]
}
```

## 通过评论置顶

```
PATCH /feeds/:feed/comments/:comment/currency-pinneds/:pinned
```

#### Response

```
Status: 201 Created
```
```json
{
    "message": [
        "置顶成功"
    ]
}
```

## 拒绝评论置顶

```
DELETE /user/feed-comment-currency-pinneds/:pinned
```

#### Response

```
Status: 204 No Centent
```
