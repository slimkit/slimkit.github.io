---
id: api-v2-group-posts-pinned
title: 帖子 · 置顶
---

- [帖子申请置顶列表](#帖子申请置顶列表)
- [申请帖子置顶](#申请帖子置顶)
- [通过帖子置顶](#通过帖子置顶)
- [拒绝帖子置顶](#拒绝帖子置顶)
- [帖子评论申请置顶列表](#帖子评论申请置顶列表)
- [帖子评论申请置顶](#帖子评论申请置顶)
- [通过帖子评论申请置顶](#通过帖子评论申请置顶)
- [拒绝帖子评论申请置顶](#拒绝帖子评论申请置顶)
- [圈主和管理员置顶帖子](#圈主和管理员置顶帖子)
- [圈主和管理员取消置顶帖子](#圈主和管理员取消置顶帖子)

## 帖子申请置顶列表

```
GET /pinned/posts
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|after|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|group|integer|默认 全部，某个圈子置顶帖子需传圈子id|

### 响应

```
status 200
```

```json
[
    {
        "id": 3,
        "channel": "post",
        "raw": 0,
        "target": 2,
        "user_id": 1,
        "target_user": 1,
        "amount": 200,
        "day": 1,
        "expires_at": null,
        "status": 0,
        "created_at": "2017-11-30 10:42:14",
        "updated_at": "2017-11-30 10:42:14",
        "user": {
            "id": 1,
            "name": "root",
            "bio": null,
            "sex": 0,
            "location": null,
            "created_at": "2017-11-09 08:17:26",
            "updated_at": "2017-11-09 08:17:26",
            "avatar": "http://127.0.0.1/duibi/thinksns-plus/public/api/v2/users/1/avatar",
            "bg": null,
            "verified": null,
            "extra": {
                "user_id": 1,
                "likes_count": 4,
                "comments_count": 4,
                "followers_count": 0,
                "followings_count": 0,
                "updated_at": "2017-11-29 06:50:57",
                "feeds_count": 9,
                "questions_count": 0,
                "answers_count": 0,
                "checkin_count": 0,
                "last_checkin_count": 0,
                "live_zans_count": 0,
                "live_zans_remain": 0,
                "live_time": 0
            }
        },
        "post": {
            "id": 2,
            "group_id": 1,
            "user_id": 1,
            "title": "123123",
            "body": "士大夫",
            "summary": "123123",
            "likes_count": 4,
            "comments_count": 1,
            "views_count": 0,
            "created_at": "2017-11-27 11:20:07",
            "updated_at": "2017-11-29 06:50:57"
        }
    }
]
```

### 返回参数说明

| 名称 | 类型 | 说明 |
|:----:|:----:|:-----|
| id   | int | 数据id |
|channel | string | 置顶类型 有`comment` 评论置顶和`post`帖子置顶两种，该接口中始终为`post`|
| raw | int  | 当`channel` 为`comment`时为帖子id，该接口中始终为0 |
| target | int | 帖子id |
| user_id | int | 申请人id |
| target_user | int | 申请对方id，该接口中始终等于当前认证用户id |
| amount | int | 置顶金额，分单位 |
| day | int | 置顶天数 |
| expires_at | date | 置顶过期时间 （被拒绝时为拒绝处理的操作时间）|
| status | int | 处理状态 0-待审核 1-已通过 2-已拒绝 |
| created_at | date | 数据创建时间，可视为用户申请时间 |
| user | array | 申请者用户信息，参考对应用户数据 |
| post | array | 申请的帖子信息，参考帖子数据 |

## 申请帖子置顶

```
POST /pinned/posts/:post
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|amount|integer| 必须 置顶金额|
|day|integer|必须 置顶天数|

### 响应

```
status 201
```

## 通过帖子置顶

```
PATCH /pinned/posts/:post/accept
```

### 响应

```
status 201
```

## 拒绝帖子置顶

```
PATCH /pinned/posts/:post/reject
```

### 响应

```
status 201
```

## 帖子评论申请置顶列表

```
GET /pinned/comments
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|after|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|post|integer|默认 全部，某个帖子下的评论置顶需传帖子id|

### 响应

```
status 200
```

```json
[
    {
        "id": 4,
        "channel": "comment",
        "raw": 1,
        "target": 4,
        "user_id": 1,
        "target_user": 1,
        "amount": 200,
        "day": 1,
        "expires_at": "2017-12-02 01:57:30",
        "status": 1,
        "created_at": "2017-12-01 01:56:35",
        "updated_at": "2017-12-01 01:57:30",
        "comment": {
            "id": 4,
            "user_id": 1,
            "target_user": 1,
            "reply_user": 0,
            "body": "<http://www.baidu.com>",
            "commentable_id": 1,
            "commentable_type": "group-posts",
            "created_at": "2017-11-27 03:31:38",
            "updated_at": "2017-11-27 03:31:38"
        },
        "user": {
            "id": 1,
            "name": "root",
            "bio": null,
            "sex": 0,
            "location": null,
            "created_at": "2017-11-09 08:17:26",
            "updated_at": "2017-11-09 08:17:26",
            "avatar": "http://127.0.0.1/duibi/thinksns-plus/public/api/v2/users/1/avatar",
            "bg": null,
            "verified": null,
            "extra": {
                "user_id": 1,
                "likes_count": 4,
                "comments_count": 4,
                "followers_count": 0,
                "followings_count": 0,
                "updated_at": "2017-11-29 06:50:57",
                "feeds_count": 9,
                "questions_count": 0,
                "answers_count": 0,
                "checkin_count": 0,
                "last_checkin_count": 0,
                "live_zans_count": 0,
                "live_zans_remain": 0,
                "live_time": 0
            }
        },
        "post": {
            "id": 1,
            "group_id": 1,
            "user_id": 1,
            "title": "123123",
            "body": "士大夫",
            "summary": "",
            "likes_count": 4,
            "comments_count": 1,
            "views_count": 0,
            "created_at": "2017-11-27 11:20:07",
            "updated_at": "2017-11-29 06:50:57"
        }
    }
]
```

### 返回参数说明


| 名称 | 类型 | 说明 |
|:----:|:----:|:-----|
| id   | int | 数据id |
|channel | string | 置顶类型 有`comment` 评论置顶和`post`帖子置顶两种，该接口中始终为`comment`|
| raw | int  | 当`channel` 为`comment`时为帖子id，该接口中始终为对应的帖子id |
| target | int | 帖子id |
| user_id | int | 申请人id |
| target_user | int | 申请对方id，该接口中始终等于当前认证用户id |
| amount | int | 置顶金额，分单位 |
| day | int | 置顶天数 |
| expires_at | date | 置顶过期时间 （被拒绝时为拒绝处理的操作时间）|
| status | int | 处理状态 0-待审核 1-已通过 2-已拒绝 |
| created_at | date | 数据创建时间，可视为用户申请时间 |
| user | array | 申请者用户信息，参考对应用户数据 |
| post | array | 对应的帖子信息，参考帖子数据 |
| comment | array | 申请置顶的评论信息，参考评论数据 |


## 帖子评论申请置顶

```
POST /pinned/comments/:comment
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|amount|integer| 必须 置顶金额|
|day|integer|必须 置顶天数|

### 响应

```
status 201
```

## 通过帖子评论申请置顶

```
PATCH /pinned/comments/:comment/accept
```

### 响应

```
status 201
```

## 拒绝帖子评论申请置顶

```
PATCH /pinned/comments/:comment/reject
```

### 响应

```
status 201
```

## 圈主和管理员置顶帖子

```
POST /pinned/posts/:post/create
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|day|integer|必须 置顶天数|

### 响应

```
status 201
```
## 圈主和管理员取消置顶帖子

```
PATCH /pinned/posts/:post/cancel
```

### 响应

```
status 201
```
