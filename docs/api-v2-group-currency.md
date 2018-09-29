---
id: api-v2-group-currency
title: 圈子部分积分相关新增接口
---

- [加入圈子](#加入圈子)
- [审核圈子加入请求](#审核圈子加入请求)
- [申请帖子置顶](#申请帖子置顶)
- [通过帖子置顶](#通过帖子置顶)
- [拒绝帖子置顶](#拒绝帖子置顶)
- [帖子评论申请置顶](#帖子评论申请置顶)
- [通过帖子评论申请置顶](#通过帖子评论申请置顶)
- [拒绝帖子评论申请置顶](#拒绝帖子评论申请置顶)

## 加入圈子

```
PUT /currency-groups/:group
```

### 响应

```
status 201
```

## 审核圈子加入请求

```
PATCH /currency-groups/:group/members/:member/audit
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|status|int| 1-允许 2-拒绝|

## 申请帖子置顶

```
POST /currency-pinned/posts/:post
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|amount|integer| 必须 置顶金额|
|day|integer|必须 置顶天数|
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

### 响应

```
status 201
```

## 通过帖子置顶

```
PATCH /currency-pinned/posts/:post/accept
```

### 响应

```
status 201
```

## 拒绝帖子置顶

```
PATCH /currency-pinned/posts/:post/reject
```

### 响应

```
status 201
```

## 帖子评论申请置顶

```
POST /currency-pinned/comments/:comment
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|amount|integer| 必须 置顶金额|
|day|integer|必须 置顶天数|

### 响应

```
status 201
```

## 通过帖子评论申请置顶

```
PATCH /currency-pinned/comments/:comment/accept
```

### 响应

```
status 201
```

## 拒绝帖子评论申请置顶

```
PATCH /currency-pinned/comments/:comment/reject
```

### 响应

```
status 201
```
