---
id: api-v2-feeds-report
title: 举报
---

## 举报一个动态

```
POST /feeds/:feed/reports
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
