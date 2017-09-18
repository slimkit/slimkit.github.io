# 点赞

- [点赞一个回答](#点赞一个回答)
- [取消点赞一个回答](#取消点赞一个回答)
- [一个回答的点赞列表](#一个回答的点赞列表)

## 点赞一个回答

```
POST /api/v2/question-answers/:answer/likes
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

## 取消点赞一个回答

```
DELETE /api/v2/question-answers/:answer/likes
```

### 响应

Header 204 No Content

## 一个回答的点赞列表

```
GET /api/v2/question-answers/:answer/likes
```

### 参数

| 名称  | 说明 |
|:-----:|------|
| limit | 数据返回条数 默认20 |
| after | 数据翻页标识 该倒序列表中，标识为列表数据最小id|

### 响应

Header 200 OK

```json5
[
    {
        "id": 8,
        "user_id": 1,
        "target_user": 1,
        "likeable_id": 4,
        "likeable_type": "question-answers",
        "created_at": "2017-08-17 08:54:28",
        "updated_at": "2017-08-17 08:54:28",
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
