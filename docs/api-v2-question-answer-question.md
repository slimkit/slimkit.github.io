---
id: api-v2-question-answer-question
title: 问题
---

- [发布问题](#发布问题)
- [更新问题](#更新问题)
- [设置问题悬赏](#设置问题悬赏)
- [获取问题列表](#获取问题列表)
- [获取一个问题详情](#获取一个问题详情)
- [删除一个问题](#删除一个问题)
- [获取用户发布的问题列表](#获取用户发布的问题列表)

## 发布问题

```
POST /questions
```

#### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| subject | 字符串 | **必须**，问题主题或者说标题，不能超过 255 **字节** ，必须以 `？` 结尾。（不区分全角或者半角） |
| topics | 数组 | **必须**，绑定的话题，数组子节点必须符合 `{ "id": 1 }` 的格式。 |
| body | 字符串 | 问题描述。 |
| anonymity | 枚举：`0` 或者 `1` | 作者是否匿名发布。 |
| amount | 数字 | 问题价值，悬赏金额 |
| look | 枚举：`0` 或者 `1` | 是否开启围观，当问题有采纳或者邀请人已回答，则对外部观众自动开启围观。设置围观必须设置悬赏金额。 |
| invitations | 数组 | 邀请回答，问题邀请回答的人，数组子节点必须符合 `{ "user": 1 }` 的格式，切不能存在自己。 |
| automaticity | 枚举：`0` 或者 `1` | 邀请悬赏自动入账，只邀请一个人的情况下，允许悬赏金额自动入账到被邀请回答者钱包中。 |
| text_body | 字符串 | 纯文字回答内容，用于列表显示 |
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
        "text_body": "12312",
        "id": 2
    }
}
```

## 更新问题

```
PATCH /questions/:question
```

#### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| subject | 字符串 | **当 `body` / `anonymity` / `topics` / `amount` 不存在时，`subject` 为必须**，问题主题或者说标题，不能超过 255 **字节** ，必须以 `？` 结尾。（不区分全角或者半角） |
| body | 字符串 | **当 `subject` / `anonymity` / `topics` / `amount` 不存在时，`body` 为必须**，问题描述。 |
| anonymity | `1` or `0` | **当 `subject` / `body` / `topics` / `amount` 不存在时，`anonymity` 为必须**，是否匿名。 |
| topics | 数组 | **当 `subject` / `anonymity` / `body` / `amount` 不存在时，`topics` 为必须**，问题关联话题，数组子节点必须符合 `{ "id": 1 }` 的格式。 |
| ammount | int | **当 `subject` / `anonymity` / `body` / `topics` 不存在时，`amount` 为必须**，悬赏金额。 |
| text_body | 字符串 | 纯文字回答内容，用于列表显示 |

#### 响应

```
Status: 204 No Content
```

## 设置问题悬赏

在没有采纳和邀请且未设置悬赏金额时，问题作者重新设置问题的悬赏

```
PATCH /questions/:question/amount
```

### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|------|
| amount | int | 悬赏金额 |

### 响应

```
Status: 204 No Content
```

## 获取问题列表

获取所有问题列表

```
GET /questions
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| type | 枚举：`all`、`new`、`hot`、`reward`、`excellent` | 默认值 `new`, `all` - 全部、`new` - 最新、`hot` - 热门、`reward` - 悬赏、`excellent` - 精选  `follow` - 关注 。 |
| limit | Integer | 默认 `20` ，获取列表条数，修正值 `1` - `30`。 |
| offset | integer | 默认 `0` ，数据偏移量，传递之前通过接口获取的总数。 |
| subject | string | 标题搜索关键字。 |
| `id` | `string` | 按照问题 ID 返回问题列表，多个采用半角 `,` 进行分割。 |

#### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 5,
        "user_id": 1,
        "subject": "32?",
        "body": "1212",
        "anonymity": 0,
        "amount": 200,
        "automaticity": 1,
        "look": 1,
        "excellent": 0,
        "status": 0,
        "comments_count": 0,
        "answers_count": 0,
        "watchers_count": 0,
        "likes_count": 0,
        "views_count": 10,
        "created_at": "2017-08-21 08:39:42",
        "updated_at": "2017-08-22 03:17:13",
        "answer": null,
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
                "description": "啦啦啦啦"
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
        "id": 4,
        "user_id": 1,
        "subject": "啊撒大声地",
        "body": "啊撒大声地",
        "anonymity": 0,
        "amount": 200,
        "automaticity": 1,
        "look": 1,
        "excellent": 0,
        "status": 0,
        "comments_count": 2,
        "answers_count": 19,
        "watchers_count": 0,
        "likes_count": 0,
        "views_count": 1,
        "created_at": "2017-08-09 10:33:22",
        "updated_at": "2017-08-17 07:05:06",
        "answer": {
            "id": 7,
            "question_id": 4,
            "user_id": 1,
            "body": "baishi",
            "anonymity": 0,
            "adoption": 0,
            "invited": 1,
            "comments_count": 0,
            "rewards_amount": 32,
            "rewarder_count": 1,
            "likes_count": 0,
            "created_at": "2017-08-17 07:05:06",
            "updated_at": "2017-08-17 07:17:26",
            "liked": false,
            "collected": false,
            "rewarded": false,
            "could": false,
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
                    "description": "啦啦啦啦"
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
                "description": "啦啦啦啦"
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

### 返回参数说明


| 字段 | 描述 |
|:----:|----|
| id | 问题唯一 ID 。 |
| user_id | 发布的用户 ID，如果是 `anonymity` 是 `1` 则该字段为 `0`。 |
| subject | 问题标题。 |
| body | 问题详情，markdown，如果没有详情为 `null`。 |
| anonymity | 是否匿名，`1` 代表匿名发布，匿名后不会返回任何用户信息。 |
| amount | 问题价值，悬赏金额，`0` 代表非悬赏。 |
| automaticity | 是否自动入账。客户端无用，邀请回答后端判断逻辑使用。 |
| look | 是否开启了围观。 |
| excellent | 是否属于精选问题。 |
| status | 问题状态，0 - 未解决，1 - 已解决， 2 - 问题关闭 。 |
| comments_count | 问题评论总数统计。 |
| answers_count | 问题答案数量统计。 |
| watchers_count | 问题关注的人总数统计。 |
| likes_count | 喜欢问题的人总数统计。 |
| views_count | 问题查看数量统计。 |
| text_body | 问题内容纯文字字段，用于列表显示 |
| created_at | 问题创建时间。 |
| updated_at | 问题修改时间。 |
| answer | 问题的最新一条回答，具体数据结构参考「回答」文档，问题没有回答时该字段为null。 |
| answer.cloud | 该回答是否需要围观，所属问题开启围观时会存在，为 `false` 时回答内容返回为`null` |
| user | 用户资料，如果是 `anonymity` 是 `1` 则该字段不存在。 |


获取某个话题下的问题列表

```
GET /question-topics/:topic/questions
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| type | 枚举：`all`、`new`、`hot`、`reward`、`excellent` | 默认值 `new`, `all` - 全部、`new` - 最新、`hot` - 热门、`reward` - 悬赏、`excellent` - 精选 。 |
| limit | Integer | 默认 `20` ，获取列表条数，修正值 `1` - `30`。 |
| offset | integer | 默认 `0` ，数据偏移量，传递之前通过接口获取的总数。 |
| subject | string | 标题搜索关键字。 |

#### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 2,
        "user_id": 0,
        "subject": "再测试一个问题?",
        "body": null,
        "anonymity": 1,
        "amount": 0,
        "automaticity": 0,
        "look": 0,
        "excellent": 0,
        "status": 0,
        "comments_count": 0,
        "answers_count": 0,
        "watchers_count": 0,
        "likes_count": 0,
        "views_count": 0,
        "created_at": "2017-08-01 06:06:37",
        "updated_at": "2017-08-01 06:06:37"
    },
    {
        "id": 1,
        "user_id": 1,
        "subject": "第一个提问?",
        "body": null,
        "anonymity": 0,
        "amount": 0,
        "automaticity": 0,
        "look": 0,
        "excellent": 0,
        "status": 0,
        "comments_count": 0,
        "answers_count": 3,
        "watchers_count": 0,
        "likes_count": 0,
        "views_count": 0,
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
    }
]
```

> 字段注明情查看 「[获取一个问题详情](#获取一个问题详情)」，列表值返回一部分主要数据。

## 获取一个问题详情

```
GET /questions/:question
```

#### 响应

```
Status: 200 OK
```
```json
{
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
    "views_count": 0,
    "created_at": "2017-07-28 08:38:54",
    "updated_at": "2017-08-01 06:03:21",
    "my_answer": null,
    "watched": false,
    "invitation_answers": [
        {
            "id": 2,
            "question_id": 1,
            "user_id": 2,
            "body": null,
            "anonymity": 0,
            "adoption": 0,
            "invited": 1,
            "comments_count": 0,
            "rewards_amount": 0,
            "rewarder_count": 0,
            "likes_count": 0,
            "created_at": "2017-08-01 03:44:04",
            "updated_at": "2017-08-01 03:44:04",
            "could": false,
            "onlookers_count": 1,
            "onlookers_total": 10,
            "user": {
                "id": 2,
                "name": "test1",
                "bio": "0",
                "sex": 0,
                "location": "0",
                "created_at": "2017-06-12 07:38:55",
                "updated_at": "2017-06-12 07:38:55",
                "avatar": null,
                "bg": null,
                "verified": null,
                "extra": null
            }
        }
    ],
    "adoption_answers": [
        {
            "id": 3,
            "question_id": 1,
            "user_id": 1,
            "body": "终于回答成功",
            "anonymity": 1,
            "adoption": 1,
            "invited": 0,
            "comments_count": 0,
            "rewards_amount": 0,
            "rewarder_count": 0,
            "likes_count": 0,
            "created_at": "2017-08-01 06:03:21",
            "updated_at": "2017-08-01 06:03:21",
            "could": true,
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
    ],
    "topics": [
        {
            "id": 1,
            "name": "PHP",
            "description": "我是PHP",
            "questions_count": 5,
            "experts_count": 1,
            "follows_count": 0,
            "avatar": null
        }
    ],
    "invitations": [
        {
            "id": 2,
            "name": "test1",
            "bio": "0",
            "sex": 0,
            "location": "0",
            "created_at": "2017-06-12 07:38:55",
            "updated_at": "2017-06-12 07:38:55",
            "avatar": null,
            "bg": null,
            "verified": null,
            "extra": null
        }
    ],
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
```

| 字段 | 描述 |
|:----:|----|
| id | 问题唯一 ID 。 |
| user_id | 发布的用户 ID，如果是 `anonymity` 是 `1` 则该字段为 `0`。 |
| subject | 问题标题。 |
| body | 问题详情，markdown，如果没有详情为 `null`。 |
| anonymity | 是否匿名，`1` 代表匿名发布，匿名后不会返回任何用户信息。 |
| amount | 问题价值，悬赏金额，`0` 代表非悬赏。 |
| automaticity | 是否自动入账。客户端无用，邀请回答后端判断逻辑使用。 |
| look | 是否开启了围观。 |
| excellent | 是否属于精选问题。 |
| status | 问题状态，0 - 未解决，1 - 已解决， 2 - 问题关闭 。 |
| comments_count | 问题评论总数统计。 |
| answers_count | 问题答案数量统计。 |
| watchers_count | 问题关注的人总数统计。 |
| likes_count | 喜欢问题的人总数统计。 |
| views_count | 问题查看数量统计。 |
| created_at | 问题创建时间。 |
| updated_at | 问题修改时间。 |
| my_answer | 我的回答，数据结构参考回答列表，没有时为null |
| watched | 用户是否关注这个问题。 |
| invitation_answers | 问题邀请用户回答的答案列表，具体数据结构参考「回答」文档。 |
| invitation_answers.onlookers_count | 该回答被围观人数 |
| invitation_answers.onlookers_total | 被围观总金额 |
| invitation_answers.cloud | 该回答是否需要围观，所属问题开启围观时会存在，为 `false` 时回答内容返回为`null` |
| adoption_answers | 问题采纳的答案列表，具体数据结构参考「回答」文档。 |
| topics | 问题话题列表，参考「话题」文档。 |
| invitations | 问题邀请回答的用户列表，参考「用户」文档。 |
| user | 用户资料，如果是 `anonymity` 是 `1` 则该字段不存在。 |

> 如果匿名提问是当前请求的认证用户所发布，则返回用户信息。

## 删除一个问题

```
DELETE /questions/:question
```

#### 响应

```
Status: 204 No Content
```

## 获取用户发布的问题列表

```
GET /api/v2/user/questions
```

### 输入
| 名称 | 类型 | 描述 |
|:----:|:----:|------|
| limit | int | 数据条数 |
| after | int | 翻页标识 |
| user_id | int | 用户id 不传默认为当前用户 |
| type  | string | 数据筛选类型 `all`-全部 `invitation`-邀请 `reward`-悬赏 `other`-其他 默认全部|

### 响应

```
Status 200 Ok
```

```json5
[
    {
        "id": 5,
        "user_id": 1,
        "subject": "32?",
        "body": "1212",
        "anonymity": 0,
        "amount": 200,
        "automaticity": 1,
        "look": 1,
        "excellent": 0,
        "status": 0,
        "comments_count": 0,
        "answers_count": 0,
        "watchers_count": 0,
        "likes_count": 0,
        "views_count": 10,
        "created_at": "2017-08-21 08:39:42",
        "updated_at": "2017-08-22 03:17:13",
        "answer": null,
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
            "verified": null,
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
        "id": 4,
        "user_id": 1,
        "subject": "啊撒大声地",
        "body": "啊撒大声地",
        "anonymity": 0,
        "amount": 200,
        "automaticity": 1,
        "look": 1,
        "excellent": 0,
        "status": 0,
        "comments_count": 2,
        "answers_count": 19,
        "watchers_count": 0,
        "likes_count": 0,
        "views_count": 1,
        "created_at": "2017-08-09 10:33:22",
        "updated_at": "2017-08-17 07:05:06",
        "answer": {
            "id": 7,
            "question_id": 4,
            "user_id": 1,
            "body": "baishi",
            "anonymity": 0,
            "adoption": 0,
            "invited": 1,
            "comments_count": 0,
            "rewards_amount": 32,
            "rewarder_count": 1,
            "likes_count": 0,
            "created_at": "2017-08-17 07:05:06",
            "updated_at": "2017-08-17 07:17:26",
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
                "verified": null,
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
            "verified": null,
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

> 其他部分数据格式同问题列表
