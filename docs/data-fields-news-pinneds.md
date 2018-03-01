---
id: data-fields-news-pinneds
title: news_pinneds
---

资讯申请置顶

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| channel | varchar | 频道: 资讯或资讯评论 |
| raw | int | 如果存在则为评论id |
| target | int | 资讯id |
| user_id | int | 申请者id |
| state | tinyint | 审核状态0: 待审核, 1审核通过, 2被拒 |
| target_user | int | 资讯作者 |
| amount | int | 金额 |
| day | int | 置顶天数 |
| cate_id | int | 资讯置顶所属分类 |
| expires_at | timestamp | 到期时间，固定后设置该时间 |