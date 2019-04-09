import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiUrlService {

    static CEX_API = environment.config.apiUrl;
    // @ts-ignore
    /**
     * api里面定义所有的接口api
     *
     * api里面的url为接口url，params为接口需要的参数
     *
     * params没有实用性，就是明确的显示接口需要什么字段，从接口文档里面同步接口url的时候，同时也同步params，这样也是一个辅助性提示。
     */
    api = {
        main: {
            // 获取geetest初始化信息
            fetchGeetestInitData: {
                url: '/counter/public/initGeeTest',
                params: {}
            }
        },
        trading: {
            // bb交易订单
            tradingUserTransactionPlaceOrder: {
                url: '/spot/user/transaction/placeOrder',
                params: {
                    symbol: '币对的符号，格式是 token-base',
                    type: 'limit or market',
                    side: 'buy or sell',
                    price: '价格，市价的时候为-1',
                    quantity: '除了市价买都是填这个字段',
                }
            },
            // 撤单
            tradingUserCancelOrder: {
                url: '/spot/user/transaction/cancelOrder',
                params: {
                    orderId: 'orderId'
                }
            },
            // 收藏操作 添加或删除
            tradingCollectHandle: {
                url: '/spot/user/dictionary/collectHandle',
                params: {
                    type: 'add or del',
                    marketType: 'base',
                    coinType: 'token'
                }
            },
            // 获取币对相关信息
            tradingTranConfig: {
                url: '/spot/user/transactionShow/symbolConfig',
                params: {
                    marketType: 'base',
                    coinType: 'token'
                }
            },
            tradingOrderListByRedis: {
                url: '/spot/user/transactionShow/openOrders',
                params: {
                    coinType: '币种类型',
                    marketType: '市场',
                    status: '状态（traded=历史单据，trading=委托单据） ',
                }
            },
            // 委托订单 委托历史列表
            tradingOrderList: {
                url: '/spot/user/transactionShow/orderList',
                params: {
                    queryRange: '时间查询条件(thisweek=本周，thisweekago=本周以前)',
                    side: '方向(bug=买，sell=卖) ',
                    coinType: '币种类型',
                    marketType: '市场',
                    status: '状态（traded=历史单据，trading=委托单据） ',
                    page: '页数',
                    count: '条数'
                }
            },
            // 查询用户数据成交单剧
            tradingStrikeBbOrderList: {
                url: '/spot/user/transactionShow/spotTradedOrderList',
                params: {
                    orderId: 'orderId',
                    page: '',
                    count: ''
                }
            },
            // 币种列表 下拉框使用 暂时无用
            tradingCoinList: {
                url: '/user/dictionary/coinList',
                params: {
                    // 无参数
                }
            },
            // 市场列表
            tradingMarketList: {
                url: '/spot/user/dictionary/marketList',
                params: {
                    // 无参数
                }
            },
            // 查询币对列表（封装24小时成交数据）
            tradingTransactionPairList: {
                url: '/market/data/ticker',
                params: {
                    symbol: '这里的symbol是类型（ALL|市场区|币种符号）',
                }
            },
            // 获取收藏夹列表
            tradingGetCollect: {
                url: '/spot/user/dictionary/getCollect',
                params: {
                    coinType: 'token'
                }
            },

            // 获取币种相关配(精度，保留位数)
            tradingGetCoinConfig: {
                url: '/spot/user/transactionShow/coinConfig',
                params: {
                    // 无参数
                }
            },
            // 法币折合
            getFiatConfig: {
                url: '/counter/fiat/anon/counter/config',
                params: {
                    'fiatName': '',
                    'rateMap': {}
                }
            },
            fiatUploadAnnex: {
                url: '/counter/fiat/upload/annex',
                params: {},
            },
            getRateMap: {
                url: '/spot/user/anon/rateMap',
                params: {}
            },
            // 获取后台配置默认语言与法币
            getDefaultCurrency: {
                url: '/counter/user/anon/fiatCurrency',
                params: {
                    // 无参
                }
            },
            orderBook: {
                url: '/market/data/orderBook',
                params: {
                    symbol: '币对符号（格式是base-quote）'
                }
            },
            fullTrades: {
                url: '/market/data/trades',
                params: {
                    symbol: '币对符号（格式是base-quote）'
                }
            }
        },
        wallet: {
            // 获取划转下拉框
            walletTransferInfo: {
                url: '/counter/user/transferInfo',
                params: {
                    // 无参数
                }
            },
            // 划转币种列表
            transferCoinList: {
                url: '/spot/user/asset/transferCoinList',
                params: {
                    fromType: '',
                    toType: '',
                },
            },
            // 钱包划转BB
            walletTransferSure: {
                url: '/counter/user/transfer',
                params: {
                    'coinType': 'BTC',
                    'quantity': 'BTC',
                    'from': 'from',
                    'to': 'to'
                }
            },
            // 资产列表(币币与钱包)，查询单个资产
            walletOrSpotAssetList: {
                url: '/spot/user/asset/assetList',
                params: {
                    coinType: 'token',
                    assetType: 'spot=币币资产，wallet=钱包资产',
                    isFiatType: '1:虚拟币，2:法币',
                }
            },
            // 币币资产流水详情
            walletBbAssetDetail: {
                url: '/spot/user/asset/spotAssetDetail',
                params: {
                    type: 'deal_acquire deal_lose trlnfer_bb_center futures_trlnfer_bb trlnfer_bb_counter bb_trlnfer_futures',
                    queryRange: 'thisweekago or thisweek',
                    coinType: 'token',
                    page: '',
                    count: '',
                }
            },
            // 资产账户总量
            walletAssetAccount: {
                url: '/spot/user/asset/assetAccount',
                params: {
                    // 无参
                }
            },
            // 钱包资产流水详情
            walletAssetDetail: {
                url: '/spot/user/asset/walletAssetDetail',
                params: {
                    type: '类型(recharge=充值，withdraw=提币，transfer=划转)',
                    queryRange: '时间查询条件(thisweek=本周，thisweekago=本周以前)',
                    coinType: '',
                    page: '',
                    count: '',
                }
            },

            // 虚拟币提币记录
            walletWithdrawHistory: {
                url: '/spot/user/wallet/getWithdrawInfo',
                params: {
                    queryRange: '时间查询条件(thisweek=本周，thisweekago=本周以前)',
                    coinType: '',
                    page: '',
                    count: '',
                }
            },

            // 获取用户充币地址
            walletGetUserAddress: {
                url: '/spot/user/wallet/getUserAddress',
                params: {
                    coinType: 'token'
                }
            },
            // 获取充币记录
            walletGetRechargeInfo: {
                url: '/spot/user/wallet/getRechargeInfo',
                params: {
                    extendParam: 'tag',
                    coinType: 'token',
                    queryRange: '',
                    page: '',
                    count: '',
                }
            },
            // 查询用户提币地址
            walletQueryWithdrawAddress: {
                url: '/spot/user/wallet/queryWithdrawAddr',
                params: {
                    page: '',
                    count: '',
                    coinType: 'token'
                }
            },
            // 增加用户提币地址
            walletInsertWithdrawAddress: {
                url: '/spot/user/wallet/addWithdrawAddr',
                params: {
                    coinType: 'token',
                    address: 'address',
                    mark: 'remarks',
                    extendParam: 'tag'
                }
            },
            // 删除用户提币地址
            walletDeleteWithdrawAddress: {
                url: '/spot/user/wallet/delWithdrawAddr',
                params: {
                    fid: 'id'
                }
            },
            // 提币
            walletWithdrawMoney: {
                url: '/spot/user/wallet/withdraw',
                params: {
                    coinType: 'token',
                    address: 'address',
                    amount: 'amount',
                    vcode: 'emailCode',
                    googleCode: 'googleCode',
                    pinCode: 'pinCode',
                    memo: 'tag',
                }
            },
            // 新增提币地址验证是否有效
            getCheckWithdrawAddress: {
                url: '/spot/user/wallet/checkWithdrawAddr',
                params: {
                    coinType: 'token',
                    address: 'address',
                    memo: 'tag',
                }
            },
            // 合约资产页面 （注意url没有user）
            getFuturesAssetInfo: {
                url: '/contract/authc/user/assetInfo',
                params: {
                    page: '',
                    count: ''
                }
            },
            // 合约资产流水详情页面
            getFuturesAssetChangeDetail: {
                url: '/contract/authc/user/assetChangeDetail',
                params: {
                    coinId: '',
                    timeStart: '',
                    timeEnd: '',
                    type: '',
                    page: '',
                    count: ''
                }
            },
            getAssetTokenNameList: {
                url: '/spot/user/asset/assetCoinList',
                params: {
                    type: '', // 需要的资产类型（wallet=钱包，spot=币币，margin=合约）
                    isFiatType: '1:虚拟币，2:法币',
                }
            },
            // 获取提币额度
            getkycQuota: {
                url: '/spot/user/wallet/getkycQuota',
                params: {
                    // 无参数
                }
            },


            // 法币开始 获取法币币种下拉
            getFiatTokenList: {
                url: '/counter/fiat/charge/coinTypeList',
                params: {}
            },
            // 用户获取在当前柜台的所有充币记录
            getFiatChargeList: {
                url: '/counter/fiat/charge/list',
                params: {
                    coinType: '',
                    time: '',
                    count: '',
                    page: '',
                }
            },


            // 充法币第一步提交
            postChargeApply: {
                url: '/counter/fiat/charge/apply',
                params: {
                    // bankAccountId	是	string	银行ID
                    // coinType	是	string	法币
                    // quantity	是	string	数量
                    // response
                }
            },
            // 第二步确定按钮
            postConfirm: {
                url: '/counter/fiat/charge/apply/confirm'
            },

            // 第二步取消按钮
            cancelApply: {
                url: '/counter/fiat/charge/cancelApply',
                params: {
                    id: ''
                }
            },

            // 第三步确定按钮
            transferConfirm: {
                url: '/counter/fiat/charge/apply/transferConfirm',
                params: {
                    // chargeId	是	string	充值流水id
                    // remark	是	string	备注
                    // annex	是	string	附件key
                    // googleCode
                }
            },

            // 第三步取消
            cancelApplication: {
                url: '/counter/fiat/charge/cancelTransfer',
                params: {
                    googleCode: '',
                    id: ''
                }
            },

            // 用户查看该柜台当前未完成的充币详情
            getChargeDetail: {
                url: '/counter/fiat/charge/current',
                params: {}
            },

            // 查看详情
            getChargeInfo: {
                url: '/counter/fiat/charge/info/',
                params: {
                    id: ''
                }
            },

            // 修改金额
            modifiedAmount: {
                url: '/counter/fiat/charge/modify',
                params: {
                    chargeId: '充值流水id',
                    quantity: '数量',
                    remark: '备注',
                    annex: '附件AWS存储key',
                    googleCode: '谷歌随机字段'
                }
            },

            // 提法币
            // 查看提币进度
            checkoutWithdrawStep: {
                url: '/counter/fiat/checkoutfiatWithdrawOrder'
            },
            // 获取币种银行下拉
            withdrawCoinTypes: {
                url: '/counter/fiat/withdrawCoinTypes'
            },
            // 获取用户资产
            withdrawAssetInfoAmount: {
                url: '/counter/fiat/withdrawInfo',
                param: {
                    coinType: '币种'
                }
            },
            // 第一步提币申请
            withdrawSubmit: {
                url: '/counter/fiat/withdraw/apply',
                param: {
                    // "coinType":"CNY", ##币种  (必填)
                    // "bankId":"1",    ## 银行id (必填)
                    // "bankAccount":"12321312321", ## 银行账户 (必填)
                    // "bankAccountName":"lq",   ## 开户名称 (必填)
                    // "type":"A",               ## 类型 就传A  (必填)
                    // "bankName":"中国银行",      ## 银行名称 (必填)
                    // "bankFullName":"fbankFullName",## 银行全称 (必填)
                    // "swiftCode":"121212", ## swiftCode (必填)
                    // "quantity":"22.5",    ## 数量 (必填)
                    // "response":"12321312"
                }
            },
            // 撤销提币
            withdrawCancel: {
                url: '/counter/fiat/withdraw/cancel',
                param: {
                    id: ''
                }
            },
            // 发送邮件
            withdrawFiatSendMsg: {
                url: '/counter/user/sendMsg',
                param: {
                    id: '',
                    pingCode: '',
                    emailCode: '',
                    googleCode: '',
                }
            },
            // 确认提交
            withdrawAgreement: {
                url: '/counter/fiat/withdraw/agreement',
                param: {
                    'id': '30243665885351936',
                    'pingCode': '',
                    'emailCode': '',
                    'googleCode': ''
                }
            },
            fiatWithdrawOrdersList: {
                url: '/counter/fiat/fiatWithdrawOrders',
                param: {
                    range: '日期',
                    coinType: '日期',
                    page: '日期',
                    count: '日期',
                }
            },
            fiatWithdrawOrderDetail: {
                url: '/counter/fiat/fiatWithdrawOrder',
                param: {
                    id: 'id'
                }
            }
        },
        login: {
            // 用户登录第一步
            anonRecaptcha: {
                url: '/counter/user/anon/recaptcha',
                params: {
                    acc: '邮箱',
                    pwd: '密码',
                    response: '谷歌人机校验参数'
                }
            },
            // 用户登录第二步
            userLogin: {
                url: '/counter/user/login',
                params: {
                    ticket: '第一步校验凭证',
                    googleCode: '谷歌验证码'
                }
            },
            // 用户注册
            userRegister: {
                url: '/counter/user/register',
                params: {
                    email: '邮箱',
                    password: '密码',
                    vcode: '邮箱验证码',
                    response: '谷歌人机验证参数',
                    activationCode: '注册码',
                }
            },
            // 激活码 获取激活码开关
            GetActivationStatus: {
                url: '/counter/user/getActivationStatus',
            },
            // 激活码 校验激活码
            CheckoutActivationCode: {
                url: '/counter/user/checkoutActivationCode',
                params: {
                    activationCode: '16B6816H8N'
                }
            },
            // 发送共有验证码  未登录使用
            userSendMsg: {
                url: '/counter/user/anon/sendMsg',
                params: {
                    email: '邮箱账号',
                    wayType: '方式：PHONE/EMAIL',
                    type: '类型: REGIST、FORGETLOGINPWD',
                    areaCode: '国际区号，比如：0086（中国）、0082（韩国）[如果是操作手机，需要传。否则，可以不传]，目前这个参数还没有用到的地方。（可选）',
                }
            },

            /**
             *   发送私有验证码 登录使用
             *   wayType,"PHONE"、"EMAIL"
             *   type,"MODIFYPWD"、"BINDINGPHONE"、"UPDATEPHONE"、"BINDINGGG"、"PIN"、"PINOFF"、"UPDATEBINDGG"、"WITHDRAW"
             *   phone,（可选：'BINDINGPHONE','UPDATEPHONE'）只有在绑定(修改)手机的时候要传这个参数，别的ftype的时候不需要
             *   internationalCode,（可选：'BINDINGPHONE','UPDATEPHONE'）只有在绑定(修改)手机的时候要传这个参数，别的ftype的时候不需要
             ***/
            provideMsg: {
                url: '/counter/user/sendMsg',
                params: {
                    wayType: 'PHONE"、"EMAIL',
                    type: '"MODIFYPWD"、"BINDINGPHONE"、"UPDATEPHONE"、"BINDINGGG"、"PIN"、"PINOFF"、"UPDATEBINDGG"、"WITHDRAW"',
                    phone: '（可选："BINDINGPHONE", "UPDATEPHONE"）只有在绑定(修改)手机的时候要传这个参数，别的type的时候不需要',
                    areaCode: '（可选："BINDINGPHONE", "UPDATEPHONE"）只有在绑定(修改)手机的时候要传这个参数，别的type的时候不需要',
                }
            },
            // 登出
            userLogout: {
                url: '/counter/user/logout',
            },
            // 登录历史
            userGetLogHistory: {
                url: '/counter/user/show/loginHistory',
                params: {}
            },
            // 修改密码
            userModifyLoginPwd: {
                url: '/counter/user/userModify/modifyLoginPwd',
                params: {
                    oldPwd: '旧密码',
                    newPwd: '新密码',
                    vcode: '邮箱验证码',
                    googleCode: '谷歌验证码',
                    ticket: '第一步凭证',
                }
            },
            // google 绑定
            userBingGGCode: {
                url: '/counter/user/bingGoogle',
                params: {}
            },
            // 柜台用户主动关闭google验证
            userCloseGGCode: {
                url: '/counter/user/offGoogleCode',
                params: {}
            },
            // google 绑定MSG
            userGetGGCodeMsg: {
                url: '/counter/user/bindGoogleInfo',
                params: {}
            },
            // 修改PIN码
            userUpdatePIN: {
                url: '/counter/user/updatePIN',
                params: {}
            },
            // 设置PIN码
            userSetPIN: {
                url: '/counter/user/setPIN',
                params: {
                    'pinCode': 'xxx'
                }
            },
            // 关闭PIN码
            userOffPin: {
                url: '/counter/user/offPin',
                params: {
                    'pinCode': '1234',
                    'vcode': '544421',
                    'googleCode': '812396'
                }
            },
            // 设置防钓鱼码
            userAddAntiFish: {
                url: '/counter/user/addAntiFish',
                params: {
                    'antifishing': 'xxx'
                }
            },
            // 绑定手机
            userBindPhone: {
                url: '/counter/user/bindPhone',
                params: {}
            },
            // 修改手机
            userUpdatePhone: {
                url: '/counter/user/updatePhone',
                params: {}
            },
            // nologin switch
            userCheckSwitchPub: {
                url: '/counter/user/anon/checkSwitchPub',
                params: {
                    'femail': 'xxx'
                }
            },
            // login switch
            userCheckSwitchPri: {
                url: '/counter/user/checkSwitchPri'
            },
            // 安全信息设置
            userSecurity: {
                url: '/counter/user/getUserSecurity'
            },
            // 忘记密码第一步
            forgetLoginPwdFirst: {
                url: '/counter/user/anon/forgetLoginPwdFirst',
                params: {
                    'email': '账号（邮箱）',
                    'vcode': '邮箱验证码',
                    'response': '谷歌人机验证参数',
                }
            },
            // 忘记密码第二步
            forgetLoginPwdSecond: {
                url: '/counter/user/anon/forgetLoginPwdSecond',
                params: {
                    'ticket': '忘记密码第一步校验凭证',
                    'googleCode': '谷歌验证码',
                }
            },

            // 忘记密码第三步
            forgetLoginPwdThird: {
                url: '/counter/user/anon/forgetLoginPwdThird',
                params: {
                    'ticket': '忘记密码第二步操作凭证',
                    'newPwd': '新密码',
                }
            },
            // KYC 认证情况
            getKycMsg: {
                url: '/counter/user/kycInfo',
            },
            // kyc 2
            setKYC2: {
                url: '/counter/user/kyc2',
                params: {
                    'nationality': '中国',
                    'firstName': '包',
                    'lastName': 'xxx',
                    'papersType': '证件类型',
                    'papersId': '140909090909090909',
                    'gender': '男',
                    'birthday': '19990909',
                    'papersOne': 'KYC2/188205713753899008/front.jpg',
                    'papersTwo': 'KYC2/188205713753899008/back.jpeg',
                    'papersThird': 'KYC2/188205713753899008/handle.jpg'
                }
            },
            setKYC3: {
                url: '/counter/user/kyc3',
                params: {
                    'kyc3One': 'KYC3/208423949959168000/956032/video.mp4',
                    'kyc3Two': 'KYC3/208423949959168000/539040/kyc3.jpg',
                    'kyc3Third': '....'
                }
            },
            // 获取国家语言列表
            getCountry: {
                url: '/counter/user/anon/getCountryLanguage',
            },

            // 获取证件类型
            getCredentialsList: {
                url: '/counter/user/anon/papersType',
            }
        },
        contract: {
            // orderBook
            orderBook: {
                url: '/contract/anon/orderbook',
                params: {
                    symbol: 'TBTCUSD'
                }
            },

            /*-----------------------------------*/
            /**
             * 合约查询用户信息
             */
            account: {
                url: '/contract/authc/account/info',
                params: {
                    'coin': 'TBTC' // 币种类型
                }
            },
            /**
             * 用户合约信息查询
             */
            contractInfo: {
                url: '/contract/authc/info',
                params: {
                    'symbol': 'TBTCUSD' // 币种类型
                }
            },
            /**
             * 查询订单记录
             */
            order: {
                url: '/contract/authc/orders',
                params: {
                    symbol: 'BTCUSD',
                    page: 1,
                    count: 5,
                    type: 'open(活动委托), history(历史委托)'
                }
            },
            /**
             * 查询仓位
             */
            position: {
                url: '/contract/authc/position',
                params: {
                    symbol: 'TBTCUSD'
                }
            },
            /**
             * 交易记录
             */
            trades: {
                url: '/contract/authc/trades',
                params: {
                    symbol: 'BTCUSD',
                    page: 1,
                    count: 5,
                }
            },

            /**
             * 下单
             */
            creatOrder: {
                url: '/contract/authc/order/create',
                params: {
                    property: 'normal(普通单), trigger(触发单，暂不支持，将影响triggerPrice,benchmarkPrice,triggerPriceType 字段为必填)',
                    symbol: 'TBTCUSD',
                    type: 'limit(限价单，影响字段price为必填), market(市价单，影响字段price为非必填)',
                    amount: '10000',
                    amountDisplay: '下单显示数量(验证此字段数值不大于amout字段数值)',
                    price: '下单价格(验证此字段数值是否符合价格精度)',
                    side: 'buy(买), sell(卖)',
                    postOnly: false, // 是否只做post单(即只做maker)
                    reduceOnly: false, // 是否只做减仓单
                    timeInForce: '订单时效类型: GTC, FOK, IOC',
                    leverage: '下单杠杆值',
                    triggerPrice: '触发价格',
                    benchmarkPrice: '下触发单是的价格，用于判断价格是向上还是向下穿越触发',
                    triggerPriceType: '触发价格的类型: mark(默认),index,last'
                }
            },

            /**
             * 取消下单
             */
            removeOrder: {
                url: '/contract/authc/order/cancel',
                params: {
                    symbol: 'TBTCUSD',
                    orderId: 'TBTCUSD-123123321312'
                }
            },

            /**
             * 调整杠杆
             */
            leverage: {
                url: '/contract/authc/leverage/update',
                params: {
                    symbol: 'TBTCUSD', // 订单ID
                    leverage: 5.00 // '修改后的杠杆值'
                }
            },

            /**
             * 调整仓位保证金
             */
            margin: {
                url: '/contract/authc/position/margin/update',
                params: {
                    symbol: 'TBTCUSD', // 订单IDtradingview
                    amountChange: '5.00'  // 保证金变化金额，增量，带正负号
                }
            },

            /**
             * daysummary
             */
            daySummary: {
                url: '/contract/anon/summary/day',
                params: {
                    symbol: 'TBTCUSD'
                }
            },
            /**
             * 获取trade
             */
            trade: {
                url: '/contract/anon/trades',
                params: {
                    symbol: 'TBTCUSD'
                }
            }
        },
        account: {
            apiKeyList: {
                url: '/counter/user/keysforApi',
                params: {}
            },
            applyApiKey: {
                url: '/counter/user/applyforApi',
                params: {
                    fname: '',
                    fsafeIp: '',
                }
            },
            updateApiKey: {
                url: '/counter/user/updateApi',
                params: {
                    fid: '',
                    fsafeIp: '',
                    fname: '',
                }
            },
            deleteApiKey: {
                url: '/counter/user/deleteApi',
                params: {
                    fid: '',
                }
            },
            crossCounterAgreement: {
                url: '/counter/user/agreeById',
                params: {
                    counterId: '柜台id',
                }
            },
            getZendeskUrl: {
                url: '/counter/user/anon/help',
                params: {
                    url: '扩展用'
                }
            },
            checkLoginStatus: {
                url: '/counter/user/anon/isLogin',
                params: {
                    url: '扩展用'
                }
            }
        },
        guide: {
            // 公告列表
            getAnnouncementList: {
                url: '/counter/user/anon/noticeList',
                params: {
                    'type': 'number', // type,公告分类：1：运营公告、2：新币上线、3：活动公告  0:全部类型
                    'page': 'number',
                    'count': 'number',
                }
            },
            // 公告详情
            getAnnouncementMsg: {
                url: '/counter/user/anon/noticeMsg',
                params: {
                    'id': 'number',
                }
            },
            // 搜索公告
            searchAnn: {
                url: '/counter/user/anon/searchNotice',
                params: {
                    'title': 'string',
                    'page': 'number',
                    'count': 'number',
                }
            },
        },
        banner: {
            // 获取柜台的banner list
            getBannerList: {
                url: '/counter/user/anon/banners',
                params: {}
            },
            // 首页显示的最新的四条公告（不区分类型）
            getIndexNotice: {
                url: '/counter/user/anon/indexNotice',
                params: {}
            }
        },
        footer: {
            // 选择其他DCEX柜台
            getOtherCounterUrl: {
                url: '/counter/user/anon/counterUrl',
                params: {}
            }
        },
        fileUpload: {
            // 上传
            front: {
                url: '/counter/user/fileUpload/front',
                params: {}
            },
            back: {
                url: '/counter/user/fileUpload/back',
                params: {}
            },
            handle: {
                url: '/counter/user/fileUpload/handle',
                params: {}
            },
            three: {
                url: '/counter/user/fileUpload/kyc3',
                params: {}
            }
        }

    };

    constructor() {
        // 同步应用
        for (const i of Object.keys(this.api)) {
            for (const j of Object.keys(this.api[i])) {
                this.api[i][j].url = ApiUrlService.CEX_API + this.api[i][j].url;
            }
        }
    }

}
