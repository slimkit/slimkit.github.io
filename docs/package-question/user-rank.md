# 排行

- [获取解答排行](#获取解答排行)
- [获取问答达人排行](#获取问答达人排行)
- [获取社区专家排行](#获取社区专家排行)

## 获取解答排行

根据一定时间内发布的回答数进行的排序

```
GET /question-ranks/answers
```

## 传入参数

| 名称 | 类型 | 必填 | 说明 |
|:----:|:-----|:----:|------|
| limit | int | -    | 数据返回条数 默认10条 |
| type | string | -  | 筛选类型 `day` - 日排行 `week` - 周排行  `month` - 月排行 |
| offset | int | -   | 偏移量 默认为0 |

## 响应

```
Http Status 200 Ok
```

```json5
[
    {
        "id": 1,
        "name": "baishi",
        "following": false,
        "follower": false,
        "avatar": null,
        "bg": null,
        "verified": null,
        "extra": {
            "user_id": 1,
            "likes_count": 2,
            "comments_count": 9,
            "followers_count": 0,
            "followings_count": 0,
            "updated_at": "2017-08-17 07:05:06",
            "feeds_count": 0,
            "questions_count": 0,
            "answers_count": 19,
            "count": 53,
            "rank": 1
        }
    }
]
```

### 返回参数

| 名称 | 类型 | 说明 |
|:----:|:-----|------|
| extra.count | int | 回答数 |
| extra.rank | int | 排行 |

> 其他数据结构参考「用户」接口用户资料

## 获取问答达人排行

根据全站回答收到的点赞数进行的排序

```
GET /question-ranks/likes
```

## 传入参数

| 名称 | 类型 | 必填 | 说明 |
|:----:|:-----|:----:|------|
| limit | int | -    | 数据返回条数 默认10条 |
| offset | int | -   | 偏移量 默认为0 |

## 响应

```
Http Status 200 Ok
```

```json5
```json5
[
    {
        "id": 1,
        "name": "baishi",
        "following": false,
        "follower": false,
        "avatar": null,
        "bg": null,
        "verified": null,
        "extra": {
            "user_id": 1,
            "likes_count": 2,
            "comments_count": 9,
            "followers_count": 0,
            "followings_count": 0,
            "updated_at": "2017-08-17 07:05:06",
            "feeds_count": 0,
            "questions_count": 0,
            "answers_count": 19,
            "count": 53,
            "rank": 1
        }
    }
]
```

### 返回参数

| 名称 | 类型 | 说明 |
|:----:|:-----|------|
| extra.count | int | 点赞数 |
| extra.rank | int | 排行 |

> 其他数据结构参考「用户」接口用户资料

## 获取社区专家排行

根据话题下的专家收入进行的排行

```
GET /question-ranks/experts
```

## 传入参数

| 名称 | 类型 | 必填 | 说明 |
|:----:|:-----|:----:|------|
| limit | int | -    | 数据返回条数 默认10条 |
| offset | int | -   | 偏移量 默认为0 |

### 响应

```
Status: 200 Ok
```

```json5
```json5
[
    {
        "id": 1,
        "name": "baishi",
        "following": false,
        "follower": false,
        "avatar": null,
        "bg": null,
        "verified": null,
        "extra": {
            "user_id": 1,
            "likes_count": 2,
            "comments_count": 9,
            "followers_count": 0,
            "followings_count": 0,
            "updated_at": "2017-08-17 07:05:06",
            "feeds_count": 0,
            "questions_count": 0,
            "answers_count": 19,
            "rank": 1
        }
    }
]
```

### 返回参数

| 名称 | 类型 | 说明 |
|:----:|:-----|------|
| extra.rank | int | 排行 |

> 其他数据结构参考「用户」接口用户资料