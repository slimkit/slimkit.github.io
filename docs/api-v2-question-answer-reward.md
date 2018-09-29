---
id: api-v2-question-answer-reward
title: 回答 · 打赏
---

- [打赏一个回答](#打赏一个回答)
- [新版打赏一个回答](#新版打赏一个回答)
- [获取回答打赏列表](#获取回答打赏列表)

## 打赏一个回答

```
POST /api/v2/question-answers/:answer/rewarders
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| amount | Integer | **必须**，用户要打赏的金额。 |
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

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

## 新版打赏一个回答

```
POST /api/v2/question-answers/:answer/new-rewards
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| amount | Integer | **必须**，用户要打赏的金额。 |
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

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

## 获取回答打赏列表

```
GET /api/v2/question-answers/:answer/rewarders
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| type | 枚举：`time`、`amount` | 默认值 `time`, `time` - 按照打赏时间倒序，`amount` - 按照金额倒序。 |
| limit | Integer | 默认 `20` ，获取列表条数，修正值 `1` - `30`。 |
| offset | integer | 默认 `0` ，数据偏移量，传递之前通过接口获取的总数。 |

#### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 1,
        "user_id": 1,
        "target_user": 1,
        "amount": 10,
        "rewardable_id": 1,
        "rewardable_type": "question-answers",
        "created_at": "2017-08-04 08:59:40",
        "updated_at": "2017-08-04 08:59:40",
        "user": {
            "id": 1,
            "name": "Seven",
            "bio": "Seven 的个人传记",
            "sex": 2,
            "location": "成都 中国",
            "created_at": "2017-06-02 08:43:54",
            "updated_at": "2017-07-25 03:59:39",
            "avatar": "http://plus.io/api/v2/users/1/avatar",
            "bg": "http://plus.io/storage/user-bg/000/000/000/01.png",
            "verified": null,
            "extra": {
                "user_id": 1,
                "likes_count": 0,
                "comments_count": 8,
                "followers_count": 0,
                "followings_count": 1,
                "updated_at": "2017-08-01 06:06:37",
                "feeds_count": 0,
                "questions_count": 5,
                "answers_count": 3
            }
        }
    }
]
```

| 字段 | 描述 |
|:----:|-----|
| id | 打赏的唯一标识。 |
| user_id | 打赏的人用户ID |
| target_user | 接收打赏金额的用户 |
| amount | 搭讪的金额。 |
| rewardable_id | 可被打赏资源ID，例如在问到中 `rewardable_type` 为 `question-answers` 资源ID就代表问题回答ID。 |
| rewardable_type | 可被打赏资源。 |
| created_at | 打赏时间。 |
| updated_at | 打赏更新时间。 |
| user | 打赏用户资料。 |

