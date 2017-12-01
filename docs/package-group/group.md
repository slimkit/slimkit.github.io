# 圈子

- [分类下圈子列表](#分类下圈子列表)
- [全部圈子列表](#全部圈子列表)
- [推荐圈子列表](#推荐圈子列表)
- [我的圈子列表](#我的圈子列表)

## 圈子帖子列表

```
GET /categories/:category/groups
```

### 响应

```
status 200
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 20 ，数据返回条数 默认为20|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|

```json
[
    {
        "id": 4,
        "name": "赛事圈子",
        "user_id": 1,
        "category_id": 1,
        "location": null,
        "longitude": null,
        "latitude": null,
        "geo_hash": null,
        "allow_feed": 0,
        "mode": "public",
        "permissions": "member,administrator,founder",
        "money": 0,
        "summary": "赛事圈子",
        "notice": "赛事圈子",
        "users_count": 0,
        "posts_count": 0,
        "audit": 1,
        "created_at": "2017-11-28 09:45:17",
        "updated_at": "2017-11-28 09:45:17",
        "joined": {
            "id": 11,
            "group_id": 3,
            "user_id": 1,
            "audit": 2,
            "role": "member",
            "disabled": 0,
            "created_at": "2017-12-01 03:42:44",
            "updated_at": "2017-12-01 04:01:34"
        },
        "avatar": null
    },
]
```

### 返回参数说明
| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|id|integer| 圈子唯一id|
|name|string|圈子名称|
|user_id|integer|所属用户id|
|category_id|integer|圈子所属分类id|
|location|string|圈子位置|
|longitude|string|经度|
|latitude|string|纬度|
|geo_hash|string|geoHash|
|allow_feed|integer|是否允许同步动态，0 不允许 1允许|
|mode|string|圈子类型:public: 公开，private：私有，paid：付费的|
|permissions|发帖权限:member,administrator,founder 所有，administrator,founder 管理员和圈主，administrator圈主|
|money|string|如果 mode 为 paid 用于标示收费金额|
|summary|string|简介|
|notice|string|公告|
|users_count|integer|成员统计|
|posts_count|integer|帖子统计|
|audit|integer|审核状态:0 未审核 1 通过 2 拒绝 |
|created_at|string|创建时间|
|update_at|string|更新时间|
|joined|object|是否加入：null未加入|
|avatar|地址|头像地址|

## 全部圈子列表

```
GET /groups
```

### 响应

```
status 200
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 20 ，数据返回条数 默认为20|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|keyword|string|用于搜索圈子，按圈名搜索|
|category_id|integer|圈子分类id|

```json
[
    {
        "id": 4,
        "name": "赛事圈子",
        "user_id": 1,
        "category_id": 1,
        "location": null,
        "longitude": null,
        "latitude": null,
        "geo_hash": null,
        "allow_feed": 0,
        "mode": "public",
        "permissions": "member,administrator,founder",
        "money": 0,
        "summary": "赛事圈子",
        "notice": "赛事圈子",
        "users_count": 0,
        "posts_count": 0,
        "audit": 1,
        "created_at": "2017-11-28 09:45:17",
        "updated_at": "2017-11-28 09:45:17",
        "joined": {
            "id": 11,
            "group_id": 3,
            "user_id": 1,
            "audit": 2,
            "role": "member",
            "disabled": 0,
            "created_at": "2017-12-01 03:42:44",
            "updated_at": "2017-12-01 04:01:34"
        },
        "avatar": null
    },
]
```

### 返回参数说明
| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|id|integer| 圈子唯一id|
|name|string|圈子名称|
|user_id|integer|所属用户id|
|category_id|integer|圈子所属分类id|
|location|string|圈子位置|
|longitude|string|经度|
|latitude|string|纬度|
|geo_hash|string|geoHash|
|allow_feed|integer|是否允许同步动态，0 不允许 1允许|
|mode|string|圈子类型:public: 公开，private：私有，paid：付费的|
|permissions|发帖权限:member,administrator,founder 所有，administrator,founder 管理员和圈主，administrator圈主|
|money|string|如果 mode 为 paid 用于标示收费金额|
|summary|string|简介|
|notice|string|公告|
|users_count|integer|成员统计|
|posts_count|integer|帖子统计|
|audit|integer|审核状态:0 未审核 1 通过 2 拒绝 |
|created_at|string|创建时间|
|update_at|string|更新时间|
|joined|object|是否加入：null未加入|
|avatar|地址|头像地址|

## 推荐圈子列表

```
GET /recommend/groups
```

### 响应
```
status 200
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 20 ，数据返回条数 默认为20|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|type|string|random 随机获取|

```json
[
    {
        "id": 4,
        "name": "赛事圈子",
        "user_id": 1,
        "category_id": 1,
        "location": null,
        "longitude": null,
        "latitude": null,
        "geo_hash": null,
        "allow_feed": 0,
        "mode": "public",
        "permissions": "member,administrator,founder",
        "money": 0,
        "summary": "赛事圈子",
        "notice": "赛事圈子",
        "users_count": 0,
        "posts_count": 0,
        "audit": 1,
        "created_at": "2017-11-28 09:45:17",
        "updated_at": "2017-11-28 09:45:17",
        "joined": {
            "id": 11,
            "group_id": 3,
            "user_id": 1,
            "audit": 2,
            "role": "member",
            "disabled": 0,
            "created_at": "2017-12-01 03:42:44",
            "updated_at": "2017-12-01 04:01:34"
        },
        "avatar": null
    },
]
```

### 返回参数说明
| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|id|integer| 圈子唯一id|
|name|string|圈子名称|
|user_id|integer|所属用户id|
|category_id|integer|圈子所属分类id|
|location|string|圈子位置|
|longitude|string|经度|
|latitude|string|纬度|
|geo_hash|string|geoHash|
|allow_feed|integer|是否允许同步动态，0 不允许 1允许|
|mode|string|圈子类型:public: 公开，private：私有，paid：付费的|
|permissions|发帖权限:member,administrator,founder 所有，administrator,founder 管理员和圈主，administrator圈主|
|money|string|如果 mode 为 paid 用于标示收费金额|
|summary|string|简介|
|notice|string|公告|
|users_count|integer|成员统计|
|posts_count|integer|帖子统计|
|audit|integer|审核状态:0 未审核 1 通过 2 拒绝 |
|created_at|string|创建时间|
|update_at|string|更新时间|
|joined|object|是否加入：null未加入|
|avatar|地址|头像地址|

## 我的圈子列表

```
GET /user-groups
```

### 响应
```
status 200
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 20 ，数据返回条数 默认为20|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|type|string|默认: join, join 我加入 audit 待审核|

```json
[
    {
        "id": 4,
        "name": "赛事圈子",
        "user_id": 1,
        "category_id": 1,
        "location": null,
        "longitude": null,
        "latitude": null,
        "geo_hash": null,
        "allow_feed": 0,
        "mode": "public",
        "permissions": "member,administrator,founder",
        "money": 0,
        "summary": "赛事圈子",
        "notice": "赛事圈子",
        "users_count": 0,
        "posts_count": 0,
        "audit": 1,
        "created_at": "2017-11-28 09:45:17",
        "updated_at": "2017-11-28 09:45:17",
        "joined": {
            "id": 11,
            "group_id": 3,
            "user_id": 1,
            "audit": 2,
            "role": "member",
            "disabled": 0,
            "created_at": "2017-12-01 03:42:44",
            "updated_at": "2017-12-01 04:01:34"
        },
        "avatar": null
    },
]
```

### 返回参数说明
| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|id|integer| 圈子唯一id|
|name|string|圈子名称|
|user_id|integer|所属用户id|
|category_id|integer|圈子所属分类id|
|location|string|圈子位置|
|longitude|string|经度|
|latitude|string|纬度|
|geo_hash|string|geoHash|
|allow_feed|integer|是否允许同步动态，0 不允许 1允许|
|mode|string|圈子类型:public: 公开，private：私有，paid：付费的|
|permissions|发帖权限:member,administrator,founder 所有，administrator,founder 管理员和圈主，administrator圈主|
|money|string|如果 mode 为 paid 用于标示收费金额|
|summary|string|简介|
|notice|string|公告|
|users_count|integer|成员统计|
|posts_count|integer|帖子统计|
|audit|integer|审核状态:0 未审核 1 通过 2 拒绝 |
|created_at|string|创建时间|
|update_at|string|更新时间|
|joined|object|是否加入：null未加入|
|avatar|地址|头像地址|











