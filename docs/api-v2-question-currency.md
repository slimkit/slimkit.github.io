---
id: api-v2-question-currency
title: 问答部分积分相关新增接口
---

- [发布问题](#发布问题)
- [更新问题](#更新问题)
- [设置问题悬赏](#设置问题悬赏)
- [删除问题](#删除问题)
- [申请问题精选](#申请问题精选)
- [回答问题](#回答问题)
- [采纳答案](#采纳答案)
- [围观答案](#围观答案)

## 发布问题

```
POST /currency-questions
```

#### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| subject | 字符串 | **必须**，问题主题或者说标题，不能超过 255 **字节** ，必须以 `？` 结尾。（不区分全角或者半角） |
| topics | 数组 | **必须**，绑定的话题，数组子节点必须符合 `{ "id": 1 }` 的格式。 |
| body | 字符串 | 问题描述。 |
| anonymity | 枚举：`0` 或者 `1` | 作者是风匿名发布。 |
| amount | 数字 | 问题价值，悬赏金额，积分 |
| look | 枚举：`0` 或者 `1` | 是否开启围观，当问题有采纳或者邀请人已回答，则对外部观众自动开启围观。设置围观必须设置悬赏金额。 |
| invitations | 数组 | 邀请回答，问题邀请回答的人，数组子节点必须符合 `{ "user": 1 }` 的格式，切不能存在自己。 |
| automaticity | 枚举：`0` 或者 `1` | 邀请悬赏自动入账，只邀请一个人的情况下，允许悬赏金额自动入账到被邀请回答者钱包中。 |
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

#### 响应

```
Status: 201 Created
```
```json
{
    "message": [
        "操作成功"
    ],
    "question": {
        "subject": "再测试一个问题?",
        "body": null,
        "anonymity": 1,
        "amount": 0,
        "automaticity": 0,
        "look": 0,
        "user_id": 1,
        "updated_at": "2017-08-01 06:06:37",
        "created_at": "2017-08-01 06:06:37",
        "id": 2
    }
}
```

## 更新问题

```
PATCH /currency-questions/:question
```

#### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| subject | 字符串 | **当 `body` / `anonymity` / `topics` / `amount` 不存在时，`subject` 为必须**，问题主题或者说标题，不能超过 255 **字节** ，必须以 `？` 结尾。（不区分全角或者半角） |
| body | 字符串 | **当 `subject` / `anonymity` / `topics` / `amount` 不存在时，`body` 为必须**，问题描述。 |
| anonymity | `1` or `0` | **当 `subject` / `body` / `topics` / `amount` 不存在时，`anonymity` 为必须**，是否匿名。 |
| topics | 数组 | **当 `subject` / `anonymity` / `body` / `amount` 不存在时，`topics` 为必须**，问题关联话题，数组子节点必须符合 `{ "id": 1 }` 的格式。 |
| ammount | int | **当 `subject` / `anonymity` / `body` / `topics` 不存在时，`amount` 为必须**，悬赏金额。 |

#### 响应

```
Status: 204 No Content
```

## 设置悬赏

在没有采纳和邀请且未设置悬赏金额时，问题作者重新设置问题的悬赏

```
PATCH /currency-questions/:question/amount
```

### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|------|
| amount | int | 悬赏金额，积分 |

### 响应

```
Status: 204 No Content
```

## 删除问题

```
DELETE /currency-questions/:question
```

#### 响应

```
Status: 204 No Content
```

## 申请问题精选

```
POST /user/currency-question-application/:question
```

### 响应

```
Http Status 201 Created
```

```json5
{
    "message": [
        "操作成功"
    ]
}
```

## 回答问题

```
POST /currency-questions/:question/answers
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----|----|
| body | String | **必须**，回答的内容，markdown。 |
| anonymity | Enum: `0` , `1` | 是否匿名。 |

#### 响应

```
Status: 201 Created
```
```json
{
    "message": [
        "操作成功"
    ],
    "answer": {
        "question_id": 1,
        "user_id": 1,
        "body": "哈哈，可以的。",
        "anonymity": 1,
        "invited": 0,
        "updated_at": "2017-08-01 06:03:21",
        "created_at": "2017-08-01 06:03:21",
        "id": 3
    }
}
```

## 采纳答案

```
PUT /api/v2/questions/:question/currency-adoptions/:answer
```

#### 响应

```
Status: 201 Created
```
```json
{
    "message": [
        "操作成功"
    ]
}
```

## 围观答案

```
POST question-answers/:answer/currency-onlookers
```

### 响应

```
Http Status 201 Created
```

```json5
{
    "message": [
        "操作成功"
    ],
    "answer": {
        ...  //  回答内容
    }
}
```
