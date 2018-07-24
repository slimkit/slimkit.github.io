---
id: api-v2-feeds-topics
title: 话题
---

话题为新 API 规范产物，服务器返回的时间均以 `ISO 8601` Zulu 格式 `yyy-mm-ddThh-ii-ssZ` 格式返回。

## List all topics（获取全部话题）

```
GET /feed/topics
```

请求查询参数：

| Name | Type | Description |
|:----|:----|:----|
| `q` | `string` | 搜索关键词，允许任何字符串。 |
| `limit` | `integer` | 本次请求请求的数据条数，默认 `15` 条，允许的范围 `1 - 100`。 |
| `direction` | `string` | 用于基于数据 `id` 字段的排序方向设置，允许 `asc` 或者 `desc`，默认 `desc` |
| `index` | `integer` | 数据查询定位值，来源于数据 `id` 字段。 |

响应：

```
Status: 200 OK
```
```json
[
    {
        "id": 1,                             // 话题 ID, 主要用于查询定位。
        "name": "Plus",                      // 话题名称
        "logo": 2,                           // 基于 File With 的话题 Logo
        "created_at": "2018-07-23T15:04:23Z" // Zulu 格式，话题创建时间
    },
    // ...
]
```

## Create an topic（创建一个话题）

```
POST /feed/topics
```

请求内容参数：

| Name | Type | Description |
|:----|:----|:----|
| `name` | `string` | **必须**，话题名称最长 `100` 个字。 |
| `desc` | `string` | **可选**，话题描述最长 `500` 个字。 |
| `logo` | `integer` | **可选**，话题 Logo 调用[文件上传](api-v2-files.md)接口返回的 `FileWith` ID 标识。 |

响应：

```
Status: 201 Created
```
```json
{
    "id": 1 // 话题创建成功后的 ID 标识
}
```

## Follow a topic（关注一个话题）

```
PUT /user/feed-topics/:topicID
```

响应：

```
Status: 204 No Content
```
