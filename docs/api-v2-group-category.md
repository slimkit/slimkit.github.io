---
id: api-v2-group-category
title: 分类
---

- [获取全部圈子分类](#获取全部圈子分类)

## 获取全部圈子分类

```
GET /categories
```

### 响应

```
status 200
```

```json
[
    {
        "id": 1,
        "name": "123123",
        "sort_by": 1000,
        "created_at": "2017-11-27 10:06:38",
        "updated_at": "2017-11-27 10:06:40"
    }
]
```

### 返回参数说明

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| name | string | 圈子分类名称 |
| sort_by | int | 圈子排序权重 |
