---
id: api-v2-group-posts-reward
title: 帖子 · 打赏
---

- [帖子打赏列表](#帖子打赏列表)
- [帖子打赏](#帖子搭赏)
- [新版帖子打赏](#新版帖子打赏)


## 帖子点赞列表

```
GET /group-posts/:post/rewards

```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，翻页标识。|
|order|string| 默认 desc, asc 升序 desc 降序|
|order_type|string|默认 date, amount 打赏金额 date 打赏时间|

### 响应

```
status 200
```

```json
[
    {
        "id": 24,// 打赏金唯一id
        "user_id": 1,// 打赏用户id
        "target_user": 1,// 目标用户id
        "amount": 20,// 打赏金额
        "rewardable_id": 4,// 资源id
        "rewardable_type": "group-posts",// 资源类型
        "created_at": "2017-12-04 03:17:54",
        "updated_at": "2017-12-04 03:17:54",
        "user": {
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
                "updated_at": "2017-12-04 01:46:57",
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

## 帖子打赏

```
POST /group-posts/:post/rewards
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|amount|integer|必须 打赏金额|

### 响应

```
status 201
```

## 新版帖子打赏

```
POST /group-posts/:post/new-rewards
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|amount|integer|必须 打赏金额|

### 响应

```
status 201
```
