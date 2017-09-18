# 用户关注问题

- [获取关注的问题列表](#获取关注的问题列表)
- [关注一个问题](#关注一个问题)
- [取消关注一个问题](#取消关注一个问题)

## 获取关注的问题列表

```
GET /api/v2/user/question-watches
```

#### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
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

> 数据结构参考「问题」文档。

## 关注一个问题

```
PUT /api/v2/user/question-watches/:question
```

#### 响应

```
Status: 204 No Content
```

## 取消关注一个问题

```
DELETE /api/v2/user/question-watches/:question
```

#### 响应

```
Status: 204 No Content
```
