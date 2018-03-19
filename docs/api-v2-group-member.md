---
id: api-v2-group-member
title: 圈子 · 成员
---

- [某个圈子成员列表](#某个圈子成员列表)
- [圈子审核成员记录列表](#圈子审核成员记录列表)
- [圈子成员角色统计](#圈子成员角色统计)

## 某个圈子成员列表

```
GET /groups/:group/members
```

### 响应

```
status 200
```

### 参数说明
| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|after|inegter|默认 0，翻页标示|
|name|string|成员名搜索成员，仅搜索传|
|type|string|默认 all, all-所有, manager-管理员(包含圈主), member-成员, blacklist-黑名单, audit - 带审核，audit_user - 审核通过且未被拉黑成员|

```json
{
    {
        "id": 4,// 成员唯一id
        "group_id": 3,// 圈子唯一id
        "user_id": 2,// 用户id
        "audit": 0, // 0 待审核 1 已审核 2已驳回
        "role": "founder",// 角色，member - 成员 administrator - 管理者、founder - 创建者
        "disabled": 0,// 是否拉黑 1拉黑
        "created_at": null,
        "updated_at": null,
        "user": {
            "id": 2,
            "name": "大牛",
            "bio": "策四",
            "sex": 2,
            "location": null,
            "created_at": "2017-10-23 01:17:34",
            "updated_at": "2017-12-01 03:46:14",
            "avatar": "http://thinksns-plus.dev/api/v2/users/2/avatar",
            "bg": null,
            "verified": {
                "type": "user",
                "icon": "http://thinksns-plus.dev/storage/certifications/000/000/0us/er.png",
                "description": "认证测试"
            },
            "extra": {
                "user_id": 2,
                "likes_count": 10,
                "comments_count": 40,
                "followers_count": 3,
                "followings_count": 5,
                "updated_at": "2017-11-16 08:24:44",
                "feeds_count": 25,
                "questions_count": 16,
                "answers_count": 16,
                "checkin_count": 7,
                "last_checkin_count": 1
            }
        }
    }
}
```

## 圈子审核成员记录列表

```
GET /user-group-audit-members
```

### 响应

```
status 200
```

### 参数说明
| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|after|inegter|默认 0，翻页标示, 传入记录id|

```json
[
    {
        "id": 5, // 记录id
        "group_id": 56, // 圈子id
        "user_id": 18, // 用户id
        "member_id": 225, // 成员id
        "status": 0, // 记录处理状态 0-待审核 1-通过 2-拒绝
        "auditer": null, // 审核人员id，未审核时为null
        "audit_at": null, // 审核时间，未审核时为null
        "created_at": "2017-12-22 06:21:24",
        "updated_at": "2017-12-22 06:21:24",
        "user": { //申请用户信息
            "id": 18,
            "name": "仨仨仨仨仨",
            "location": null,
            "sex": 1,
            "bio": "没有",
            "created_at": "2017-04-10 02:10:22",
            "updated_at": "2017-11-10 09:54:09",
            "avatar": null,
            "bg": null,
            "verified": {
                "type": "user",
                "icon": null,
                "description": "玄奘普法"
            },
            "extra": {
                "user_id": 18,
                "likes_count": 52,
                "comments_count": 84,
                "followers_count": 24,
                "followings_count": 18,
                "updated_at": "2017-12-20 15:03:57",
                "feeds_count": 17,
                "questions_count": 10,
                "answers_count": 14,
                "checkin_count": 2,
                "last_checkin_count": 1,
                "live_zans_count": 0,
                "live_zans_remain": 0,
                "live_time": 0
            }
        },
        "audit_user": null, // 审核者用户信息
        "member_info": { // 申请人成员信息，在申请人退圈等操作后为null
            "id": 225,
            "group_id": 56,
            "user_id": 18,
            "audit": 0,
            "role": "member",
            "disabled": 0,
            "created_at": "2017-12-22 06:21:24",
            "updated_at": "2017-12-22 06:21:24"
        },
        "group": {  // 所属圈子信息
            "id": 56,
            "name": "CC收费",
            "user_id": 36,
            "category_id": 4,
            "location": null,
            "longitude": null,
            "latitude": null,
            "geo_hash": null,
            "allow_feed": 0,
            "mode": "paid",
            "money": null,
            "summary": "哈哈哈哈，我是阿尔丹",
            "notice": null,
            "permissions": "member,administrator,founder",
            "users_count": 1,
            "posts_count": 0,
            "audit": 1,
            "created_at": "2017-12-21 07:30:51",
            "updated_at": "2017-12-22 06:24:32",
            "deleted_at": null,
            "avatar": "http://test-plus.zhibocloud.cn/storage/group/avatars/000/000/000/56.jpeg"
        }
    }
]
```
## 圈子成员角色统计

```
GET /groups/:group/role/count
```

### 响应

```
status 200
```

```json
{
    "member_count": 0, // 成员数量
    "admin_count": 0 // 管理员数量
}
```
