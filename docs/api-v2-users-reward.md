---
id: api-v2-users-reward
title: 打赏用户
---
- [打赏一个用户](#打赏一个用户)
- [新版打赏一个用户](#新版打赏一个用户)

## 打赏一个用户

```
POST /user/:user/rewards
```

### 请求参数
| 名称 | 说明 |
|:----:|------|
| amount | 金额 |
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

#### 响应

```
Status: 201 Created
```

```json5
{
    "message": [
        "打赏成功"
    ]
}
```

## 新版打赏一个用户

```
POST /user/:user/new-rewards
```

### 请求参数
| 名称 | 说明 |
|:----:|------|
| amount | 金额 |
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

#### 响应

```
Status: 201 Created
```

```json5
{
    "message": [
        "打赏成功"
    ]
}
```
