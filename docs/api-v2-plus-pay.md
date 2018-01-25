---
id: api-v2-plus-pay
title: Plus Pay（新钱包-支付工具）
---

和用户余额相关的信息，余额单位都是按照 CNY 的「分」作为单位。

新版钱包部分只提供跟真实金额有关的操作，充值相关操作暂只对接ping++支付平台

## 敏感操作

部分接口将被设置为敏感操作接口，此类接口需要额外传入当前账户密码`password`作为账户凭据验证

### 接口

- [钱包流水](#钱包流水)
- [提现列表](#提现列表)
- [发起提现](#发起提现)
- [发起充值](#发起充值)
- [取回凭据](#取回凭据)
- [回调通知](#回调通知)
- [转账](#转账)
- [转换积分](#转换积分)

### 钱包流水

```
GET /api/v2/plus-pay/orders
```

### 可选参数

| 参数 | 类型 | 说明 |
|:----:|:----:|:-----|
| limit | int | 可以设置获取数量 |
| after | int | 获取更多数据，上一次获取列表的最后一条 ID |
| action | string | income - 收入 expenses - 支出 |

### 响应

```
Status 200
```

```json
[
    {
        "id": 1,
        "owner_id": 1,
        "target_type": "user",
        "target_id": "2",
        "title": "转账",
        "body": null,
        "type": -1,
        "amount": 1000,
        "state": 1,
        "created_at": "2018-01-02 02:26:33",
        "updated_at": "2018-01-02 02:26:33"
    },
    {
        "id": 6,
        "owner_id": 1,
        "target_type": "widthdraw",
        "target_id": "0",
        "title": "提现",
        "body": null,
        "type": -1,
        "amount": 1000,
        "state": 1,
        "created_at": "2018-01-02 06:00:58",
        "updated_at": "2018-01-02 06:00:58"
    },
    {
        "id": 19,
        "owner_id": 1,
        "target_type": "recharge_ping_p_p",
        "target_id": "0",
        "title": "充值",
        "body": "余额充值",
        "type": 1,
        "amount": 1000,
        "state": 0,
        "created_at": "2018-01-04 07:29:03",
        "updated_at": "2018-01-04 07:29:03"
    }
]
```

#### 返回参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| id   | int  | 记录id |
| owner_id | int | 所属者id |
| target_type | string | 操作类型 `recharge_ping_p_p` - 充值, `widthdraw` - 提现, `user` - 转账, `reward` - 打赏  |
| target_id | string | 账户 |
| title | string | 标题 |
| body | string | 内容 |
| type | int | `1` - 收入 `-1` - 支出 |
| amount | int | 金额，分单位 |
| state | int | 订单状态，0: 等待，1：成功，-1: 失败 |

### 提现列表

```
GET /api/v2/plus-pay/cashes
```

#### 请求参数

| 参数 | 类型 | 说明 |
|:----:|:----:|:-----|
| limit | int | 可以设置获取数量 |
| after | int | 获取更多数据，上一次获取列表的最后一条 ID |

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

### 发起提现

```
POST /api/v2/plus-pay/cashes
```

#### 请求参数 

| 名称 | 类型 | 描述 |
|----|:----:|:----:|
| value | int | 用户需要提现的金额 |
| type | string | 用户提现账户方式 |
| account | string | 用户提现账户 |

```json
{
    "value": 100,
    "type": "alipay"
    "account": "xxx@alipay.com"
}
```

##### Headers

```
Status: 201 Created
```

##### Body

```json
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

### 发起充值

接口使用统一的接口对接所有的充值，对接第三发平台为 Ping++，请先阅读 Ping++ 官方文档。

```
POST /api/v2/plus-pay/recharge
```

### 输入

| 字段 | 必须 | 类型 | 描述 |
|----|:----:|:----:|:----:|
| type | 是 | string | 充值方式 （见「启动信息接口」或者「钱包信息」） |
| amount | 是 | int | 用户充值金额，单位为真实货币「分」单位 |
| extra | 否 | object,array | 拓展信息字段，见 [支付渠道-extra-参数说明](https://www.pingxx.com/api?language=PHP#支付渠道-extra-参数说明) |

```json
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
```json
{
  "order": {
    "id": 1,
    "owner_id": 1,
    "target_type": "recharge_ping_p_p",
    "target_id": 1,
    "title": "充值",
    "body": "余额充值",
    "type": -1,
    "amount": 500,
    "state": 0,
    "created_at": "2018-01-04 07:29:57",
    "updated_at": "2018-01-04 07:29:57"
  }, // 钱包记录数据信息
  "pingpp_order": { // Ping++ 凭据
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


### 取回凭据

```
GET /api/v2/plus-pay/orders/{order}
```

#### 响应

```
HTTP Status 200
```

```json
{
    "id": 1,
    "owner_id": 1,
    "target_type": "recharge_ping_p_p",
    "target_id": 1,
    "title": "充值",
    "body": "余额充值",
    "type": -1,
    "amount": 500,
    "state": 0,
    "created_at": "2018-01-04 07:29:57",
    "updated_at": "2018-01-04 07:29:57" 
}
```

### 回调通知

```
POST /api/v2/plus-pay/webhooks
```

供给ping++平台回调通知调用的接口


### 转账

```
POST /api/v2/plus-pay/transfer
```

### 输入参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| user | int  | 用户id |
| amount | int | 转账金额，分单位 |

### 响应

```
Status 201
```

```json
{
    "message": ['转账成功']
}
```

## 转换积分

```
POST /plus-pay/transform
```

### 输入参数

| 名称 | 类型 | 说明 |
|:----:|:-----|:-----|
| amount | int | 转账金额，分单位 |

### 响应

```
Status 201
```

```json
{
    "message": ['操作成功']
}
```
