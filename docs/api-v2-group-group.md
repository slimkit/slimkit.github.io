---
id: api-v2-group-group
title: 圈子
---

- [分类下圈子列表](#分类下圈子列表)
- [全部圈子列表](#全部圈子列表)
- [推荐圈子列表](#推荐圈子列表)
- [我的圈子列表](#我的圈子列表)
- [用户圈子列表](#用户圈子列表)
- [圈子详情](#圈子详情)
- [圈子总数](#圈子总数)
- [加入圈子](#加入圈子)
- [设置圈子权限](#设置圈子权限)
- [退出圈子](#退出圈子)
- [附近圈子](#附近圈子)
- [创建圈子](#创建圈子)
- [修改圈子](#修改圈子)
- [获取圈子协议](#获取圈子协议)

### 响应内容

```json5
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
        "join_income_count": 0,
        "pinned_income_count": 0,
        "excellen_posts_count": 0, // 精华贴数量
        "joined": {
            "id": 11,// 成员唯一id
            "group_id": 3,// 所属圈子id
            "user_id": 1,// 用户Id
            "audit": 2,// 0 待审核 1已审核 2驳回
            "role": "member",// 角色 member-普通成员 administrator - 管理者 founder - 创建者 
            "disabled": 0,// 是否被拉黑禁用 1-禁用 0-正常
            "created_at": "2017-12-01 03:42:44",
            "updated_at": "2017-12-01 04:01:34"
        },
        "avatar": null,
        "im_group_id": null, // 圈子绑定的群聊 ID
    },
]
```

### 返回参数
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
|permissions|string|发帖权限:member,administrator,founder 所有，administrator,founder 管理员和圈主，founder圈主|
|money|string|如果 mode 为 paid 用于标示收费金额|
|summary|string|简介|
|notice|string|公告|
|users_count|integer|成员统计|
|posts_count|integer|帖子统计|
|audit|integer|审核状态:0 未审核 1 通过 2 拒绝 |
|created_at|string|创建时间|
|update_at|string|更新时间|
|join_income_count|integer|加圈收益统计|
|pinned_income_count|integer|置顶收益统计|
|joined|object|是否加入：null未加入|
|avatar|地址|头像地址|

## 分类下圈子列表

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
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|

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
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|keyword|string|用于搜索圈子，按圈名搜索|
|category_id|integer|圈子分类id|
| `id` | `string` | 按照圈子 ID 返回列表，多个圈子 ID 可用半角 `,` 进行分割。 |

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

## 我的圈子列表


```
GET /user-groups
```

### 响应
```
status 200
```
```json5
[
    {
        "id": 1,
        "name": "圈子1",
        "user_id": 1,
        "category_id": 1,
        "location": null,
        "longitude": null,
        "latitude": null,
        "geo_hash": null,
        "allow_feed": 0,
        "mode": "public",
        "money": 0,
        "summary": "111",
        "notice": "2222",
        "permissions": "member,administrator,founder",
        "users_count": 1,
        "posts_count": 0,
        "audit": 1,
        "im_group_id": null,
        "excellen_posts_count": 0,
        "created_at": "2018-08-28 04:03:25",
        "updated_at": "2018-08-28 04:03:25",
        "deleted_at": null,
        "joined": null,
        "join_at": "2018-08-28T04:01:25Z", // 待审核独有，申请加入时间！
        "avatar": "http://localhost:8000/storage/group/avatars/000/000/000/01.png?v=1534836577"
    }
]
```
### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 20 ，数据返回条数 默认为20|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|type|string|默认: join, join 我加入 audit 待审核 allow_post 可以发帖的|

## 用户圈子列表

```
GET /api/v2/plus-group/groups/users
```

## 输入
| 名称 | 描述 |
|:----:|:-----|
| user_id | 用户id |
| type | 查询类型，目前只有`join`，用户加入的圈子 |


## 圈子详情

```
GET /groups/:group
```

### 响应
```
status 200
```

```json5
{
    "id": 1,
    "name": "垃圾",
    "user_id": 1,
    "category_id": 1,
    "location": "啦啦啦",
    "longitude": "1.1",
    "latitude": "1.1",
    "geo_hash": "1212",
    "allow_feed": 0,
    "mode": "paid",
    "money": 200,
    "summary": "简介",
    "notice": "公告",
    "permissions": "member,administrator,founder",
    "users_count": 1,
    "posts_count": 0,
    "audit": 1,
    "created_at": "2017-11-27 10:26:47",
    "updated_at": "2017-12-04 01:26:10",
    "deleted_at": null,
    "im_group_id": null, // 圈子绑定的群聊 ID
    "join_income_count": "200",
    "pinned_income_count": 0,
    "excellen_posts_count": 0, // 精华贴数量
    "joined": {
        "id": 2,
        "group_id": 1,
        "user_id": 1,
        "audit": 1,
        "role": "founder",
        "disabled": 0,
        "created_at": "2017-11-27 17:28:06",
        "updated_at": "2017-11-27 17:28:06"
    },
    "avatar": null,
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
    "tags": [
        {
            "id": 50,
            "name": "动漫",
            "tag_category_id": 5,
            "weight": 15
        }
    ],
    "category": {
        "id": 1,
        "name": "123123",
        "sort_by": 1000,
        "status": 0,
        "created_at": "2017-11-27 10:06:38",
        "updated_at": "2017-11-27 10:06:40"
    },
    "founder": {
        "id": 2,
        "group_id": 1,
        "user_id": 1,
        "audit": 1,
        "role": "founder",
        "disabled": 0,
        "created_at": "2017-11-27 17:28:06",
        "updated_at": "2017-11-27 17:28:06",
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
}
```

### 返回参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| blacklist_count | int | 黑名单人数 |
| pinned_income_count | int | 圈子内置顶总收入，分单位，当前用户为圈主时存在该字段 |
| join_income_count | int | 圈子加人总收入，分单位，当前用户为圈主时存在该字段 |
| tags | array | 圈子标签列表 |
| category | array | 圈子所属分类信息 |
| user | array | 圈子创建者用户信息 |
| founder | array | 圈主信息 |
| founder.user | array | 圈主用户信息 |


## 圈子总数

```
GET /groups/count
```

### 响应

```
status 200
```

```json
{
    "count": 100
}
```

## 加入圈子

```
PUT /groups/:group
```

### 响应

```
status 201
```

## 设置圈子权限

```
PATCH /groups/:group/permissions
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|permissions|array| ['member', 'administrator','founder'] 所有，['administrator', 'founder'] 管理员和圈主，[ 'founder'] 圈主|

### 响应

```
status 201
```


## 退出圈子

```
DELETE /groups/:group/exit
```

### 响应

```
status 204 no content
```

## 附近圈子

```
GET /round/groups
```

### 响应

```
status 200
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|longitude|strig|必须 经度|
|latitude|strig|必须 纬度|

## 创建圈子

```
POST /categories/:category/groups
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|avatar|file| 必须 圈子头像|
|name|string|必须 圈子名称|
|summary|string|圈子简介|
|notice|string|圈子公告|
|tags|array| 必须 圈子标签 格式:[{id:1},{id:3}...]|
|mode|string|必须 圈子类别 public: 公开，private：私有，paid：付费的|
|money|int|收费圈子进圈金额，如果 mode 为 paid 必须存在|
|allow_feed|int|是否允许同步动态 同步需要传 1|
|permissions|string|发帖权限:member,administrator,founder 所有，administrator,founder 管理员和圈主，administrator圈主|
|location|string|地区，当经度 纬度， GeoHash 任意一个存在，则本字段必须存在|
|latitude|string|纬度，当经度 地区，GeoHash 任意一个存在，则本字段必须存在|
|longitude|string|经度，当纬度 地区 GeoHash 任意一个存在，则本字段必须存在|
|geo_hash|string|geoHash，当纬度 地区 经度 任意一个存在，则本字段必须存在|

### 响应
```
status 201
```

## 修改圈子

```
POST /groups/:group
```

### 参数

```
同创建，有修改项则传
```

### 响应
```
status 201
```

## 获取圈子协议

```
GET /groups/protocol
```

### 响应

```
status 200
```

```json
{
    "protocol": "" // 协议内容，默认为''
}
```

## 圈子绑定群聊 ID

```
PUT /group/groups/:groupID/bind-im-group
```

变量：

| 变量 | 描述 |
| `groupID` | 圈子 ID |

表单传递参数：

| 参数 | 类型 | 描述 |
|----|-----|-----|
| `id` | `string` | 群聊 ID，环信的群组 ID |

响应：

```
Status: 204 No Content
```
