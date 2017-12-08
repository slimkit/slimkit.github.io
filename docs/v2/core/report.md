# 举报

- [举报一个用户](#举报一个用户)
- [举报一条评论](#举报一条评论)

## 举报一个用户

```
POST /report/users/:user
```

## 举报一条评论

```
POST /report/comments/:comment
```

### 可选参数

| 名称 | 描述 |
|:----:|:-----|
| reason | 举报理由 |

### 响应

```
Http Status 201
```

```json
{
    "message": [
        "操作成功"
    ]
}
```