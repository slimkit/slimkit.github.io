---
id: api-v2-question-answer-comments
title: 评论
---

- [获取问题评论列表](#获取问题评论列表)
- [获取回答评论列表](#获取回答评论列表)
- [评论问题](#评论问题)
- [评论答案](#评论答案)
- [删除问题评论](#删除问题评论)
- [删除回答评论](#删除回答评论)

## 获取问题评论列表

```
GET /questions/:question/comments
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| limit | Integer | 默认 `20` ，获取列表条数，修正值 `1` - `30`。 |
| after | integer | 默认 `0` ，筛选偏移, 上一次获取的评论列表中最后一条的id |

#### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 19,
        "user_id": 2,
        "target_user": 2,
        "reply_user": 0,
        "body": "这里是问题的评论",
        "commentable_id": 1,
        "commentable_type": "questions",
        "created_at": "2017-08-07 09:09:01",
        "updated_at": "2017-08-07 09:09:01"
    }
]
```

| 字段 | 描述 |
|:----:|----|
| id | 回答唯一标识 ID 。 $after参数的源|
| user_id | 发布评论用户标识ID |
| body | 评论的内容，markdown 。 |
| commentable_id | 问题的id 。 |
| commentable_type | 评论的对象 questions: 问题 |
| reply_user | 被回复的用户 |
| target_user | 问题发起者 |

## 获取回答评论列表

```
GET /question-answers/:answer/comments
```
#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| limit | Integer | 默认 `20` ，获取列表条数，修正值 `1` - `30`。 |
| after | integer | 默认 `0` ，筛选偏移, 上一次获取的评论列表中最后一条的id |

#### 响应

```
Status: 200
```
```json
[
    {
        "id": 22,
        "user_id": 2,
        "target_user": 1,
        "reply_user": 1,
        "body": "llllllllasdfasdfasdfasdf",
        "commentable_id": 1,
        "commentable_type": "question-answers",
        "created_at": "2017-08-07 09:43:08",
        "updated_at": "2017-08-07 09:43:08"
    }
]
```
| 字段 | 描述 |
|:----:|----|
| id | 回答唯一标识 ID 。 $after参数的源|
| user_id | 发布评论用户标识ID |
| body | 评论的内容，markdown 。 |
| commentable_id | 问题的id 。 |
| commentable_type | 评论的对象 questions: 问题 |
| reply_user | 被回复的用户 |
| target_user | 问题发起者 |

## 评论问题

```
POST /questions/:question/comments
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----|----|
| body | String | **必须**，回答的内容，markdown。 |
| reply_user | integer | 选填, 被回复用户的ID |

#### 响应

```
Status: 201 Created
```
```json
{
    "message": [
        "操作成功"
    ],
    "comment": {
        "user_id": 2,
        "target_user": 2,
        "reply_user": 1,
        "body": "llllllllasdfasdfasdfasdf",
        "commentable_type": "questions",
        "commentable_id": 1,
        "updated_at": "2017-08-07 09:48:33",
        "created_at": "2017-08-07 09:48:33",
        "id": 23
    }
}
```

## 评论答案

```
POST /question-answers/:answer/comments
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----|----|
| body | String | **必须**，回答的内容，markdown。 |
| reply_user | integer | 选填, 被回复用户的ID |

#### 响应

```
Status: 201 Created
```
```json
{
    "message": [
        "操作成功"
    ],
    "comment": {
        "user_id": 2,
        "target_user": 1,
        "reply_user": 1,
        "body": "llllllllasdfasdfasdfasdf",
        "commentable_type": "question-answers",
        "commentable_id": 1,
        "updated_at": "2017-08-07 09:55:50",
        "created_at": "2017-08-07 09:55:50",
        "id": 24
    }
}
```

## 删除问题评论

```
DELETE /questions/:question/comments/:answer
```

### 响应

```
Status: 204 No Content
```

### 删除回答评论

```
DELETE /question-answers/:answer/comments/:comment
```

### 响应

```
Status: 204 No Content

