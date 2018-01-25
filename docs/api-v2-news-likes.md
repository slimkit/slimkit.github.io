---
id: api-v2-news-likes
title: 喜欢
---

- [喜欢资讯](#喜欢资讯)
- [取消喜欢资讯](#取消喜欢资讯)
- [资讯喜欢列表](#资讯喜欢列表)

## 喜欢资讯

```
POST /news/{news}/likes
```
### Response

Headers

```
Status: 201 Created
```

## 取消喜欢资讯

```
DELETE /news/{news}/likes
```

### Response

Headers

```
Status: 204 No Content
```

## 资讯喜欢列表

```
GET /news/{news}/likes
```

### Response

Headers

```
Status: 200 Ok
```

```json5
[
    {
        "id": 5,
        "user_id": 1,
        "target_user": 1,
        "likeable_id": 4,
        "likeable_type": "news",
        "created_at": "2017-08-08 02:25:34",
        "updated_at": "2017-08-08 02:25:34",
        "user": {
            "id": 1,
            "name": "baishi",
            "bio": null,
            "sex": 1,
            "location": null,
            "created_at": "2017-07-31 03:16:19",
            "updated_at": "2017-08-09 10:09:28",
            "following": false,
            "follower": false,
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

### 返回参数

| 名称 | 类型 | 说明 |
|:-----|:-----|:-----|
| user_id | int | 喜欢用户id |
| target_user | int | 被喜欢用户id |
| likeable_id | int | 被喜欢资源id |
| created_at | date | 喜欢时间 |
| user | array | 用户信息 |
