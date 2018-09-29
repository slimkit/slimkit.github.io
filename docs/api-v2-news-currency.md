---
id: api-v2-news-currency
title: 资讯部分积分相关新增接口
---

- [付费投稿](#付费投稿)
- [申请资讯置顶](#申请资讯置顶)
- [申请资讯评论置顶](#申请资讯评论置顶)
- [通过评论置顶](#通过评论置顶)
- [拒绝评论置顶](#拒绝评论置顶)

## 付费投稿

```
POST /news/categories/:category/currency-news
```

#### Input

| 字段 | 类型 | 描述 |
|:----:|:----:|----|
| title | String | **必须**，标题，最长 20 个字。 |
| subject | String | 主题，副标题，概述，最长 200 个字。 |
| content | String | **必须**，内容。 |
| image | Integer | 缩略图。 |
| tags | string,array | **必须** 标签id，多个id以逗号隔开或传入数组形式 |
| from | String | 资讯来源。 |
| author | String | 作者 |
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

> 用户投稿时，用户输入`摘要`和`正文`

> 数据提交到服务端时，将用户输入的`摘要`填写到`subject`字段, 将用户输入的`正文`按照**markdown**格式填写到`content`字段

> 前端渲染正文时，使用**markdown**格式渲染`subject`字段和`content`字段

##### Response

```
Status: 201 Created
```
```json
{
    "message": [
        "投稿成功"
    ]
}
```

# 申请资讯置顶

## API
```
POST /news/{news}/currency-pinneds
```

### prams
| 参数 | 说明 |
| :---: | :---: |
| news | 资讯id |

### 传入参数

| 名称 | 类型 | 必填 | 说明 |
|:----:|:-----|:----:|------|
| day  | int  | Y    | 申请置顶天数 |
| amout | int | Y    | 申请置顶金额，积分 | 
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

### Response

Headers

```
Status: 201 OK
```
```json5
{
    "message": [
        "申请成功"
    ]
}
```


# 申请资讯评论置顶

## API
```
POST /news/{news}/comments/{comment}/currency-pinneds
```

### prams
| 参数 | 说明 |
| :---: | :---: |
| news | 资讯id |
| comment| 评论id |

### 传入参数

| 名称 | 类型 | 必填 | 说明 |
|:----:|:-----|:----:|------|
| day  | int  | Y    | 申请置顶天数 |
| amout | int | Y    | 申请置顶金额,积分 | 
| `password` | `string` | **根据启动信息决定是否传递**，用户密码，支付需要用户输入密码进行付费支付。） |

### Response

Headers

```
Status: 201 OK
```
```json5
{
    "message": [
        "申请成功"
    ]
}
```

# 通过评论置顶

### API
```
PATCH /news/{news}/comments/{comment}/currency-pinneds/{pinned}
```

### prams
| 参数 | 说明 |
| :---: | :---: |
| news | 资讯id |
| comment| 评论id |
| pinned | 获取的申请评论置顶中的id [查看](top-comments-list.md) |

### Response

Headers

```
Status: 201 OK
```
```json5
{
    "message": [
        "申请成功"
    ]
}
```

# 拒绝评论置顶

### API
```
PATCH /news/{news}/comments/{comment}/currency-pinneds/{pinned}/reject
```

### prams
| 参数 | 说明 |
| :---: | :---: |
| pinned | 获取的申请评论置顶中的id [查看](top-comments-list.md) |

### Response

Headers

```
Status: 204 No Content
```
