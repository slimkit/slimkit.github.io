# 用户授权

- [用户登录](#login)
- [用户退出](#logout)
- [刷新 Token](#refresh)

<a name="login"></a>
## 用户登录 {#login}

```
POST /auth/login
```

### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| login | 字符串 | **必须**，用户认证字段，可以是 `name` 、 `email` 和 `phone` 。 |
| password | 字符串 | **必须**，用户密码。 |

### 响应

```
Status: 20o OK
```
```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcGx1cy5pby9hcGkvdjIvYXV0aC9sb2dpbiIsImlhdCI6MTUxNTU3NDE0MSwiZXhwIjoxNTE1NTc3NzQxLCJuYmYiOjE1MTU1NzQxNDEsImp0aSI6Imx1MWtFcDd1UjZpWnoxV3giLCJzdWIiOjEsInBydiI6IjQ4ZTQ1MzgzMWNlYmE1ZTU3YTQ3NWU2ODY0OWNmZGVlNmU5N2Q4ZDIifQ.0_u1dgb-rSr2o7nIx4Q1n1NNcr1LMAtgTbKsFFdUvmg",
    "token_type": "bearer",
    "expires_in": 3600
}
```

| 字段 | 描述 |
|:----:|----|
| access_token | 授权 Token |
| token_type | Token 类型 |
| expires_in | 过期时间，单位秒 |

<a name="login"></a>
## 用户退出 {#logout}

```
POST|PUT|PATCH|GET /auth/logout
```

> 需要 `认证`

### 响应

```
Status: 200 OK
```
```json
{
    "message": "退出成功"
}
```

<a name="login"></a>
## 刷新 Token {#refresh}

```
POST|PUT|PATCH|GET /auth/refresh
```

> 需要 `认证`

### 响应

见 [用户登录](#login)

-------------------

# 老版本授权

> 目前版本授权兼容至 `v3` 接口

- [创建一个用户授权令牌](#创建一个用户授权令牌)
- [刷新授权令牌](#刷新授权令牌)

## 创建一个用户授权令牌

```
POST /tokens
```

### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| login | 字符串 | **必须**，用户认证字段，可以是 `name` 、 `email` 和 `phone` 。 |
| password | 字符串 | **必须**，用户密码。 |

#### 响应

```
Status: 201 Created
```
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9wbHVzLmlvL2FwaS92Mi90b2tlbnMiLCJpYXQiOjE1MDEzMTQyNTIsImV4cCI6MTUwMjUyMzg1MiwibmJmIjoxNTAxMzE0MjUyLCJqdGkiOiJvU0VpdGUwTnp4Y0RTSTJQIn0.1Xga2eSZS013Baao0PO2rx6s1riL0goJIsAvU93DLgc",
    "user": {
        "id": 1,
        "name": "Seven",
        "bio": "Seven 的个人传记",
        "sex": 2,
        "location": "成都 中国",
        "created_at": "2017-06-02 08:43:54",
        "updated_at": "2017-07-25 03:59:39",
        "avatar": "http://plus.io/api/v2/users/1/avatar",
        "bg": "http://plus.io/storage/user-bg/000/000/000/01.png",
        "verified": null,
        "extra": {
            "user_id": 1,
            "likes_count": 0,
            "comments_count": 8,
            "followers_count": 0,
            "followings_count": 1,
            "updated_at": "2017-07-28 08:38:54",
            "feeds_count": 0,
            "questions_count": 4
        },
        "wallet": {
            "id": 1,
            "user_id": 1,
            "balance": 87,
            "created_at": "2017-06-02 08:43:54",
            "updated_at": "2017-07-28 03:15:04",
            "deleted_at": null
        },
        "phone": "18781993582",
        "email": "shiweidu@outlook.com"
    },
    "ttl": 20160,
    "refresh_ttl": 40320
}
```

| 字段 | 描述 |
|:----:|----|
| token | 用户授权的 JSON Web Token. |
| user | 用户资料，具体数据参照「获取认证用户资料」。 |
| ttl | 授权的有效期。 |
| refresh_ttl | 授权令牌用于换取新授权的有效期。 |

> `TTL` 单位是 **分钟**

## 刷新授权令牌

```
PATCH /tokens/:token
```

#### 响应

```
Status: 201 Created
```
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9wbHVzLmlvL2FwaS92Mi90b2tlbnMvZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2pFc0ltbHpjeUk2SW1oMGRIQTZMeTl3YkhWekxtbHZMMkZ3YVM5Mk1pOTBiMnRsYm5NaUxDSnBZWFFpT2pFMU1EQXpOalUxTVRjc0ltVjRjQ0k2TVRVd01UVTNOVEV4Tnl3aWJtSm1Jam94TlRBd016WTFOVEUzTENKcWRHa2lPaUpLT1RKVlJsRlRaVm96UkRGUFVsaFRJbjAuejNkNTBXZm5lSUIyTk45N2FSWW9lSFAwUjhyN1l0STJSVmxRUEVFWElaSSIsImlhdCI6MTUwMDM2NTUxNywiZXhwIjoxNTAxNTc1MTI4LCJuYmYiOjE1MDAzNjU1MjgsImp0aSI6IkV0S3VXUWd2VHlkMnpQSXcifQ.MJt3fz0hgH7BJNa1oC-9H3BZa3vIxS2oHu5OG9g39O8",
    "ttl": 20160,
    "refresh_ttl": 40320
}
```
