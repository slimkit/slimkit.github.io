---
id: api-v2-group-posts-collection
title: 帖子 · 收藏
---

- [帖子收藏](#帖子收藏)
- [帖子取消收藏](#帖子取消收藏)
- [用户帖子收藏列表](#用户帖子收藏列表)

## 帖子收藏

```
POST /group-posts/:post/collections
```

### 响应

```
status 204
```

## 帖子取消收藏

```
DELETE /group-posts/:post/uncollect
```

### 响应

```
status 204
```

## 用户帖子收藏列表

```
GET /user-post-collections
```

### 参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
|limit|integer| 默认 15 ，数据返回条数 默认为15|
|offset|integer|默认 0 ，数据偏移量，传递之前通过接口获取的总数。|

### 响应

```
status 200
```
