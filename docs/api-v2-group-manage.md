---
id: api-v2-group-manage
title: 圈子 · 管理
---

- [圈子收入记录](#圈子收入记录)
- [移除圈子成员](#移除圈子成员)
- [设置成员为管理员](#设置成员为管理员)
- [移除一个成员的管理员角色](#移除一个成员的管理员角色)
- [将一个成员加入黑名单](#将一个成员加入黑名单)
- [将一个成员移除黑名单](#将一个成员移除黑名单)
- [审核圈子加入请求](#审核圈子加入请求)
- [更改圈子发帖权限](#更改圈子发帖权限)
- [转让圈子](#转让圈子)

## 圈子收入记录

```
GET /groups/:group/incomes
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|after|integer|默认 0 ，翻页标识。|
|start|integer|秒级时间戳，起始筛选时间 |
|end|integer|秒级时间戳，结束筛选时间|
|type|string|默认 all, all-全部 join-成员加入 pinned-帖子置顶|

### 响应

```
status 200
```

```json
[
    {
        "id": 1,
        "group_id": 1,
        "subject": "root加入圈子费用",
        "type": 1,
        "amount": 200,
        "user_id": 1,
        "created_at": "2017-12-04 01:26:10",
        "updated_at": "2017-12-04 01:26:10",
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
        }
    }
]
```

#### 返回参数

| 名称 | 类型  | 说明 |
|:----:|:------|:-----|
| id   | int   | 收入记录id |
| group_id | int | 所属圈子id |
| subject | string | 收入说明 |
| type | int | 1-加入圈子收入 2-帖子置顶收入 |
| amount | int | 收入金额，分单位 |
| user_id | int | 来源用户id |
| user | array | 来源用户信息 |

## 移除圈子成员

```
DELETE /groups/:group/members/:member
```

### 响应

```
status 204
```

## 设置成员为管理员

```
PUT /groups/:group/managers/:member
```

### 响应

```
status 201
```

## 移除一个成员的管理员角色

```
DELETE /groups/:group/managers/:member
```

### 响应

```
status 204
```

## 将一个成员加入黑名单

```
PUT /groups/:group/blacklist/:member
```

### 响应

```
status 201
```

## 将一个成员移除黑名单

```
DELETE /groups/:group/blacklist/:member
```

### 响应

```
status 204
```

## 审核圈子加入请求

```
PATCH /groups/:group/members/:member/audit
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|status|int| 1-允许 2-拒绝|


## 更改圈子发帖权限

```
PATCH /groups/:group/permissions
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|permissions|array| 'member' - 允许成员发帖, 'administrator' - 允许管理员发帖, 'founder' - 允许圈主发帖|


### 响应

```
status 201
```

## 转让圈子

```
PATCH /groups/:group/owner
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| target | int | 被转让用户id |

### 响应

```
Status 201
```

```json
{
    "message": [
        "操作成功"
    ]
}
```
