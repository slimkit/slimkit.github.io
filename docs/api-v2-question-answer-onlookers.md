---
id: api-v2-question-answer-onlookers
title: 回答 · 围观
---

- [围观一个答案](#围观一个答案)

## 围观一个答案

```
POST /api/v2/question-answers/:answer/onlookers
```

请求参数：

| 参数 | 类型 | 说明 |
|----|----|----|
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

### 响应

```
Http Status 201 Created
```

```json5
{
    "message": [
        "操作成功"
    ],
    "answer": {
        ...  //  回答内容
    }
}
```
