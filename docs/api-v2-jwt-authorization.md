---
id: api-v2-jwt-authorization
title: Json Web Token 授权
---

- [用户登录](#login)
- [用户退出](#logout)
- [刷新 Token](#refresh)

<a name="login"></a>
## 用户登录 

```
POST /auth/login
```

### 输入

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| login | 字符串 | **必须**，用户认证字段，可以是 `name` 、 `email` 和 `phone` 。 |
| password | 字符串 | **可选**，用户密码。 |
| `verifiable_code` | `string` | **可选**，登录验证码。 |

> `password` 或者 `verifiable_code` 必须选择一个，如果选择 `verifiable_code` 进行登录。那么 `login` 字段只能是 `phone` 或者 `email`。

### 响应

```
Status: 20o OK
```
```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcGx1cy5pby9hcGkvdjIvYXV0aC9sb2dpbiIsImlhdCI6MTUxNTU3NDE0MSwiZXhwIjoxNTE1NTc3NzQxLCJuYmYiOjE1MTU1NzQxNDEsImp0aSI6Imx1MWtFcDd1UjZpWnoxV3giLCJzdWIiOjEsInBydiI6IjQ4ZTQ1MzgzMWNlYmE1ZTU3YTQ3NWU2ODY0OWNmZGVlNmU5N2Q4ZDIifQ.0_u1dgb-rSr2o7nIx4Q1n1NNcr1LMAtgTbKsFFdUvmg",
    "token_type": "bearer",
    "expires_in": 60,
    "refresh_ttl": 20160
}
```

| 字段 | 描述 |
|:----:|----|
| access_token | 授权 Token |
| token_type | Token 类型 |
| expires_in | 过期时间，单位分 |
| refresh_ttl | 刷新过期时间，单位分 |

<a name="logout"></a>
## 用户退出 

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

<a name="refresh"></a>
## 刷新 Token 

```
POST|PUT|PATCH|GET /auth/refresh
```

> 需要 `认证`

### 响应

见 [用户登录](#login)
