---
id: api-v2-user-message
title: 消息
---

## Unread message count（未读消息统计）

```
GET /user/counts
```

响应：
```
Status: 200 OK
```

```json5
{
    "user": { // 用户相关
        "following": 1, // 用户关注者新增（粉丝新增）数量
        "liked": 0,     // 被点赞数
        "commented": 0, // 被评论数
        "system": 0,    // 系统消息,
        "news-comment-pinned": 0, // 置顶评论消息
        "feed-comment-pinned": 0, // 动态置顶消息
        "mutual": 0,    // 其他消息
        "at": 2,        // At 我的消息
    }
}
```

## At me（@我的）

```
GET /user/message/atme
```

请求查询参数：

| Name | Type | Description |
|:----|:----|:----|
| `limit` | `integer` | **可选**，请求的数据条数，默认 `15`，允许范围 `1 - 100`。 |
| `index` | `integer` | **可选**，数据开始查找的位置标记，默认 `0`，来源响应体的 `id` 字段。 |
| `direction` | `enum` | **可选**，以 `index` 标记开始的数据顺序，默认 `desc`，允许值：`asc`/`desc`。 |

响应：
```
Status: 200 OK
```

```json5
[
    {
        "id": 1,               // 消息 ID
        "user_id": 1,          // 消息接收人ID（当前用户ID）
        "resourceable": {      // 资源
            "type": "feeds",   // 资源类型
            "id": 1            // 资源ID
        },
        "created_at": "2018-08-13T08:06:54Z" // 消息创建时间
    }
]
```
