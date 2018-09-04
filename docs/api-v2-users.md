---
id: api-v2-users
title: 用户
---

## 获取一个用户

获取指定用户：

```
GET /users/:user
```

变量：

| 变量 | 描述 |
| `user` | 这个变量可以是「用户名」、「邮箱」、「手机号码」和「用户ID」 |

#### 参数

| 参数 | 类型 | 描述 |
|:----:|:----:|----|
| following | Integer | 检查请求用户是否关注了指定的用户，传递要检查的用户 ID，默认为当前登录用户。 |
| follower | Integer | 检查请求用户是否被某个用户关注，传递要检查的用户 ID，默认为当前登录用户。 |

获取当前认证用户：

```
GET /user
```

##### 响应

```
Status: 200 OK
```

```json5
{
    "id": 1,                           // 用户 ID
    "name": "创始人",                   // 用户名
    "phone": "18364758373",            // 用户手机号码，仅获取自己资料
    "email": "shiweidu@outlook.com",   // 用户邮箱，仅获取自己资料
    "bio": "我是大管理员",               // 用户描述
    "sex": 0,                          // 用户性别，1 男，2 女，0 未知
    "location": "成都市 四川省 中国",     // 用户地区
    "created_at": "2017-06-02 08:43:54",// 用户注册时间
    "updated_at": "2017-07-06 07:04:06",// 用户最后一次更新资料时间
    "avatar": {                        // 用户头像
        "vendor": "local",
        "url": "https://xxxxx",
        "mize": "image/png",
        "size": 8674535,
        "dimension": {
            "width": 240,
            "height": 240,
        }
    },
    "bg": null,                         // 同 `avatar` 字段
    "extra": {                          // 用户拓展信息
        "user_id": 1,
        "likes_count": 0,               // 喜欢数量
        "comments_count": 0,            // 评论数量
        "followers_count": 0,           // 关注者数量
        "followings_count": 1,          // 关注的人数量
        "updated_at": "2017-07-16 09:44:25",
        "feeds_count": 0                 // 动态数量
    },
    "wallet": {                          // 钱包信息，仅获取自己资料存在
        "id": 1,
        "user_id": 1,
        "balance": 90,                   // 钱包余额
        "created_at": "2017-06-02 08:43:54",
        "updated_at": "2017-07-05 08:29:49",
        "deleted_at": null
    },    
    "new_wallet": {                      // 钱包信息，仅获取自己资料存在
        "owner_id": 1,
        "balance": 1000,                 // 钱包余额
        "total_income": 100,             // 收入统计
        "total_expenses": 100,           // 支出统计
        "created_at": "2018-01-22 10:05:44",
        "updated_at": "2018-01-22 10:05:45"
    },
    "currency": {                        // 积分信息，仅获取自己资料存在
        "owner_id": 1,
        "type": 1,                       // 积分类型
        "sum": 9400,                     // 积分数量
        "created_at": "2018-01-17 06:57:18",
        "updated_at": "2018-01-18 06:57:24"
    }
}
```

## 更新认证用户资料

- [更新认证用户的手机号码和邮箱](#更新认证用户的手机号码和邮箱)
- [更新认证用户密码](#更新认证用户密码)

```
PATCH /user
```

#### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| name | 字符串 | 用户新的用户名。 |
| bio | 字符串 | 用户新的个人传记。 |
| sex | 数字 | 用户新的性别。 |
| location | 字符串 | 用户新的位置信息。 |
| `avatar` | `FILE_STORAGE_NODE<string>` | **可选**，用户头像的 File node 值 |
| `bg`     | `FILE_STORAGE_NODE<string>` | **可选**，用户背景图片的 File node 值 |

##### 响应

```
Status: 204 No Content
```

### 更新认证用户的手机号码和邮箱

```
PUT /user
```

#### 输入

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| phone | 字符串 | **如果 `email` 不存在则必须**，用户新的手机号码。 |
| email | 字符串 | **如果 `phone` 不存在则必须**，用户新的邮箱地址。 |
| verifiable_code | 字符串或者数字 | **必须**，验证码。 |

##### 响应

```
Status: 204 No Content
```

### 更新认证用户密码

```
PUT /user/password
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| old_password | 字符串 | **用户已设置密码时必须**，用户密码。 |
| password | 字符串 | **必须**，用户的新密码 |
| password_confirmation | 字符串 | **必须**，用户的新密码，必须和 `password` 一致。 |

##### 响应

```
Status: 204 No Content
```

## 获取所有用户

```
GET /users
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| `limit` | `integer` | **可选**，请求获取的数据量，默认为 `20` 条，最低获取 `1` 条，最多获取 `50` 条。 |
| `order` | `string` | **可选**，排序方式，默认 `desc`，可选 `asc` 或 `desc`。 |
| `since` | `integer` | **可选**，上次请求的最后一条的 `id` ，用于获取这个用户之后的数据。 |
| `name` | `string` | **可选**用于检索包含 `name` 传递字符串用户名的用户；如果 `fetch_by` 是 `username` 那么这里就是完整的用户名，多个用户名使用 `,` 进行分割。 |
| `fetch_by` | `string` | **可选**，获取数据的方式，默认是 `id` 已常规方式进行获取，允许值：`username` 使用 `name` 字段进行按照用户名获取、`id` 使用 `id` 字段按照用户 ID 进行获取。 |
| `id` | `integer` or `string` | **可选**，获取一个或者多个指定的用户，如果获取多个请使用 `,` 将用户 ID进行字符串拼接。 |

##### 响应

```
Status: 200 OK
```
```json
[
    {
        "id": 1,
        "name": "创始人",
        "bio": "我是大管理员",
        "sex": 0,
        "location": "成都市 四川省 中国",
        "created_at": "2017-06-02 08:43:54",
        "updated_at": "2017-07-06 07:04:06",
        "following": false,
        "follower": false,
        "avatar": "http://plus.io/api/v2/users/1/avatar",
        "bg": null,
        "extra": {
            "user_id": 1,
            "likes_count": 0,
            "comments_count": 0,
            "followers_count": 0,
            "followings_count": 1,
            "updated_at": "2017-07-16 09:44:25",
            "feeds_count": 0
        }
    }
]
```

## 用户找回密码

```
PUT /user/retrieve-password
```

#### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| verifiable_type | 枚举：`mail` 或者 `sms` | **必须**，验证码发送模式。 |
| verifiable_code | 字符串或者整数 | **必须**，用户收到的验证码。 |
| email | 字符串 | 如果 `verifiable_type` 值为 `mail`，那么这个字段为必须，用户邮箱。 |
| phone | 字符串 | 如果 `verifiable_type` 值为 `sms`。那么这个字段为必须，用户手机号码。 |
| password | 字符串 | 用户新密码。 |

##### 响应

```
Status: 204 No Content
```

## 解除用户 Phone 或者 E-Mail 绑定

解除用户 Phone 绑定:

```
DELETE /api/v2/user/phone
```

解除用户 E-Mail 绑定:

```
DELETE /api/v2/user/email
```

#### 输入

| 名称 | 类型 | 描述 |
|:-----:|:----:|----|
| password | String | 用户密码。 |
| verifiable_code | Int 或者 String | 手机号码或者邮箱验证码。 |

#### 响应

```
Status: 204 No Content
```
