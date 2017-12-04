# 管理

- [圈子收入记录](#圈子收入记录)
- [移除圈子成员](#移除圈子成员)
- [设置成员为管理员](#设置成员为管理员)
- [移除一个成员的管理员角色](#移除一个成员的管理员角色)
- [将一个成员加入黑名单](#将一个成员加入黑名单)
- [将一个成员移除黑名单](#将一个成员移除黑名单)
- [审核圈子加入请求](#审核圈子加入请求)
- [更改圈子发帖权限](#更改圈子发帖权限)

## 圈子收入记录

```
GET /groups/:group/incomes
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|after|integer|默认 0 ，翻页标识。|
|start|integer|秒级时间戳，起始筛选时间 |
|end|integer|秒级时间戳，结束筛选时间|
|type|string|默认 all, all-全部 join-成员加入 pinned-帖子置顶|

### 响应

```
status 200
```

## 移除圈子成员

```
DELETE /groups/:group/members/:member
```

### 响应

```
status 204
```

## 设置成员为管理员

```
PUT /groups/:group/managers/:member
```

### 响应

```
status 201
```

## 移除一个成员的管理员角色

```
DELETE /groups/:group/managers/:member
```

### 响应

```
status 204
```

## 将一个成员加入黑名单

```
PUT /groups/:group/blacklist/:member
```

### 响应

```
status 201
```

## 将一个成员移除黑名单

```
DELETE /groups/:group/blacklist/:member
```

### 响应

```
status 204
```

## 审核圈子加入请求

```
PATCH /groups/:group/members/:member/audit
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|status|int| 1-允许 2-拒绝|


## 更改圈子发帖权限

```
PATCH /groups/:group/permissions
```

### 参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|permissions|array| 'member' - 允许成员发帖, 'administrator' - 允许管理员发帖, 'founder' - 允许圈主发帖|


### 响应

```
status 201
```



