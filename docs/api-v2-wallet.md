---
id: api-v2-wallet
title: 钱包（旧版本）
---

和用户余额相关的信息，余额单位都是按照 CNY 的「分」作为单位。

接口不给现实数字，而是给出以 CNY 的「分」单位的数字，并在「启动者」中提供了显示转换比例，单位为百分比（%）

## 钱包信息

钱包信息提供进入钱包页面所需的附加信息记录接口。

> 在未来开发中，一些信息可能会被移动到「启动者」中。

```
GET /wallet
```

#### 响应

```
Status: 200 OK
```
```json5
{
    "labels":[ // 充值选项。
        550,
        2000,
        9900
    ],
    "ratio":200, // 转换比例（在启动者中也有提供哟）
    "rule":"我是积分规则纯文本.", // 充值提现规则。（以后需求中，可能是 markdown 目前是多行文本）
    // 可选提现的「提现方式」，按照现在系统预设，只有 alipay 和 wechat
    // type: array|null 如果 alipay 和 wechat 都不存在，则代表关闭提现功能
    "cash": [
        "alipay"
    ],
    "case_min_amount": 1, // 真实金额分单位，用户最低提现金额。
    "recharge_type": [ // 对于移动端而言，alipay wx 不存在则表示关闭了充值功能，单个不存在则表示关闭单个充值选项，iOS多一个 apple pay 选项，其他端，例如 h5 或者 pc 参考平台后缀。例如没有 alipay_wap 表示关闭 h5 的支付宝。
        "alipay",
        "alipay_wap",
        "wx",
        "wx_wap",
        "applepay_upacp"
    ]
}
```

## 钱包余额充值

接口使用统一的接口对接所有的充值，对接第三发平台为 Ping++，请先阅读 Ping++ 官方文档。

```
POST /wallet/recharge
```

### 输入

