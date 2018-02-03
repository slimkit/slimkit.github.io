---
id: api-v2-easemob
title: 环信
---

- [注册环信用户](#注册环信用户)
- [重置用户环信密码](#重置用户环信密码)
- [获取环信用户密码](#获取环信用户密码)
- [环信群组管理](#环信群组管理)

## 注册环信用户

- [注册单个环信用户](#注册单个环信用户)
- [批量注册环信用户](#批量注册环信用户);
- [为未注册环信用户注册环信](#为未注册环信用户注册环信);

```
POST /easemob/register/:user_id
```

##### 响应

```
Status: 201 OK
```

### 批量注册环信用户

```
POST /easemob/register
```

#### 参数

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| user_ids | 字符串 | 多个以英文 "," 隔开 |

##### 响应

```
Status: 201 OK
```

### 为未注册环信用户注册环信

```
POST /easemob/register-old-users
```

##### 响应

```
Status: 201 OK
```


## 重置用户环信密码

```
PUT /easemob/password
```

##### 响应

```
Status: 201 OK
```

## 获取环信用户密码

```
GET /easemob/password
```

##### 响应

```
Status: 201 OK
```

```json
{
    "message": [
        "成功"
    ],
    "im_pwd_hash": "2daefb9dcd6d7d7898b62cf85d0a9fc3"
}
```

| 名称 | 描述 |
|:----:|----|
| im_pwd_hash | 环信登录密码 |


## 环信群组管理

- [获取群信息](#获取群信息);
- [创建群组](#创建群组)
- [修改群信息](#修改群信息);
- [删除群组](#删除群组);
- [批量获取群头像](#批量获取群头像);
- [批量添加群成员](#批量添加群成员);
- [批量移除群成员](#批量移除群成员);

## 获取群信息

```
GET /easemob/group
```

#### 参数

| 参数 | 类型  | 描述 |
|:----:|:----:|----|
| im_group_id | Integer/String | | 必须，群组ID，如果多个以英文 "," 隔开 |

##### 响应

```
Status: 200 OK
```

```json
[
    {
        "id": "36036128342017",
        "name": "花儿巷",
        "description": "来自花儿巷的朋友",
        "membersonly": false,
        "allowinvites": true,
        "maxusers": 300,
        "owner": "1",
        "created": 1513765130162,
        "custom": "",
        "affiliations_count": 5,
        "affiliations": [
            {
                "id": 1,
                "name": "root",
                "bio": null,
                "sex": 0,
                "location": null,
                "created_at": "2017-12-17 14:34:13",
                "updated_at": "2017-12-17 14:34:13",
                "is_owner": 1,
                "avatar": null,
                "bg": null,
                "verified": null,
                "extra": null,
                "certification": null
            },
            {
                "id": 2,
                "name": "well",
                "bio": null,
                "sex": 0,
                "location": null,
                "created_at": "2017-12-18 07:30:39",
                "updated_at": "2017-12-18 07:30:39",
                "is_owner": 0,
                "avatar": null,
                "bg": null,
                "verified": null,
                "extra": null,
                "certification": null
            },
            {
                "id": 4,
                "name": "上档次",
                "bio": null,
                "sex": 0,
                "location": null,
                "created_at": "2017-12-19 02:36:00",
                "updated_at": "2017-12-19 06:14:12",
                "is_owner": 0,
                "avatar": null,
                "bg": null,
                "verified": null,
                "extra": null,
                "certification": null
            },
            {
                "id": 5,
                "name": "明夜",
                "bio": null,
                "sex": 0,
                "location": null,
                "created_at": "2017-12-19 02:41:59",
                "updated_at": "2017-12-19 06:24:25",
                "is_owner": 0,
                "avatar": null,
                "bg": null,
                "verified": null,
                "extra": null,
                "certification": null
            },
            {
                "id": 7,
                "name": "红玫王",
                "bio": null,
                "sex": 0,
                "location": null,
                "created_at": "2017-12-19 05:31:08",
                "updated_at": "2017-12-19 05:46:01",
                "is_owner": 0,
                "avatar": null,
                "bg": null,
                "verified": null,
                "extra": null,
                "certification": null
            }
        ],
        "public": true,
        "group_face": ""
    }
]
```

| 名称 | 描述 |
|:----:|----|
| id | 群组ID |
| name | 群组名称 |
| description | 群组描述 |
| membersonly | 加入群组是否需要群主或者群管理员审批。true：是，false：否 |
| allowinvites | 是否允许群成员邀请别人加入此群。 true：允许群成员邀请人加入此群，false：只有群主才可以往群里加人 |
| maxusers | 群成员上限，创建群组的时候设置 |
| owner | 群主的环信 uid |
| created | 群组创建时间 |
| affiliations_count | 现有成员总数 |
| public | 群组类型：true：公开群，false：私有群 |
| group_face | 群组头像 |
| affiliations.id | 用户uid |
| affiliations.name | 用户昵称 |
| affiliations.bio | 用户描述 |
| affiliations.sex | 用户性别，0 - Unknown, 1 - 男, 2 - 女 |
| affiliations.location | 用户的位置信息 |
| affiliations.created_at | 用户注册时间 |
| affiliations.updated_at | 用户核心资料更新时间 |
| affiliations.is_owner | 是否是群主，0-否，1-是 |
| affiliations.avatar | 用户头像接口地址 |
| affiliations.bg | 用户背景图片地址 |
| affiliations.verified | 用户的认证信息 |
| affiliations.certification | 用户认证分类 |

## 创建群组

```
POST /easemob/group
```

#### 参数

| 参数 | 类型 | 枚举 | 描述 |
|:----:|:----:|:----:|----|
| groupname | String | | 必须，群组名称 |
| desc | String | | 必须，群组描述 |
| public | Boolean | 1：公开，0：不公开 | 是否是公开群，默认是1 |
| maxusers | Integer | | 群组成员最大数（包括群主），值为数值类型，默认值200，最大值2000 |
| members_only | Boolean | 1：是，0：否 | 加入群是否需要群主或者群管理员审批，默认是0 |
| allowinvites | Boolean | 1：是，0：否 | 是否允许群成员邀请别人加入此群。 1：允许群成员邀请人加入此群，0：只有群主或者管理员才可以往群里加人。 |
| members | String | | 群组成员，多个以英文 "," 隔开 |

##### 响应

```
Status: 201 OK
```

```json
{
    "message": [
        "成功"
    ],
    "im_group_id": "39992137154562"
}
```

| 名称 | 描述 |
|:----:|----|
| im_group_id | 群组ID |

## 修改群信息

```
PATCH /easemob/group
```

#### 参数

| 参数 | 类型 | 枚举 | 描述 |
|:----:|:----:|:----:|----|
| im_group_id | Integer | | 必须，群组ID |
| groupname | String | | 必须，群组名称 |
| desc | String | | 必须，群组描述 |
| public | Boolean | 1：公开，0：不公开 | 是否是公开群，默认是1 |
| maxusers | Integer | | 群组成员最大数（包括群主），值为数值类型，默认值200，最大值2000 |
| members_only | Boolean | 1：是，0：否 | 加入群是否需要群主或者群管理员审批，默认是0 |
| allowinvites | Boolean | 1：是，0：否 | 是否允许群成员邀请别人加入此群。 1：允许群成员邀请人加入此群，0：只有群主或者管理员才可以往群里加人。 |
| group_face | Integer | | 群组头像 |
| new_owner_user | Integer | | 新群组管理员 |

##### 响应

```
Status: 201 OK
```

```json
{
    "groupname": "花儿巷",
    "desc": "来自花儿巷的朋友",
    "public": true,
    "maxusers": 300,
    "members_only": false,
    "allowinvites": true,
    "group_face": "",
    "im_group_id": "36036128342017"
}
```

| 名称 | 描述 |
|:----:|----|
| groupname | 群组名称 |
| desc | 群组描述 |
| public | 是否是公开群 |
| maxusers | 群组最大成员数 |
| group_face | 群组头像 |
| im_group_id | 群组ID |

## 删除群组

```
DELETE /easemob/group
```

#### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | Integer | 必须，群组ID |

##### 响应

```
Status: 204 OK
```

## 批量获取群头像

```
GET /easemob/group/face
```

#### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | String | 必须，群组ID,多个以英文 "," 隔开 |

##### 响应

```
Status: 200 OK
```

```json
[
    {
        "im_group_id": "36036128342017",
        "group_face": 0
    }
]
```

| 名称 | 描述 |
|:----:|----|
| im_group_id | 群组ID |
| group_face | 群组头像 |

## 批量添加群成员

```
POST /easemob/group/member
```

#### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | Integer | 必须，群组ID |
| members | String | 必须，群组成员,多个以英文 "," 隔开 |

##### 响应

```
Status: 201 OK
```

## 批量移除群成员

```
DELETE /easemob/group/member
```

#### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| im_group_id | Integer | 必须，群组ID |
| members | String | 必须，群组成员,多个以英文 "," 隔开 |

##### 响应

```
Status: 204 OK
```

