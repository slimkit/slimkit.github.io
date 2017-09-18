# 收藏

- [收藏一个回答](#收藏一个回答)
- [取消收藏一个回答](#取消收藏一个回答)
- [回答收藏列表](#回答收藏列表)

## 收藏一个回答

```
POST /api/v2/user/question-answer/collections/:answer
```

### 响应

Header 201 Created

```json5
{
    "message": [
        "操作成功"
    ]
}
```

## 取消收藏一个回答

```
DELETE /api/v2/user/question-answer/collections/:answer
```

### 响应

Header 204 No Content

## 回答收藏列表

```
GET /api/v2/user/question-answer/collections
```

### 可选参数

| 名称 | 类型 | 必填 | 说明 |
|:----:|:-----|:----:|------|
| limit | int | -    | 数据返回条数  默认20条 |
| after | int | -    | 数据翻页标识 |

### 响应

Header 200 Ok

```json5
[
    {
        "id": 4,
        "user_id": 1,
        "collectible_id": 2,
        "collectible_type": "question-answers",
        "created_at": "2017-08-08 08:51:37",
        "updated_at": "2017-08-08 08:51:37",
        "collectible": {
            "id": 2,
            "question_id": 4,
            "user_id": 2,
            "body": null,
            "anonymity": 0,
            "adoption": 0,
            "invited": 1,
            "comments_count": 0,
            "rewards_amount": 0,
            "rewarder_count": 0,
            "likes_count": 1,
            "created_at": "2017-08-07 14:19:58",
            "updated_at": "2017-08-07 06:29:40",
            "could": false
        }
    },
    {
        "id": 3,
        "user_id": 1,
        "collectible_id": 1,
        "collectible_type": "question-answers",
        "created_at": "2017-08-08 08:51:37",
        "updated_at": "2017-08-08 08:51:37",
        "collectible": {
            "id": 1,
            "question_id": 4,
            "user_id": 1,
            "body": "阿斯顿发生的",
            "anonymity": 0,
            "adoption": 0,
            "invited": 0,
            "comments_count": 0,
            "rewards_amount": 0,
            "rewarder_count": 0,
            "likes_count": 1,
            "created_at": "2017-08-07 14:19:58",
            "updated_at": "2017-08-07 06:29:40"
        }
    }
]
```

### 返回参数
| 名称 | 类型 | 说明 |
|:----:|:-----|------|
| id   | int  | 收藏记录id 用于翻页 |
| user_id | int | 收藏用户id |
| created_at | date | 收藏时间 |
| collectible | array | 收藏数据信息 |
| collectible.id | int | 回答数据id |
| collectible.question_id | int | 回答所属问题id |
| collectible.user_id | int | 回答用户id 如果为匿名回答且回答者不是当前用户，该项值为0 |
| collectible.body | string | 回答内容 需要付费围观时为null |
| collectible.anonymity | int | <p>是否匿名</p> <p>1-匿名回答</p> <p>0-非匿名回答</p> |
| collectible.adoption | int | <p>是否被采纳</p> <p>1-被采纳</p> <p>0-未被采纳</p> |
| collectible.invited | int | <p>是否被邀请回答</p> <p>1-被邀请</p> <p>0-未被邀请</p> |
| collectible.comments_count | int | 评论数 |
| collectible.rewards_amount | int | 被打赏总额 |
| collectible.rewarder_count | int | 打赏者统计 |
| collectible.likes_count | int | 点赞数 |
| collectible.could | bool | 是否可以查看,当收藏的回答需要付费围观时出现该字段且值为false |
