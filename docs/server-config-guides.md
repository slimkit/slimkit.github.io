---
id: server-config-guides
title: 服务端配项说明
---

> 系统配置是开启一切的钥匙

为了能让大家能够对各个配置项的作用更加了解, 在此我们对ThinkSNS+的配置项做一个具体的分析

***文档中所提到废弃配置, 是已经废弃的配置, 可能在部分老版本中还存在; 并且此配置我们依旧会不停优化, 达到最佳效果***

### 配置文件所在位置
1. .env文件 「laravel默认配置文件」
.env文件详解,请见laravel文档 [.env「中文」](https://laravel-china.org/docs/laravel/5.6/configuration) [.env「英文」](https://laravel.com/docs/5.6/configuration)
2. config目录中的所有文件 「扩展包配置文件」
请看laravel扩展包相关文档 [扩展包的configuration](https://laravel-china.org/docs/laravel/5.6/packages#package-discovery)

3. .plus.yml文件 「后台设置存放的配置文件」, **`配置文件的优先级最高`**, 然后是config目录中的配置文件, 最后才是.env文件
这个文件是此文档主要讲解的内容, 请看详解

>YAML（IPA: /ˈjæməl/，尾音类似camel骆驼）是一个可读性高，用来表达资料序列的编程语言。
文件后缀 .yml

### 站点设置部分
对应后台设置中: 系统设置 -> 站点设置
``````
site: // 站点标识
    gold: // 积分标识
        status: true // 是否开启积分 Boolean [true, false]
    reward: // 打赏标识
        status: true // 是否开启打赏 Boolean [true, false]
        amounts: '100,500,1000' // 打赏金额选项, 单位为「分」, 使用「半角逗号」分割
    reserved_nickname: 'root,admin' // 预留站点昵称「半角逗号」分割
    client_email: admin@123.com // 客服邮箱
    user_invite_template: '我发现了一个全平台社交系统ThinkSNS+，快来加入吧：http://t.cn/RpFfbbi' // 客户端[Android, iOS]邀请短信模板, 短链接无法自动生成
    anonymous: // 匿名设置
        status: true // 可匿名状态 [true, false]
        rule: 可以使用匿名 // 匿名规则说明
    about_url: http://www.thinksns.com
    status: true // 弃用设置
    off_reason: 站点维护中请稍后再访问 // 弃用设置
    app: // 弃用设置
        status: true // 弃用设置
    h5: // 弃用设置
        status: true // `弃用设置`
    background: 
        logo: /api/v2/files/4
``````

### 签到设置

``````
checkin: // 签到设置
    open: true // 是否开启[true, false]
    attach_balance: 1 // 签到后获取的积分
``````

### PC扩展包设置
此配置并非TS+主干带有, 需要安装PC扩展包

**`注: QQ第三方登录 ios && android客户端使用的是腾讯开放平台, pc && h5使用的QQ互联, 需要发送邮件至腾讯进行应用合并`**

**`注: QQ第三方登录 ios &&a ndroid客户端使用的是腾讯开放平台, pc && h5还使用的QQ互联, 需要发送邮件至腾讯进行应用合并`**

**`注: QQ第三方登录 ios && android客户端使用的是腾讯开放平台, pc && h5使用的QQ互联, 需要发送邮件至腾讯进行应用合并`**
<hr />

**`注: 微信第三方登录 IOS && Android && PC 使用的微信开放平台, H5使用的是微信公众号授权登录, 需要在开放平台绑定公众号`**

**`注: 微信第三方登录 IOS && Android && PC 使用的微信开放平台, H5使用的是微信公众号授权登录, 需要在开放平台绑定公众号`**

**`注: 微信第三方登录 IOS && Android && PC 使用的微信开放平台, H5使用的是微信公众号授权登录, 需要在开放平台绑定公众号`**

重要的事情要说三遍
``````
pc: // pc扩展包配置
    installed: true // 判断是否安装, 做跳转判断
    routeName: 'pc:feeds' // pc默认跳转路由名称
    stats_code: null
    status: '0' // pc扩展包是否开启, 暂未使用
    logo: 0 // pc扩展包logo, 为file_with_id
    loginbg: 0 // pc扩展包登录页背景图, 为 file_with_id
    site_name: ThinkSNS+ // pc 页面title
    site_copyright: 'Powered by ThinkSNS ©2017 ZhishiSoft All Rights Reserved.' // pc 版权
    site_technical: ThinkSNS // 技术支持提供方
    weibo: // 三方登录: 微博
        client_id: null // 微博开放平台 应用id
        client_secret: null // 微博开放平台 应用密钥
    wechat: // 三方登录: 微信
        client_id: null // 微信开放平台 应用id
        client_secret: null // 微信开放平台 应用密钥
    qq: // 三方登录: QQ
        client_id: null // QQ互联应用id
        client_secret: null QQ互联 应用密钥
``````

### 注册设置

对应后台设置: 用户中心 -> 注册设置
``````
registerSettings: // 注册设置
    showTerms: true // 显示注册条款 [true, false]
    method: all // 账号类型[仅手机, 仅邮箱, 手机和邮箱]
    fixed: need // 是否需要完善资料
    type: all // 注册方式 [all]
    content: '# 服务条款及隐私政策' // 注册条款

``````

### 本地即时聊天配置
``````
im:
    open: true // 废弃配置
``````

### 基本信息配置
对应后台设置: 系统设置 -> 基本信息
``````
app:
    name: ThinkSNS+ // 站点名称
    keywords: ThinkSNS+ // 站点关键字
    description: ThinkSNS+ // 站点简介
    icp: 蜀ICP备-293898923 // icp备案信息
``````

### 附件管理
``````
cdn:
    default: filesystem // 选中的附件存储类型
    generators:
        filesystem: // 本地文件
            disk: public 
        alioss: // 阿里OSS
            bucket: bucket // bucket名字
            endpoint: 'https://img.zhibocloud.cn' // 加速域名或者oss自带域名
            AccessKeyId: access_key 
            AccessKeySecret: secret_key
            ssl: true // 是否开启ssl协议「需要在oss开启, 并且endpoint需要https」
            public: false // 是否可以公开浏览 [true, false]
            expires: 3600 // 私有认证的有效时间 「单位: 秒」
            cname: true // 是否加速 [true, false]
        qiniu: // 七牛云存储
            domain: 'https://images.zhibocloud.cn' // 加速域名
            sign: false // 签名公开与否 [true, flase]
            expires: 3600 // 签名有效时间 「单位秒」
            ak: access_key
            sk: secret_key
            type: object // 对象存储/融合cdn
            bucket: bucket // 存储bucket
``````
### 动态扩展包
``````
feed:
    paycontrol: true // 是否开启付费内容
    limit: 100 // 收费文字长度, 设置收费后有效
    items: // 付费预设积分选项
        - 100
        - 500
        - 1000
    reward: true // 是否开启打赏 [true, false], 打赏预设选项有站点设置控制
``````

### 资讯设置
``````
news:
    pay_contribute: 1000 // 投稿所需积分 开启付费投稿有效
    contribute:
        verified: true // 是否开启认证用户投稿
        pay: true // 是否开启付费投稿
``````
### 邮件配置
``````
mail: 
    driver: smtp // 邮件驱动 [smtp, log], log为本地日志记录, 不发送, 用于测试
    host: smtp.zhibocloud.cn // smtp邮件服务器地址
    port: '2525' // 邮件服务器端口
    from: // 邮件作者设置
        address: hello@example.com
        name: Example
    encryption: ssl // 传输加密协议 [tls, ssl]
    username: root // 发件账号
    password: '123456' // 发件密码
``````
### 积分配置
``````
currency:
    recharge: // 充值
        IAP: // iOS IAP充值
            only: true // 是否开启IAP, 用户app上架
            rule: ddddd // IAP充值规则
        rule: 积分充值规则 // 积分充值规则
        status: true // 
    rule: 积分规则 // 积分总则
    cash:
        rule: 积分体现规则 // 积分提现规则 
        status: true // 是否开启积分转余额
``````
### 附件上传大小设置
``````
files:
    upload_max_size: '10240' // 单位: K
``````

### 短信设置
``````
sms:
    default:
        allowed_gateways: // 默认开启的网关
            - aliyun
            - alidayu
            - yunpian
        gateways: // 开启的网关
            - aliyun
            - alidayu
            - yunpian
    channels:
        code: // 短信模版ID 有短信供应商提供
            alidayu:
                template: xx_123456
            aliyun:
                template: sm_123456
            yunpian:
                content: xx_123456
    gateways: // 网关配置
        aliyun:
            access_key_id: appKey
            access_key_secret: appSecret
            sign_name: ThinkSNS+
        alidayu:
            app_key: alidayu_app_key
            app_secret: alidayu_app_secret
            sign_name: ThinkSNS+
        yunpian:
            api_key: yunpian_api_key
``````
### 钱包配置
``````
wallet:
    cash:
        status: true // 是否开启提现
    recharge:
        status: true // 是否开启充值
    transform:
        status: true // 是否支持余额购买积分
``````
### app版本控制
暂时只对android有效
``````
plus-appversion:
    open: false // [true, false]
``````
### 附近的人设置
基于高德地图
``````
around-amap:
    amap-sig: gao_app_secret // app_secret
    amap-tableid: map_table_id // 高德自定义地图id 申请地址: http://yuntu.amap.com/datamanager
    amap-key: gaode_app_key // app_key
    amap-jssdk: http://webapi.amap.com/maps?v=1.4.4&key=您申请的key值 // jssdk地址, 用于H5
``````
### 圈子设置
``````
plus-group:
    group_reward:
        status: true // 是否开启圈内资源打赏
    group_create:
        need_verified: true // 是否开启认证用户创建圈子
    report_handle: founder // 圈内举报处理人 ['admin' => '网站管理员', 'founder'=> '圈主']
``````
### 问答设置
``````
question:
    app:
        switch: true // 是否开启问答
    apply_amount: 200 // 申请精选所需金额「单位: 分」
    onlookers_amount: 100 // 围观所需金额「单位: 分」
    anonymity_rule: '' // 废弃配置
``````
