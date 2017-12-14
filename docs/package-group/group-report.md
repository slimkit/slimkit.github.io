# 圈子举报

- [举报列表](#举报列表)
- [帖子举报](#帖子举报)
- [评论举报](#评论举报)
- [举报通过](#举报通过)
- [举报拒绝](#举报拒绝)
- [举报圈子](#举报圈子)


## 举报列表

```
GET /reports
```

### 响应

```
status 200
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|group_id | integer| 必须 圈子id|
|status | integer| 状态 默认全部，0-未处理 1-已处理 2-已驳回|
|limit|integer| 默认 15 ，数据返回条数|
|after|integer|默认 0 ，翻页标示|

```json
[
    {
        "id": 1,// 举报唯一id
        "user_id": 1,// 举报人id
        "target_id": 1,// 被举报人 id
        "group_id": 1,// 圈子id
        "resource_id": 119,// type： post-帖子id comment-评论id
        "content": "哈哈",// 举报内容
        "type": "post",// 举报类型 post 帖子举报 comment 评论举报
        "status": 1, // 举报状态 0 待审核 1 已审核 2 已驳回
        "cause": null,// 驳回原因
        "handler": 2,// 审核处理人 id
        "created_at": "2017-11-30 10:21:52",
        "updated_at": "2017-12-01 06:11:24",
        "resource": null,// 被举报的资源信息
        "user": {// 举报人信息
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
        "target": { // 被举报人信息
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
        }
    }
]
```

## 帖子举报

```
POST /reports/posts/:post
```

### 响应

```
status 201
```
### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|content | string| 必须 举报内容|

## 评论举报

```
POST /reports/comments/:comment
```

### 响应

```
status 201
```
### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|content | string| 必须 举报内容|

## 举报通过

```
PATCH /reports/:report/accept
```

### 响应

```
status 201
```

## 举报拒绝

```
PATCH /reports/:report/reject
```

### 响应

```
status 201
```

## 举报圈子

```
POST /groups/:group/reports
```

### 可选参数

| 名称 | 描述 |
|:----:|:-----|
| reason | 举报理由 |

### 响应

```
Http Status 201
```

```json
{
    "message": [
        "操作成功"
    ]
}
```



