---
id: api-v2-question-answer-report
title: 举报
---

- [举报一个问题](#举报一个问题)
- [举报一条回答](#举报一条回答)

## 举报一个问题

```
POST /questions/:question/reports
```

## 举报一条回答

```
POST /question-answers/:answer/reports
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
