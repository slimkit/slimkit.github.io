---
id: api-v2-group-posts-comments
title: 帖子 · 评论
---

- [帖子评论列表](#帖子评论列表)
- [评论帖子](#评论帖子)
- [删除评论](#删除评论)


## 帖子评论列表

```
get /group-posts/:post/comments
```

### 响应

```
status 200
```

### 参数说明
| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 20 ，数据返回条数 默认为20|
|after|inegter|可选，上次获取到数据最后一条 ID，用于获取该 ID 之后的数据。|

```json
{
    "pinneds": [],// 置顶评论列表，同comments结构一样
    "comments": [ // 帖子评论
        {
            "id": 65, // 评论唯一id
            "user_id": 1,//评论人id
            "target_user": 1,// 目标用户
            "reply_user": 0,// 回复的用户
            "body": "测试", // 内容
            "commentable_id": 121,// 资源id
            "commentable_type": "group-posts",// 资源类型
            "created_at": "2017-11-30 03:04:03",
            "updated_at": "2017-11-30 03:04:03",
            "user": {// 回复用户信息
                "id": 1,
                "name": "admin",
                "bio": null,
                "sex": 2,
                "location": "四川省 巴中市 南江县",
                "created_at": "2017-10-23 01:17:34",
                "updated_at": "2017-11-15 07:36:17",
                "avatar": "http://thinksns-plus.dev/api/v2/users/1/avatar",
                "bg": null,
                "verified": {
                    "type": "user",
                    "icon": "http://thinksns-plus.dev/storage/certifications/000/000/0us/er.png",
                    "description": "1111"
                },
                "extra": {
                    "user_id": 1,
                    "likes_count": 5,
                    "comments_count": 13,
                    "followers_count": 0,
                    "followings_count": 6,
                    "updated_at": "2017-11-30 03:04:06",
                    "feeds_count": 33,
                    "questions_count": 2,
                    "answers_count": 0,
                    "checkin_count": 7,
                    "last_checkin_count": 1
                }
            },
            "reply": {//被回复用户信息
                "id": 1,
                "name": "admin",
                "bio": null,
                "sex": 2,
                "location": "四川省 巴中市 南江县",
                "created_at": "2017-10-23 01:17:34",
                "updated_at": "2017-11-15 07:36:17",
                "avatar": "http://thinksns-plus.dev/api/v2/users/1/avatar",
                "bg": null,
                "verified": {
                    "type": "user",
                    "icon": "http://thinksns-plus.dev/storage/certifications/000/000/0us/er.png",
                    "description": "1111"
                },
                "extra": {
                    "user_id": 1,
                    "likes_count": 5,
                    "comments_count": 13,
                    "followers_count": 0,
                    "followings_count": 6,
                    "updated_at": "2017-11-30 03:04:06",
                    "feeds_count": 33,
                    "questions_count": 2,
                    "answers_count": 0,
                    "checkin_count": 7,
                    "last_checkin_count": 1
                }
            },

        },
    ]
}
```

## 评论帖子

```
POST /group-posts/:post/comments
```

### 响应

```
status 201
```

### 参数说明
| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|body|string| 必须 评论内容 最大长度225|
|reply_user|inegter|回复的用户的id|

## 删除评论

```
DELETE /group-posts/:post/comments/:comment
```

#### 响应

```
status 204 not content 
```
