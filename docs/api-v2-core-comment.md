---
id: api-v2-core-comment
title: 评论
---

## 获取所有评论

```
GET /comments
```

请求查询参数：

| 名字 | 类型 | 描述 |
|----|----|----|
| `limit` | `integer` | **可选**，本次请求需要返回的数据条数。 |
| `index` | `integer` | **可选**，查询开始的评论位置，来源响应 `id` 字段。 |
| `direction` | `string` | **可选**，数据排序方向，以 `id` 进行排序，支持 `asc` 或 `desc`，默认 `desc`。 |
| `author` | `integer` | **可选**，需要筛选的评论作者，传递用户 ID。 |
| `for_user` | `integer` | **可选**，需要获取关于某用户的评论，传递用户 ID。|
| `for_type` | `string` | **可选**，获取关于某用户评论的方式，默认 `all`，支持 `all: 全部`、`target: 评论我的`和 `reply: 回复我的`。|
| `resourceable_id` | `integer` or `string` | **可选**，需要以资源 ID 为条件查询的评论，多个以 `,` 进行分割。|
| `resourceable_type` | `string` | **可选，如果 `resourceable_id` 存在则必须** ，资源类型标识。|
| `id` | `integer` or `string` | **可选**，多个评论 ID 使用 `,` 进行分割；如果存在本参数，除了 `direction` 外，其他参数均失效。 |

响应：

```
Status: 200 OK
```

```json5
[
    {
        "id": 2,                               // 评论 ID
        "user_id": 1,                          // 评论作者用户 ID
        "target_user": 1,                      // 接收评论用户 ID
        "body": "\u00ad@用户4\u00ad你好",       // 被回复的用户 ID
        "resourceable": {                      // 可资源化的标识
            "type": "feeds",
            "id": 3
        },
        "created_at": "2018-08-15T05:57:01Z"   // 评论创建时间
    }
]
```
