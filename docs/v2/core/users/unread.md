# 用户未读消息

- 该未读消息接口记录不含在通知内的消息，如当前用户收到的评论、点赞和未处理的审核等，调用相应的列表和操作接口，讲自动清零

```
get /user/unread-count
```

#### Response

```
Status: 200 OK
```
```json
{
    "counts": {
        "user_id": 1,
        "unread_comments_count": 0,
        "unread_likes_count": 0,
        "created_at": "2017-10-19 15:07:46",
        "updated_at": "2017-10-19 15:07:46"
    },
    "comments": [
        {
            "user_id": 2,
            "id": 14,
            "time": "2017-09-15 07:37:13",
            "user": {
                "id": 2,
                "name": "root1",
                "bio": null,
                "sex": 0,
                "location": null,
                "created_at": "2017-07-31 03:16:19",
                "updated_at": "2017-07-31 03:16:19",
                "avatar": null,
                "bg": null,
                "verified": null,
                "extra": {
                    "user_id": 2,
                    "likes_count": 2,
                    "comments_count": 9,
                    "followers_count": 0,
                    "followings_count": 0,
                    "updated_at": "2017-08-21 08:39:43",
                    "feeds_count": 0,
                    "questions_count": 1,
                    "answers_count": 19,
                    "checkin_count": 0,
                    "last_checkin_count": 0
                }
            }
        }
    ],
    "likes": [],
    "pinneds": {
        "news": {
            "time": null,
            "count": 0
        },
        "feeds": {
            "time": "2017-09-15 10:04:19",
            "count": 1
        }
    }
}
```

### 响应

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| counts | array/null | 用户未读消息统计，未产生任何记录时为null |
| counts.unread_comments_count | int | 未读评论数 |
| counts.unread_likes_count | int | 未读点赞数 |
| comments | array | 最近几条评论信息 |
| comments.time | time | 评论时间 |
| comments.user | array | 评论者信息 |
| likes | array | 最近几条点赞信息，数据格式同评论 |
| pinneds | array | 未处理审核统计, 目前可能有 `news` - 未处理的资讯评论置顶, `feeds` - 未处理的动态评论置顶 |
| pinneds.*.time | time/null | 最新一条待审核记录的时间 |
| pinneds.*.count | int | 未操作审核数 |