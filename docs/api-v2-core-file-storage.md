---
id: api-v2-core-file-storage
title: 文件存储
---

## 厂商标识

| 标识 | 厂商 |
|----|----|
| `local` | 本地系统 |
| `aliyun-oss` | 阿里云 OSS |

## 频道标识

| 标识 | 描述 |
|----|----|
| `public` | 用于公开图片，例如用户头像，或者不需要付费的任何图片使用 `public` 作为频道 |

## 创建上传任务

```
/api/v2/storage
```

请求内容参数：

| 参数 | 类型 | 描述 |
|----|----|----|
| `filename` | `string` | **必须**，文件原始名称（需要带上文件拓展名） |
| `hash` | `string` | **必须**，文件的 MD5 算法进行计算的值，采用 `32` 位算法字符 |
| `size` | `integer` | **必须**，文件内容大小 |
| `mime_type` | `string` | **必须**，文件 MIME 类型 |
| `storage` | `array` | **必须**，文件存储信息 |
| `storage.channel` | `string` | **必须**，允许的「[频道标识](#频道标识)」 |

响应：

```
Status: 201 Created
```
```json5
{
    "uri": "https://seven-local.oss-cn-beijing.aliyuncs.com/2018/09/05/TxgUMmw25De0t1PCiXkqpMqVAvWFCFFWlNKwd8Xl4V0mxyDvb7ISj0PmTUFH5PJH.png?OSSAccessKeyId=LTAIqgpxMlsPodLB&Expires=1536141182&Signature=EuCsfHaiGnkhDQ4D8wys%2FU7pYtQ%3D", // 上传文件的请求地址
    "method": "PUT", // 上传文件的请求方式
    "headers": { // 上传文件时候，headers 必须的键值
        "Content-Disposition": "attachment;filename=demo.png",
        "Content-Md5": "UC57soIyuC7SPBgHe47MNA==",
        "Content-Length": 802930,
        "Content-Type": "image/png"
    },
    "form": null, // 上传时候的表单，如果是 NULL 则表示整个 Body 是二进制文件流，如果是对象，则构造 `application/form-data` 表单对象
    "file_key": null, // 如果存在 `form` 表单信息，文件流所使用的 key 名称
    "node": "public:2018/09/05/TxgUMmw25De0t1PCiXkqpMqVAvWFCFFWlNKwd8Xl4V0mxyDvb7ISj0PmTUFH5PJH.png" // 文件上传完成后所使用的文件节点
}
```

## 文件附带信息

这里是指使用文件对象的附带信息。例如用户资料种的 `avatar` 字段：

```json5
{
    /// ...
    "avatar": {
        "url": "http://127.0.0.1:8000/storage/public:MjAxOC8wOS8wNS9UeGdVTW13MjVEZTB0MVBDaVhrcXBNcVZBdldGQ0ZGV2xOS3dkOFhsNFYwbXh5RHZiN0lTajBQbVRVRkg1UEpILnBuZw==", // 文件请求地址，GET 方式
        "vendor": "aliyun-oss", // 厂商名称
        "mime": "image/png", // 文件 MIME
        "size": 802930, // 文件尺寸
        "dimension": {  // 如果文件是图片，将返回文件的尺寸信息
            "width": 2800, // 图片宽度
            "height": 1867 // 图片高度
        }
    },
    /// ...
}
```

## 文件处理规则

文件处理规则是在得到文件请求地址后，使用「查询参数」`rule` 进行传递参数。这里的参数是根据 `vendor` 自动客户端自行调整的。

### 本地存储（local）

本地存储仅支持「**图片**」处理，其他文件一律不处理。规则如下：

| 名称 | 描述 |
|----|----|
| `w` | **可选**，指定图片宽度 |
| `h` | **可选**，指定图片高度 |
| `q` | **可选**，指定图片质量，`0` - `90` |
| `b` | **可选**，指定图片高斯模糊程度，`0` - `100` |

参数和值使用 `_` 进行链接，多个参数使用 `,` 进行分割，例如指定图片宽度为 200，规则为 `w_200`，
多个参数，例如指定宽高和模糊：`w_100,h_100,b_60`。

拼接出来的请求完整 URL 如：

```
http://127.0.0.1:8000/storage/public:MjAxOC8wOS8wNS9UeGdVTW13MjVEZTB0MVBDaVhrcXBNcVZBdldGQ0ZGV2xOS3dkOFhsNFYwbXh5RHZiN0lTajBQbVRVRkg1UEpILnBuZw==?rule=w_100,h_100,b_60
```

### 其他厂商

- [阿里云 OSS - 图片处理](https://help.aliyun.com/document_detail/44686.html)
