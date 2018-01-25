---
id: api-v2-question-answer-topic
title: 话题
---

- [获取全部话题](#获取全部话题)
- [获取认证用户关注的话题或者专家话题](#获取认证用户关注的话题或者专家话题)
- [获取一个话题](#获取一个话题)
- [关注一个话题](#关注一个话题)
- [取消关注一个话题](#取消关注一个话题)
- [获取话题下专家列表](#获取话题下专家列表)
- [批量获取专家列表](#批量获取专家列表)
- [申请创建一个话题](#申请创建一个话题)

## 获取全部话题

```
GET /question-topics
```

#### 请求参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| limit | 数字 | 这次请求获取的条数，默认为 `20` 条，为了避免过大或者错误查询，设置了一个修正值，最大 `50` 最小 `1` 。 |
| offset | 数字 | 数据偏移量，用于翻页 |
| follow | 任意 | 是否检查当前用户是否关注了某话题，默认为不检查，如果传递 `follow` 切拥有任意值（空除外），都会检查当前用户与话题的关注关系。 |
| name | 字符串 | 用语搜索话题，传递话题名称关键词。 |

#### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 1,
        "name": "PHP",
        "description": "我是PHP",
        "questions_count": 0,
        "follows_count": 0,
        "has_follow": false,
        "avatar": null
    }
]
```

| 字段 | 描述 |
|:----:|----|
| id | 话题ID |
| name | 话题名称 |
| description | 话题描述 |
| questions_count | 话题下的问题数量统计 |
| follows_count | 话题下的关注用户统计 |
| avatar | 话题头像，如果存在则为「字符串」，否则固定值 `null` |
| has_follow | 当「请求参数」传递了 `follow` 才会出现 `has_follow` 字段，布尔值，`true` 表示当前用户关注了这个话题，`false` 反之。 |

## 获取认证用户关注的话题或者专家话题

```
GET /user/question-topics
```

#### 请求参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| limit | 数字 | 这次请求获取的条数，默认为 `20` 条，为了避免过大或者错误查询，设置了一个修正值，最大 `50` 最小 `1` 。 |
| after | 数字 | 获取 `id` 之后的数据，要获取某条话题之后的数据，传递该话题 ID。 |
| type | 枚举：`follow` / `expert` | 默认值为 `follow` 代表用户关注的话题列表，如果值为 `expert` 则获取该用户的专家话题（哪些话题下是专家）。 |

#### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 1,
        "name": "PHP",
        "description": "我是PHP",
        "questions_count": 0,
        "follows_count": 0,
        "avatar": null
    }
]
```
| 字段 | 描述 |
|:----:|----|
| id | 话题ID |
| name | 话题名称 |
| description | 话题描述 |
| questions_count | 话题下的问题数量统计 |
| follows_count | 话题下的关注用户统计 |
| avatar | 话题头像，如果存在则为「字符串」，否则固定值 `null` |

## 获取一个话题

```
GET /question-topics/:topic
```

#### 响应

```
Status: 200 OK
```
```json
{
    "id": 1,
    "name": "PHP",
    "description": "我是PHP",
    "questions_count": 5,
    "experts_count": 1,
    "follows_count": 0,
    "has_follow": false,
    "avatar": null,
    "experts": [
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
    ]
}
```

| 字段 | 描述 |
|:----:|------|
| id | 话题的唯一标识。 |
| name | 话题名称。 | 
| description | 话题详细描述。 |
| questions_count | 话题下的问题数量。 |
| experts_count | 话题下的专家数量。 |
| follows_count | 话题的关注者数量。 |
| has_follow | 当前用户是否关注了话题。 |
| avatar | 话题头像，如果没有头像则为 `null`，存在则为一个 URI。 |
| experts | 话题下的专家预览。按照设计图，返回五个用户。 |


## 关注一个话题

```
PUT /user/question-topics/:topic
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

## 取消关注一个话题

```
DELETE /user/question-topics/:topic
```

#### 响应

```
Status: 204 No Content
```

## 获取话题下专家列表

```
GET /question-topics/:topic/experts
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|------|
| after | Integer | 上一次请求获取的最后一条 ID，或者指定某条 ID 之后的数据。 |

#### 响应

```
Status: 200 OK
```
```json
[
    {
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
        },
        "tags": [
            {
                "id": 1,
                "name": "标签1",
                "tag_category_id": 1
            }
        ]
    }
]
```

> 列表资料参见「用户资料」相关文档，这里多的数据为 `tags` 用户标签，用户标签字段说明参见「用户标签」相关文档。

## 批量获取专家列表

```
GET /question-experts
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|------|
| offset | Integer | 偏移量 |
| topics | string | 话题id，多个以逗号隔开 |
| keyword | string | 搜索关键字 |

#### 响应

```
Status: 200 OK
```
```json
[
    {
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
        },
        "tags": [
            {
                "id": 1,
                "name": "标签1",
                "tag_category_id": 1
            }
        ]
    }
]
```

> 列表资料同获取一个话题下专家列表,id为乱序。

## 申请创建一个话题

```
POST /api/v2/user/question-topics/application
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|------|
| name | string | 话题名称 |
| description | string | 话题描述 |

#### 响应

```
Status: 201 Created
```

```json5
{
    "message": [
        "操作成功"
    ]
}
```
