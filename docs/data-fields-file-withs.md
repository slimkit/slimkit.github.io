---
id: data-fields-file-withs
title: file_withs
---

附件关系

| 字段 | 类型 | 说明 |
| :- | :- | :- |
| id | int | 自增id |
| file_id | int | 文件id |
| user_id | int | 上传者 |
| channel | varchar | 记录频道 |
| raw | varchar | 原始频道关联信息 |
| size | varchar | 图片尺寸，目标文件如果是图片的话则存在。便于客户端提前预设盒子 |
