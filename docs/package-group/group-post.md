# 圈子帖子

- [圈子帖子列表](#圈子帖子列表)
- [圈子帖子详情](#圈子帖子详情)
- [圈子帖子创建](#圈子帖子创建)
- [圈子帖子更新](#圈子帖子更新)
- [圈子帖子删除](#圈子帖子删除)

## 圈子帖子列表

```
GET /groups/:group/posts
```

### 响应

```
status 200
```

```json
[
    {
        "id": 88,
        "group_id": 1,
        "user_id": 1,
        "title": "内容标题",
        "body": "帖子内容",
        "summary": "帖子介绍",
        "likes_count": 0,
        "comments_count": 0,
        "views_count": 0,
        "created_at": "2017-11-28 07:12:20",
        "updated_at": "2017-11-28 07:12:20",
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
| body | string | markdown 内容 |
| summary | string | markdown 内容 |
| likes_count | int | 喜欢数量统计 |
| comments_count | int | 评论数量统计 |
| views_count | int | 查看数量统计 |
|type | string| 默认: new, latest_post 最新帖子，latest_reply最新回复|
|limit|integer|	默认 20 ，数据返回条数 默认为20|
|after|integer|	默认 0 ，数据翻页标识|

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
| summary | string | markdown 内容 |
| likes_count | int | 喜欢数量统计 |
| comments_count | int | 评论数量统计 |
| views_count | int | 查看数量统计 |
|liked|是否喜欢|true or false|

## 圈子帖子创建
## 圈子帖子更新
## 圈子帖子删除










