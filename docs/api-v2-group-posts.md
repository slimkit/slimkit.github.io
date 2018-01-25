---
id: api-v2-group-posts
title: 帖子
---

- [圈子帖子列表](#圈子帖子列表)
- [圈子帖子详情](#圈子帖子详情)
- [圈子帖子创建](#圈子帖子创建)
- [圈子帖子更新](#圈子帖子更新)
- [圈子帖子删除](#圈子帖子删除)
- [我的帖子列表](#我的帖子列表)
- [全部帖子列表包含搜索](#全部帖子列表包含搜索)

## 圈子帖子列表

```
GET /groups/:group/posts
```

### 响应

```
status 200
```
### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|type | string| 默认:latest_post, latest_post 最新帖子,latest_reply最新回复|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|

```json
[
    {
        "id": 88,
        "group_id": 1,
        "user_id": 1,
        "title": "内容标题",
        "summary": "帖子介绍",
        "likes_count": 0,
        "comments_count": 0,
        "views_count": 0,
        "liked":true,
        "collected":true,
        "created_at": "2017-11-28 07:12:20",
        "updated_at": "2017-11-28 07:12:20",
        "images": [
            {
                "id": 113,
                "size": "397x246"
            },
            {
                "id": 115,
                "size": "397x246"
            }
        ],
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
                "comments_count": 3,
                "followers_count": 0,
                "followings_count": 6,
                "updated_at": "2017-11-27 07:25:04",
                "feeds_count": 8,
                "questions_count": 2,
                "answers_count": 0,
                "checkin_count": 7,
                "last_checkin_count": 1
            }
        }
    }
]
```

### 返回参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| gourp_id | int | 所属圈子 |
| user_id | int | 发布者 |
| title | string | 标题 |
| summary | string | 列表专用字段，概述，简短内容 |
| likes_count | int | 喜欢数量统计 |
| comments_count | int | 评论数量统计 |
| views_count | int | 查看数量统计 |
|collected|bool|是否收藏true or false|
|liked|bool|是否点赞true or false|
|images|array|附件|

## 圈子帖子详情

```
GET /groups/:group/posts/:post
```

### 响应

```
status 200
```

```json
{
    "id": 81,
    "group_id": 1,
    "user_id": 1,
    "title": "这是帖11",
    "body": "这是帖子",
    "summary": "",
    "likes_count": 0,
    "comments_count": 0,
    "views_count": 0,
    "created_at": "2017-11-28 06:46:02",
    "updated_at": "2017-11-28 07:16:46",
    "liked": false,
    "collected": false,
    "reward_amount": 0,
    "reward_number": 0,
    "group": {
        "id": 1,
        "name": "哈哈哈",
        "user_id": 1,
        "category_id": 1,
        "location": null,
        "longitude": null,
        "latitude": null,
        "geo_hash": null,
        "allow_feed": 0,
        "mode": "public",
        "money": 0,
        "summary": "简介\n",
        "notice": "这是公告",
        "users_count": 1,
        "posts_count": 47,
        "audit": 1,
        "created_at": null,
        "updated_at": "2017-11-28 07:12:20"
    },
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
            "comments_count": 3,
            "followers_count": 0,
            "followings_count": 6,
            "updated_at": "2017-11-27 07:25:04",
            "feeds_count": 8,
            "questions_count": 2,
            "answers_count": 0,
            "checkin_count": 7,
            "last_checkin_count": 1
        }
    }
}
```
### 返回参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| gourp_id | int | 所属圈子 |
| user_id | int | 发布者 |
| title | string | 标题 |
| body | string | markdown 内容 |
| summary | string | 列表专用字段，概述，简短内容 |
| likes_count | int | 喜欢数量统计 |
| comments_count | int | 评论数量统计 |
| views_count | int | 查看数量统计 |
| reward_amount | int | 打赏金额统计 |
| reward_number | int | 打赏人数统计 |
|collected|bool|是否收藏true or false|
|liked|bool|是否点赞true or false|

## 圈子帖子创建

### 参数说明

```
POST /groups/:group/posts
```

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| title | int | 必须 帖子标题 |
| body | int | 必须 帖子内容 |
| summary | string | 必须 允许为空 列表专用字段，概述，简短内容|
| images | array |  文件id,例如[1,2,3]，当summay为空时必须传|
| sync_feed | int | 同步至动态，同步需要传sync_feed = 1 |
| feed_from | int | 设备标示 同步动态需要传 1:pc 2:h5 3:ios 4:android 5:其他|
### 响应

```
status 201
```

```json
{
    "message": "操作成功",
    "post": {
        "title": "这是帖11",
        "body": "这是帖子",
        "summary": "12321321",
        "user_id": 1,
        "group_id": 1,
        "updated_at": "2017-11-28 09:45:17",
        "created_at": "2017-11-28 09:45:17",
        "id": 121
    }
}
```
## 圈子帖子更新

### 参数说明

```
PUT /groups/:group/posts/:post
```

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| title | int | 必须 帖子标题 |
| body | int | 必须 帖子内容 |
| summary | string | 必须 允许为空 列表专用字段，概述，简短内容|
| images | array |  文件id,例如[1,2,3]，当summay为空时必须传|
| sync_feed | int | 同步至动态，同步需要传sync_feed = 1 |
| feed_from | int | 设备标示 同步动态需要传 1:pc 2:h5 3:ios 4:android 5:其他|

### 响应

```
status 201
```

```json
{
    "message": "操作成功",
    "post": {
        "title": "这是帖11",
        "body": "这是帖子",
        "summary": "12321321",
        "user_id": 1,
        "group_id": 1,
        "updated_at": "2017-11-28 09:45:17",
        "created_at": "2017-11-28 09:45:17",
        "id": 121
    }
}
```
## 圈子帖子删除
```
DELETE /groups/:group/posts/:post
```

### 响应

```
status 204 No Content
```

## 我的帖子列表

```
GET /user-group-posts
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|type | string| 默认:1 , 1-发布的 2- 已置顶 3-置顶待审|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|

### 响应

```
status 200
```

## 全部帖子列表包含搜索

```
GET /group-posts
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|keyword | string| 搜索关键词，模糊匹配圈子名称|
|group_id | integer| 获取某个圈子下面的全部帖子|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|

### 响应

```
status 200
```
