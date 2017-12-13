# 圈子成员

- [某个圈子成员列表](#某个圈子成员列表)
- [圈子待审核成员列表](#圈子待审核成员列表)

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
|type|string|默认 all, all-所有, manager-管理员, member-成员, blacklist-黑名单|

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

## 圈子待审核成员列表

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
|after|inegter|默认 0，翻页标示|

```json
[
    {
        "id": 34,
        "group_id": 3,
        "user_id": 3,
        "audit": 0,
        "role": "member",
        "disabled": 0,
        "created_at": "2017-12-11 03:42:33",
        "updated_at": "2017-12-11 03:45:34",
        "group": {//申请加入的圈子信息
            "id": 3,
            "name": "篮球圈子",
            "user_id": 2,
            "category_id": 1,
            "location": null,
            "longitude": null,
            "latitude": null,
            "geo_hash": null,
            "allow_feed": 0,
            "mode": "paid",
            "permissions": "member,administrator,founder",
            "money": 100,
            "summary": "篮球圈子",
            "notice": "篮球圈子",
            "users_count": 1,
            "posts_count": 0,
            "audit": 1,
            "created_at": "2017-11-28 09:45:17",
            "updated_at": "2017-11-28 09:45:17",
            "deleted_at": null,
            "avatar": null
        },
        "user": {// 申请者信息
            "id": 3,
            "name": "zhangsan1",
            "bio": "就是测试测试",
            "sex": 1,
            "location": null,
            "created_at": "2017-10-23 01:17:34",
            "updated_at": "2017-10-25 03:03:46",
            "avatar": "http://thinksns-plus.dev/api/v2/users/3/avatar",
            "bg": null,
            "verified": {
                "type": "user",
                "icon": "http://thinksns-plus.dev/storage/certifications/000/000/0us/er.png",
                "description": "我是个人认证"
            },
            "extra": null
        }
    }
]
```





