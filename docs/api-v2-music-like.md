---
id: api-v2-music-like
title: 点赞
---

- [点赞](#like)
- [取消点赞](#cancel-like)

<a name="like"></a>
## 点赞

```
POST /music/{music}/like
```

### Reponse

```
Status 201 Created
```

```json5
{
    "message": [
        "点赞成功"
    ]
}
```

<a name="cancel-like"></a>
## 取消点赞

```
DELETE /music/{music}/like
```

### Reponse

```
Status 204 No Content
```