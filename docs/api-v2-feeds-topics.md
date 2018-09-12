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
| `only` | `string` | **可选**，该字段只有一个固定值 `hot`，当出现 `only` 值的时候其他参数全部失效，转而 API 只返回热门话题数据。 |

响应：

```
Status: 200 OK
```
```json
[
    {
        "id": 1,                             // 话题 ID, 主要用于查询定位。
        "name": "Plus",                      // 话题名称
        "logo": {...},                       // 参考 https://slimkit.github.io/docs/api-v2-core-file-storage.html#文件附带信息
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
| `logo` | `FILE_STORAGE_NODE<string>` | **可选**，话题 Logo 调用[文件存储](api-v2-core-file-storage.md)接口返回的 `node` 标识。 |

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

## Unfollow a topic（取消关注一个话题）

```
DELETE /user/feed-topics/:topicID
```

响应：

```
Status: 204 No Content
```

## Edit an topic（编辑一个话题）

```
PATCH /feed/topics/:topicID
```

请求内容参数：

| Name | Type | Description |
|:----|:----|:----|
| `desc` | `string` | **可选**，话题描述最长 `500` 个字。 |
 `logo` | `FILE_STORAGE_NODE<string>` | **可选**，话题 Logo 调用[文件存储](api-v2-core-file-storage.md)接口返回的 `node` 标识。 |


响应：

```
Status: 204 No Content
```

## Get a single topic（获取一个话题详情）

```
GET /feed/topics/:topicID
```

> 如果携带 `Authorization` 则会返回关注状态，否则不会返回！

响应：

```
Status: 200 OK
```
```json
{
    "id": 1,               // 话题 ID
    "name": "Plus",        // 话题名称
    "logo": null,
    "desc": "啊哈哈",       // 话题描述
    "creator_user_id": 1,  // 话题创建者 User ID
    "feeds_count": 2,      // 话题下有都少动态
    "followers_count": 1,  // 有多少人关注了这个话题
    "has_followed": true,  // 当前 Authorization 用户是否关注了话题
    "participants": [2, 3, 5] // 最多三个，参与者需求，按照参与时间倒序！
}
```

## List feeds for a topic（获取话题下的动态列表）

```
GET /feed/topics/:topicID/feeds
```

请求查询参数：

| Name | Type | Description |
|:----|:----|:----|
| `limit` | `integer` | 本次请求请求的数据条数，默认 `15` 条，允许的范围 `1 - 100`。 |
| `direction` | `string` | 用于基于数据 `index` 字段的排序方向设置，允许 `asc` 或者 `desc`，默认 `desc` |
| `index` | `integer` | 数据查询定位值，来源于数据 `index` 字段。 |

响应：

```
Status: 200 OK
```
> `Body` 部分和《[动态获取](api-v2-feeds-get.md)》接口保持一直。
> 保持数据格式一致的做法是为了避免新内容造成客户端重写 Controller 考虑，相比其他接口，本接口数据内容会多出一个 `index` 字段。

## List participants for a topic（获取话题下的参与者列表）

```
GET /feed/topics/:topicID/participants
```

请求查询参数：

| Name | Type | Description |
|:----|:----|:----|
| `limit` | `integer` | 本次请求的数据条数，默认 `15` 条，允许的范围 `1 - 100`。 |
| `offset`| `integer` | 本次请求的数据偏移两，默认 `0` 条。 |

响应：

```
Status: 200 OK
```
```json
[
    1, // 用户 ID
    2,
    3,
    /// ...
]
```

## Report a topic（举报一个话题）

```
PUT /user/report-feed-topics/:topicID
```

请求内容参数：

| Name | Type | Description |
|:----|:----|:----|
| `message` | `string` | **必须**，举报理由，不得超过 255 个字。 |

响应：

```
Status: 204 No Content
```
