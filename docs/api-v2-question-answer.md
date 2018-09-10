---
id: api-v2-question-answer
title: 概述
---

问答部分具有申请精选费用配置及微观答案费用配置，配置信息会在「启动信息」接口中提供，格式如下：

```json5
{
    "question:apply_amount": 200,  //  申请精选所需支付金额
    "question:onlookers_amount": 100  //  围观答案所需支付金额
}
```

### 获取问答基础配置

```
GET /api/v2/question-configs
```

### 响应

```json5
{
    "apply_amount": 200, // 申请精选费用
    "onlookers_amount": 100, // 围观费用
    "anonymity_rule": "匿名规则12321", // 匿名规则
    "reward_rule": null,   // 悬赏规则，如果存在其内容为 Markdown
}
```
