# 启动信息

启动信息是在调用接口前的需求，可以在应用启动的时候一次性获取全部通用配置信息。

## 启动信息的移动端处理方式

移动端在版本发布支出将部分配置信息的默认配置打包写入本地.应用使用过程中更新启动信息,优先使用服务器提供的最新的信息.

## 列出所有启动者配置

```
GET /bootstrappers
```

#### 响应

```
Status: 200 OK
```
```json5
{
    "im:serve": "127.0.0.1:9900" // IM 服务器地址
    "im:helper": [ // IM 聊天助手用户信息
        {
            "uid": 1, // 用户ID
            "url": "https://plus.io/users/1" // 主页地址 URL
        }
        // ...
    ],
    "wallet:ratio": 200, // 转换显示余额的比例，百分比。（200 就表示 200%）
    "wallet:recharge-type": [ // 此配置支持全平台的支付方式，不同平台更具自身平台对应值判断是非支持该支付方式。
        "alipay", // "支付宝 APP 支付",
        "alipay_wap", // "支付宝手机网页支付",
        "alipay_pc_direct", // "支付宝电脑网站支付",
        "alipay_qr", // "支付宝扫码支付",
        "wx", // "微信 APP 支付",
        "wx_wap", // "微信 WAP 支付",
        "applepay_upacp" // "Apple Pay"
    ],
    "wallet:cash": {
        "open": true
    },
    "wallet:recharge": {
        "open": true
    },
    "ad":[
        {
            "id":1,
            "title":"广告1",
            "type":"image",
            "data":{
                "image":"https://avatars0.githubusercontent.com/u/5564821?v=3&s=460",
                "link":"https://github.com/zhiyicx/thinksns-plus"
            }
        },
            {
            "id":2,
            "title":"广告2",
            "type":"markdown",
            "data":"# 广告2\n我是广告2"
        },
        {
            "id":3,
            "title":"广告3",
            "type":"html",
            "data":"<h1>广告3</h1><p>我不管我不管</p><script>alert('我是广告3')</script>"
        },
        {
            "id":4,
            "title":"广告4",
            "type":"user:id",
            "data":"1"
        }
    ],
    "site": {
        
        "reserved_nickname": "root,admin",
        "client_email": "admin@123.com",
        "gold": {
            "status": false
        },
        "reward": {
            "status": false,
            "amounts": "5,10,15"
        },
        "user_invite_template": "我发现了一个全平台社交系统ThinkSNS+，快来加入吧：http://t.cn/RpFfbbi"
    },
    "registerSettings": {
        "showTerms": false,
        "registerMode": "all",
        "completeData": true,
        "accountType": "all",
        "content": "# 服务条款及隐私政策",
        "type": "mobile-only",
        "method": "invited"
    },
}
```
## 参数详解

| 参数名 | 参数含义 | 枚举 | 备注 |
| :----: | :----: | :----: | :----: |
| im | 聊天相关 |  |  | 
| im:serve | 聊天服务器地址 |  | 需要im扩展以及IM服务端配合使用 |
| im:helper | 聊天助手 |  |  |
| wallet | 钱包相关 |  |  |
| wallet:ratio | 显示金额与服务端金额的转换比例 |  | 显示金额 = 服务端金额 / wallet:ratio |
| wallet:cash | 钱包提现的开关选项 | | |
| wallet:recharge | 钱包充值的开关选项 | | |
| ad | 广告位相关 |  | |
| site | 系统配置相关 |  | 类型：json对象 |
| site.gold:status | 是否开启积分系统 | true：开启，false：关闭 | 控制前端展示相应的积分模块，类型：Boolean |
| site.reward.status | 是否开启打赏 | true：开启，false：关闭 | 控制平台的打赏开关， 类型：Boolean |
| site.reward.amounts | 打赏金额配置 | '5,10,15'... | 打赏金额配置，用半角逗号分隔 |
| site.gold_name | 积分的展示名称 |  | 积分在前端显示的名称 |
| site.gold_name.name | 积分昵称 | 金币,豆子,贝壳... |  |
| site.gold_name.unit | 积分昵称的单位 | 个,枚,粒 |  |
| site.reserved_nickname | 站点预留昵称 | 'admin,root'... | 注册时不能够使用的昵称，用半角逗号分隔 |
| site.user_invite_template | 邀请注册的短信模板 |  | 类型：string |
| registerSettings | 注册相关 |  |  |
| registerSettings.open | 是否开放注册 | true：开放，false：关闭 |  |
| registerSettings.showTerms | 注册时展示服务条款及隐私政策 | true：展示，false：不展示 | 类型：Boolean |
| registerSettings.completeData | 注册完成后是否需要立即完善资料 | true：需要，false：不需要 | 类型：Boolean |
| registerSettings.content | 用户服务条款及隐私政策 |  | 类型：string，格式：markdown |
| registerSettings.type | 用户注册方式 | invited: 仅邀请，  all: 全部， thirdPart: 第三方 |  注册方式控制类型：string |
| registerSettings.method | 用户注册类型 | mobile-only: 仅手机， mail-only: 仅邮箱，all： 邮箱或手机 |  类型：string |

