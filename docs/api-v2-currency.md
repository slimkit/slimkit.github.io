---
id: api-v2-currency
title: 积分
---

# 积分部分

- [获取积分配置](#get-currency-config)
- [积分流水](#orders)
- [发起充值](#create-order)
- [取回凭据](#order-retrieve)
- [充值回调](#webhook)
- [发起提现](#create-cash)
- [发起 IAP(in-App Purchase) 充值](#create-apple-iap)
- [验证 IAP 订单](#verify-apple-iap)
- [获取苹果IAP商品列表](#get-apple-iap-plist)
- [积分商城（待开发）](#currency-shop)
- [IAP帮助页面](#iap-help)

<a name="get-currency-config"></a>
## 获取积分配置

```
GET /currency
```

### 响应

```
Http Status 200
```

```json
{
    "recharge-ratio": 1,
    "recharge-options": "100, 500, 1000, 2000, 5000, 10000",
    "recharge-max": 10000000,
    "recharge-min": 100,
    "recharge-rule": "123123",
    "cash-max": 10000000,
    "cash-min": 100,
    "rule": "123123",
    "cash-rule": "123123",
    "apple-IAP-rule": "12312",
    "cash": [
        "alipay",
        "wechat"
    ],
    "recharge-type": [
        "alipay",
        "alipay_pc_direct",
        "applepay_upacp"
    ]
}
```

| 名称 | 类型 | 描述 |
|:----:|:----:|:-----|
| recharge-ratio | int | 兑换比例，人民币一分钱可兑换的积分数量 |
| recharge-options | string | 充值选项，人民币分单位 |
| recharge-max | int | 单笔最高充值额度 |
| recharge-min | int | 单笔最小充值额度 |
| cash-max | int | 单笔最高提现额度 |
| cash-min | int | 单笔最小提现额度 |
| rule | string | 积分规则 |
| recharge-rule | string | 积分充值规则 |
| cash-rule | string | 积分提现规则 |
| apple-IAP-rule | string | 苹果IAP积分充值规则 |
| cash | array | 允许的提现方式 |
| recharge-type | array | 允许的充值方式 |

<a name="orders"></a>
## 积分流水

```
GET /currency/orders
```

### 可选参数

| 名称 | 类型 | 描述 |
|:----:|:----:|:-----|
| limit | int | 数据返回条数 |
| after | int | 翻页数据id |
| action | string | 筛选类型 `recharge` - 充值记录 `cash` - 提现记录  默认为全部|
| type | int | 收入类型 `1` - 收入， `-1` - 支出 默认为全部 |

### 响应

```
Http Status 200
```

```json
[
    {
        "id": 11,
        "owner_id": 1,
        "title": "积分充值",
        "body": "充值积分：200积分",
        "type": 1,
        "target_type": "recharge",
        "target_id": "0",
        "currency": 1,
        "amount": 200,
        "state": 0,
        "created_at": "2018-01-18 07:57:21",
        "updated_at": "2018-01-18 07:57:21"
    },
    {
        "id": 4,
        "owner_id": 1,
        "title": "积分提取",
        "body": "提取积分：200积分",
        "type": -1,
        "target_type": "cash",
        "target_id": "0",
        "currency": 1,
        "amount": 200,
        "state": 0,
        "created_at": "2018-01-18 06:56:25",
        "updated_at": "2018-01-18 06:56:25"
    }
]
```

### 可选参数

| 名称 | 类型 | 描述 |
|:----:|:----:|:-----|
| id   | int  | 数据id |
| owner_id | int | 用户（所属者）id |
| title | string | 记录标题 | 
| body | string | 记录信息 |
| type | int | 增减类型 `1` - 收入、 `-1` - 支出 |
| target_type | string | 操作类型 目前有： `default` - 默认操作、`commodity` - 购买积分商品、`user` - 用户到用户流程（如采纳、付费置顶等）、`task` - 积分任务、`recharge` - 充值、`cash` - 积分提取 |
| target_id | string | 当操作类型为`user`时，为用户id|
| currency | int | 后台预设积分类型id，当前需求中暂无该需求，默认为1，类型为`积分` |
| amount | int | 积分额 |
| state | int | 订单状态 `0` - 等待、`1` - 完成、`-1` - 失败|


<a name="create-order"></a>
## 发起充值

```
POST /currency/recharge
```

### 输入参数

| 字段 | 必须 | 类型 | 描述 |
|----|:----:|:----:|:----:|
| type | 是 | string | 充值方式 （见「启动信息接口」或者「钱包信息」） |
| amount | 是 | int | 用户充值金额，单位为真实货币「分」单位，充值完成后会根据积分兑换比例增加相应数量的积分 |
| extra | 否 | object,array | 拓展信息字段，见 [支付渠道-extra-参数说明](https://www.pingxx.com/api?language=PHP#支付渠道-extra-参数说明) |

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
    "body": "积分充值",
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
    "order_no": "C0000000000000000008",
    "client_ip": "127.0.0.1",
    "amount": 500,
    "amount_settle": 500,
    "currency": "cny",
    "subject": "余额充值",
    "body": "积分余额充值",
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

### Type 场景

| name | 描述 |
|----|----|
| applepay_upacp | Apple Pay (仅对 iOS 有效) |
| alipay | App 发起支付宝支付选项 |
| alipay_wap | 手机网页发起支付宝支付 |
| alipay_pc_direct | PC 网页发起支付宝支付 |
| alipay_qr | 支付宝扫码支付，前度生成二维码 |
| wx | App 发起微信支付 |
| wx_wap | 手机网页发起微信支付 |

<a name="order-retrieve"></a>
## 取回凭据

```
GET /api/v2/currency/orders/{order}
```

#### 响应

```
HTTP Status 200
```

```json
{
    "id": 11,
    "owner_id": 1,
    "title": "积分充值",
    "body": "充值积分：200积分",
    "type": 1,
    "target_type": "recharge",
    "target_id": "0",
    "currency": 1,
    "amount": 200,
    "state": 0,
    "created_at": "2018-01-18 07:57:21",
    "updated_at": "2018-01-18 07:57:21"
}
```
<a name="webhook"></a>
## 回调通知

```
POST /api/v2/currency/webhooks
```

供给ping++平台回调通知调用的接口

<a name="create-cash"></a>
## 发起提现

```
POST /api/v2/currency/cash
```

### 传入参数

| 名称 | 类型 | 描述 |
|:----:|:----:|:-----|
| amount | int | 提取积分，发起该操作后会根据积分兑换比例取人民币分单位整数后扣减相应积分 |

### 响应

```
Http Status 201
```

```json
{
    "message": [
        "操作成功"
    ]
}
```
<a name="create-apple-iap"></a>
## 发起IAP充值

```
POST /currency/recharge/apple-iap
```

### 输入参数

| 字段 | 必须 | 类型 | 描述 |
|----|:----:|:----:|:----:|
| amount | 是 | int | 用户充值金额，单位为真实货币「分」单位，充值完成后会根据积分兑换比例增加相应数量的积分 |


#### 响应

```
HTTP Status 201
```

```json
{
    "id": 11,
    "owner_id": 1,
    "title": "积分充值",
    "body": "充值积分：200积分",
    "type": 1,
    "target_type": "recharge",
    "target_id": "0",
    "currency": 1,
    "amount": 200,
    "state": 0,
    "created_at": "2018-01-18 07:57:21",
    "updated_at": "2018-01-18 07:57:21"
}
```


<a name="verify-apple-iap"></a>
## 验证 IAP 充值

```
POST /currency/orders/:order/apple-iap/verify
```

## 输入参数

| 字段 | 类型 | 描述 |
|:----:|:-----|:-----|
| receipt | array | 数组格式的收据编码 |

### 响应

```
HTTP Status 200
```

```json
{
    "id": 11,
    "owner_id": 1,
    "title": "积分充值",
    "body": "充值积分：200积分",
    "type": 1,
    "target_type": "recharge",
    "target_id": "0",
    "currency": 1,
    "amount": 200,
    "state": 0,
    "created_at": "2018-01-18 07:57:21",
    "updated_at": "2018-01-18 07:57:21"
}
```

<a name="get-apple-iap-plist"></a>
## 获取苹果IAP商品列表

```
GET /currency/apple-iap/products
```


### 响应

```json
[
    {
        "product_id": "1",
        "name": "积分1",
        "apple_id": "11211",
        "amount": "600"
    }
]
```

### 返回参数

| 名称 | 类型 | 描述 |
|:----:|:-----|:-----|
| product_id | string | 商品id |
| name | string | 商品名称 |
| apple_id | string | |
| amount | string | 商品金额 |

<a name="currency-shop"></a>
## 积分商城

```
GET /currency/shop
```


<a name="iap-help"></a>
## IAP 帮助页面

```
GET /currency/apple-iap/help
```
