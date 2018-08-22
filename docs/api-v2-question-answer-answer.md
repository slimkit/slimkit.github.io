---
id: api-v2-question-answer-answer
title: 回答
---

- [获取回答列表](#获取回答列表)
- [获取一个回答详情](#获取一个回答详情)
- [回答一个提问](#回答一个提问)
- [采纳一个回答](#采纳一个回答)
- [更新一个回答](#更新一个回答)
- [删除一个回答](#删除一个回答)
- [获取用户发布的回答列表](#获取用户发布的回答列表)

## 获取回答列表

```
GET /questions/:question/answers
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| limit | Integer | 默认 `20` ，获取列表条数，修正值 `1` - `30`。 |
| offset | integer | 默认 `0` ，数据偏移量，传递之前通过接口获取的总数。 |
| order_type | String | 默认 `default`, `default` - 默认排序（按照点赞数）、 `time` - 按照发布时间倒序。 |

#### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 1,
        "question_id": 1,
        "user_id": 1,
        "body": "笑嘻嘻，我是回答。",
        "anonymity": 0,
        "adoption": 0,
        "invited": 0,
        "comments_count": 0,
        "rewards_amount": 0,
        "rewarder_count": 0,
        "likes_count": 0,
        "liked": false,
        "collected": false,
        "rewarded": false,
        "created_at": "2017-08-01 03:40:54",
        "updated_at": "2017-08-01 03:40:54",
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
|:----:|----|
| id | 回答唯一标识 ID 。 |
| question_id | 回答所属问题标识 ID 。 |
| user_id | 发布回答用户标识ID，如果 `anonymity` 为 `1` 则只为 `0` 。 |
| body | 回答的内容，markdown 。 |
| anonymity | 是否是匿名回答 。 |
| adoption | 是否是采纳答案。 |
| invited | 是否该回答是被邀请的人的回答。 |
| comments_count | 评论总数统计。 |
| rewards_amount | 回答打赏总额统计。 |
| rewarder_count | 打赏的人总数统计。 |
| likes_count | 回答喜欢总数统计。 |
| views_count | 回答浏览量统计。 |
| created_at | 回答创建时间。 |
| updated_at | 回答更新时间。 |
| liked | 是否喜欢这个回答。 |
| collected | 是否已收藏这个回答。 |
| rewarded | 是否已打赏这个问题。 |
| user | 回答的用户资料，参考「用户」文档，如果 `anonymity` 为 `1` 则不存在这个字段或者为 `null` 。 |

## 获取一个回答详情

```
GET /question-answers/:answer
```

#### 响应

```
Status: 200
```
```json
{
    "id": 1,
    "question_id": 1,
    "user_id": 1,
    "body": "笑嘻嘻，我是回答。",
    "anonymity": 0,
    "adoption": 0,
    "invited": 0,
    "comments_count": 0,
    "rewards_amount": 0,
    "rewarder_count": 0,
    "likes_count": 0,
    "created_at": "2017-08-01 03:40:54",
    "updated_at": "2017-08-01 03:40:54",
    "liked": false,
    "collected": false,
    "rewarded": false,
    "likes": [],
    "rewarders": [],
    "question": {
        "id": 1,
        "user_id": 1,
        "subject": "第一个提问?",
        "body": null,
        "anonymity": 0,
        "amount": 0,
        "automaticity": 1,
        "look": 1,
        "excellent": 0,
        "status": 0,
        "comments_count": 0,
        "answers_count": 3,
        "watchers_count": 0,
        "likes_count": 0,
        "view_count": 0,
        "has_adoption": true,
        "created_at": "2017-07-28 08:38:54",
        "updated_at": "2017-08-01 06:03:21",
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
    },
    "user": {
        "id": 1,
        "name": "Seven",
        "bio": "Seven 的个人传记",
        "sex": 2,
        "location": "成都 中国",
        "created_at": "2017-06-02 08:43:54",
        "updated_at": "2017-07-25 03:59:39",
        "following": false,
        "follower": false,
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
```
| 字段 | 描述 |
|:----:|----|
| id | 回答唯一标识 ID 。 |
| question_id | 回答所属问题标识 ID 。 |
| user_id | 发布回答用户标识ID，如果 `anonymity` 为 `1` 则只为 `0` 。 |
| body | 回答的内容，markdown 。 |
| anonymity | 是否是匿名回答 。 |
| adoption | 是否是采纳答案。 |
| invited | 是否该回答是被邀请的人的回答。 |
| comments_count | 评论总数统计。 |
| rewards_amount | 回答打赏总额统计。 |
| rewarder_count | 打赏的人总数统计。 |
| likes_count | 回答喜欢总数统计。 |
| views_count | 回答浏览量统计。 |
| created_at | 回答创建时间。 |
| updated_at | 回答更新时间。 |
| text_body | 回答内容纯文字字段，用于列表显示 |
| user | 回答的用户资料，参考「用户」文档，如果 `anonymity` 为 `1` 则不存在这个字段或者为 `null` 。 |
| liked | 是否喜欢这个回答。 |
| collected | 是否已收藏这个回答。 |
| rewarded | 是否已打赏这个问题。 |
| likes | 喜欢列表，参考「回答喜欢」文档。 |
| rewarders | 打赏用户列表，参考「回答打赏」文档。 |
| question | 问题基础数据，参考「问题」文档。 |
| question.has_adoption | 问题是否已有采纳 true 为所属问题已有采纳 |
| could | **是否已围观，对于需要围观的答案，会返回本字段为 true 或者 false 来表示用户是否需要付费，对于普通答案不返回这个字段。** |

## 回答一个提问

```
POST /questions/:question/answers
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----|----|
| body | String | **必须**，回答的内容，markdown。 |
| text_body | string | 纯文字回答内容，用于列表显示 |
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
        "text_body": "",
        "anonymity": 1,
        "invited": 0,
        "updated_at": "2017-08-01 06:03:21",
        "created_at": "2017-08-01 06:03:21",
        "id": 3
    }
}
```

## 采纳一个回答

```
PUT /questions/:question/adoptions/:answer
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

## 更新一个回答

```
PATCH /question-answers/:answer
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| anonymity | `1` or `0` | **如果 `body` 字段不传，则本字段必须存在**，是否匿名。 |
| body | String | **如果 `anonymity` 不传，则本字段必须存在**， 回答详情。 |

#### 响应

```
Status: 201 OK
```
```json
{
    "message": [
        "操作成功"
    ]
}
```

## 删除一个回答

```
DELETE /question-answers/:answer
```

#### 响应

```
Status: 204 No Content
```

## 获取用户发布的回答列表

```
GET /user/question-answer
```

### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|------|
| limit | int | 数据返回条数 |
| after | int | 翻页标识 |
| user_id | int | 用户id 不传默认为当前用户 |
| type | string | 数据筛选类型 `all` - 全部，`adoption` - 被采纳的，`invitation` - 被邀请的，`other` - 其他， 默认为全部 |

#### 响应

```
Status: 200 Ok
```

```json5
[
    {
        "id": 6,
        "question_id": 4,
        "user_id": 1,
        "body": "baishi",
        "anonymity": 0,
        "adoption": 0,
        "invited": 0,
        "comments_count": 0,
        "rewards_amount": 0,
        "rewarder_count": 0,
        "likes_count": 0,
        "created_at": "2017-08-17 07:04:07",
        "updated_at": "2017-08-17 07:04:07",
        "liked": false,
        "collected": false,
        "rewarded": false,
        "user": {
            "id": 1,
            "name": "baishi",
            "bio": null,
            "sex": 1,
            "location": null,
            "created_at": "2017-07-31 03:16:19",
            "updated_at": "2017-08-09 10:09:28",
            "avatar": null,
            "bg": null,
            "verified": {
                "type": "user",
                "icon": null,
                "description": "高水准"
            },
            "extra": {
                "user_id": 1,
                "likes_count": 2,
                "comments_count": 9,
                "followers_count": 0,
                "followings_count": 0,
                "updated_at": "2017-08-17 07:05:06",
                "feeds_count": 0,
                "questions_count": 0,
                "answers_count": 19
            }
        }
    },
    {
        "id": 5,
        "question_id": 4,
        "user_id": 1,
        "body": "baishi",
        "anonymity": 0,
        "adoption": 0,
        "invited": 0,
        "comments_count": 0,
        "rewards_amount": 0,
        "rewarder_count": 0,
        "likes_count": 0,
        "created_at": "2017-08-17 07:01:34",
        "updated_at": "2017-08-17 07:01:34",
        "liked": false,
        "collected": false,
        "rewarded": false,
        "user": {
            "id": 1,
            "name": "baishi",
            "bio": null,
            "sex": 1,
            "location": null,
            "created_at": "2017-07-31 03:16:19",
            "updated_at": "2017-08-09 10:09:28",
            "avatar": null,
            "bg": null,
            "verified": {
                "type": "user",
                "icon": null,
                "description": "高水准"
            },
            "extra": {
                "user_id": 1,
                "likes_count": 2,
                "comments_count": 9,
                "followers_count": 0,
                "followings_count": 0,
                "updated_at": "2017-08-17 07:05:06",
                "feeds_count": 0,
                "questions_count": 0,
                "answers_count": 19
            }
        }
    }
]
```

> 数据结构同答案列表

## 获取转发的回答列表

```
GET /qa/reposted-answers
```

请求查询参数：

| 名称 | 类型 | 描述 |
|----|----|----|
| `id` | `string` | **必须**，获取的问题 ID，多个采用 `,` 进行分割。 |

响应：

```
Status: 200 OK
```
```json5
[
    {
        "id": 1,              // 回答 ID
        "body": "haha\n",     // 回答内容，前 100 字
        "question": {
            "id": 1,          // 问题 ID
            "subject": "问题1" // 问题标题
        }
    }
]
```
