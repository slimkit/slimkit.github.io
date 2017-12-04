# 圈子举报

- [帖子点赞列表](#帖子点赞列表)
- [帖子点赞](#帖子点赞)
- [帖子取消点赞](#帖子取消点赞)


## 帖子点赞列表

```
GET /group-posts/:post/likes

```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|after|integer|默认 0 ，翻页标识。|

### 响应

```
status 200
```

```json
[
    {
        "id": 152,
        "user_id": 1,// 攒点用户
        "target_user": 1,// 点赞目标用户
        "likeable_id": 4,// 资源唯一id
        "likeable_type": "group-posts",// 点赞资源类型
        "created_at": "2017-12-04 01:32:36",
        "updated_at": "2017-12-04 01:32:36",
        "user": {
            "id": 1,
            "name": "admin",
            "bio": null,
            "sex": 2,
            "location": "四川省 巴中市 南江县",
            "created_at": "2017-10-23 01:17:34",
            "updated_at": "2017-11-15 07:36:17",
            "following": false,
            "follower": false,
            "avatar": "http://thinksns-plus.dev/api/v2/users/1/avatar",
            "bg": null,
            "verified": {
                "type": "user",
                "icon": "http://thinksns-plus.dev/storage/certifications/000/000/0us/er.png",
                "description": "1111"
            },
            "extra": {
                "user_id": 1,
                "likes_count": 6,
                "comments_count": 13,
                "followers_count": 0,
                "followings_count": 6,
                "updated_at": "2017-12-04 01:32:36",
                "feeds_count": 33,
                "questions_count": 2,
                "answers_count": 0,
                "checkin_count": 7,
                "last_checkin_count": 1
            }
        }
    }
]
```

## 帖子点赞

```
POST /group-posts/:post/likes
```

### 响应

```
status 201
```

## 帖子取消点赞

```
DELETE /group-posts/:post/likes
```

### 响应

```
status 204
```
