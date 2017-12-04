# 置顶

- [帖子申请置顶列表](#帖子申请置顶列表)
- [申请帖子置顶](#申请帖子置顶)
- [通过帖子置顶](#通过帖子置顶)
- [拒绝帖子置顶](#拒绝帖子置顶)
- [帖子评论申请置顶列表](#帖子评论申请置顶列表)
- [帖子评论申请置顶](#帖子评论申请置顶)
- [通过帖子评论申请置顶](#通过帖子评论申请置顶)
- [拒绝帖子评论申请置顶](#拒绝帖子评论申请置顶)


## 帖子申请置顶列表

```
GET /pinned/posts
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|group|integer|默认 全部，某个圈子置顶帖子需传圈子id|

### 响应

```
status 200
```

## 申请帖子置顶

```
POST /pinned/posts/:post
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

## 通过帖子置顶

```
PATCH /pinned/posts/:post/accept
```

### 响应

```
status 201
```

## 拒绝帖子置顶

```
PATCH /pinned/posts/:post/reject
```

### 响应

```
status 201
```

## 帖子评论申请置顶列表

```
GET /pinned/comments
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|
|group|integer|默认 全部，某个圈子置顶帖子需传圈子id|

### 响应

```
status 200
```

## 帖子评论申请置顶

```
POST /pinned/comments
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
PATCH /pinned/comments/:comment/accept
```

### 响应

```
status 201
```

## 拒绝帖子评论申请置顶

```
PATCH /pinned/comments/:comment/reject
```

### 响应

```
status 201
```
