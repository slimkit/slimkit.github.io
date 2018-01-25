---
id: api-v2-question-answer-onlookers
title: 回答 · 围观
---

- [围观一个答案](#围观一个答案)

## 围观一个答案

```
POST /api/v2/question-answers/:answer/onlookers
```

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