| 字段 | 必须 | 类型 | 描述 |
|----|:----:|:----:|:----:|
| type | 是 | string | 充值方式 （见「启动信息接口」或者「钱包信息」） |
| amount | 是 | int | 用户充值金额，单位为真实货币「分」单位 |
| extra | 否 | object,array | 拓展信息字段，见 [支付渠道-extra-参数说明](https://www.pingxx.com/api?language=PHP#支付渠道-extra-参数说明) |

```json5
{
    "type": "alipay_wap",
    "amount": 100, // 表示 1.00
    "extra": {
        "success_url": "https://plus.io/web/recharge" // 这个字段只是示例，这是 支付宝 wap 支付独有参数。
    }
}
```

#### 响应

```
Status: 201 Created
```
```json5
{
  "id": 8, // ThinkSNS+ 系统凭据 ID
  "charge": { // Ping++ 凭据
    "id": "ch_08anD0a9yjPCLyvbTODqXrnT",
    "object": "charge",
    "created": 1496819712,
    "livemode": false,
    "paid": false,
    "refunded": false,
    "app": "app_5anXP4ezfXvL8m5e",
    "channel": "applepay_upacp",
    "order_no": "a0000000000000000008",
    "client_ip": "127.0.0.1",
    "amount": 500,
    "amount_settle": 500,
    "currency": "cny",
    "subject": "余额充值",
    "body": "账户余额充值",
    "extra": {},
    "time_paid": null,
    "time_expire": 1496906112,
    "time_settle": null,
    "transaction_no": null,
    "refunds": {
      "object": "list",
      "url": "/v1/charges/ch_08anD0a9yjPCLyvbTODqXrnT/refunds",
      "has_more": false,
      "data": []
    },
    "amount_refunded": 0,
    "failure_code": null,
    "failure_msg": null,
    "metadata": {},
    "credential": {
      "object": "credential",
      "applepay_upacp": {
        "tn": "201706071515122891443",
        "mode": "00",
        "merchant_id": "Your app merchant id"
      }
    },
    "description": null
  }
}
```

#### Type 场景

| name | 描述 |
|----|----|
| applepay_upacp | Apple Pay (仅对 iOS 有效) |
| alipay | App 发起支付宝支付选项 |
| alipay_wap | 手机网页发起支付宝支付 |
| alipay_pc_direct | PC 网页发起支付宝支付 |
| alipay_qr | 支付宝扫码支付，前度生成二维码 |
| wx | App 发起微信支付 |
| wx_wap | 手机网页发起微信支付 |


## 凭据获取

凭据获取用于获取用户订单凭据详细信息，其中还包含凭据取回。

```
GET /wallet/charges/:charge
```

`:charge` 为创建订单或者列表给出的凭据 ID

#### 响应

```
Status: 200 OK
```
```json5
{
  "id": 1, // 凭据ID
  "user_id": 1, // 凭据对应用户（不一定有，该凭据对应的用户，客户端几乎用不到的。）
  "channel": "alipay", // 支付频道
  "account": "alipay_account", // 账户，如果是系统内购买，例如购买一张图片，会和频道对应，然后给出不同的值，例如支付宝给出的是支付宝账号。微信给出的是 open_id、银联给出的是银行卡号。channel 还有我们系统内置类型，例如 user 可能对应的就是用户ID（例如转账）
  "charge_id": "ch_vvP4u1H0evPGqn9qn5mPCGS4", // Ping++ 凭据ID
  "action": 1, // 动作， 1 增加、2 减少
  "amount": 100, //  操作金额（真实货币分单位）
  "currency": "cny", // 操作货币单位,目前只有 cny 
  "subject": "余额充值", // 订单标题
  "body": "账户余额充值", // 订单描述
  "transaction_no": "2017060879918233", // 第三发平台凭据ID 例如支付宝订单号
  "status": 1, // 状态，0 - 未支付（等待）、1 - 成功、2 - 失败
  "created_at": "2017-06-07 06:32:28", // 订餐创建时间
  "updated_at": "2017-06-08 06:46:23", // 订单更新时间
  "deleted_at": null
}
```

#### 凭据取回

凭据取回，可以理解成第三发验证获取，服务器会调用第三发接口取回凭据状态，重置凭据状态，并充值用户余额。

```
GET /wallet/charges/:charge?mode=retrieve
```

响应数据和「凭据获取」相同

> 该模式只会生效一次，之后传递则不会生效，参数不要乱传，如果非支付订单传递该参数，则会抛出 422 验证异常。


## 凭据列表

```
GET /wallet/charges
```

#### 参数

| 名称 | 类型 | 描述 |
|:----:|:----:|----|
| limit | 整数 | 获取的数据条数。 |
| after | 整数 | 上一次获取最后一条的id，获取该id之后的数据。 |
| action | 整数 | 筛选条件 0-支出 1-收入 |

#### 响应

```
Status: 200 OK
```
```json5
[
  {...} // 单条内容参考 「凭据获取」数据
]
```

## 提现申请

```
POST /wallet/cashes
```

### Input

| 名称 | 类型 | 描述 |
|----|:----:|:----:|
| value | int | 用户需要提现的余额数量 |
| type | string | 用户提现账户方式 |
| account | string | 用户提现账户 |

```json5
{
    "value": 100,
    "type": "alipay"
    "account": "xxx@alipay.com"
}
```

> value 的值是用户输入的余额值按照「转换比例」转换后再转化为「分」单位
> 分的转换值为 100，按照比例转换单位后乘100以保证没有小数出现

##### Headers

```
Status: 201 Created
```

##### Body

```json5
{
  "value": [
    "请输入提现金额", // 用户没用输入
    "发送的数据错误", // 发送错误的数据给服务器（非正整数）
    "输入的提现金额不合法", // 发送给服务器小于 1
    "提现金额超出账户余额", // 用户提现金额超出余额
  ],
  "type": [
    "请选择提现方式", // 没有发送提现方式
    "你选择的提现方式不支持" // 提现的方式后台设置不允许提现
  ],
  "account": [
    "请输入你的提现账户" // 没有输入账户
  ],
  "message": [
    "申请提现成功", // 成功
    "申请失败" // 失败
  ]
}
```

## 提现申请列表

```
GET /wallet/cashes
```

> limit=20&after=3
> limit 可以设置获取数量
> after 获取更多数据，上一次获取列表的最后一条 ID

#### Headers

```
Status: 200 OK
```

#### Body

```json5
[
  {
    "id": 4, // 提现记录ID
    "value": 10, // 提现金额
    "type": "alipay", // 提现方式
    "account": "xxx@alipay.com", // 提现账户
    "status": 0, // 提现状态， 0 - 待审批，1 - 已审批，2 - 被拒绝
    "remark": null, // 备注，审批或者拒绝的时候由管理填写
    "created_at": "2017-06-01 09:30:22" // 申请时间
  },
  {
    "id": 3,
    "value": 10,
    "type": "wechat",
    "account": "xxxx",
    "status": 0,
    "remark": null,
    "created_at": "2017-06-01 09:29:09"
  }
]
```
