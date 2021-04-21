var Mock = require('mockjs')

// 购物车推荐商品
Mock.mock(/\/localhost\/api\/productList/,'post',()=>{
  const productList = Mock.mock({
    'data': [
          {
            id: "005",
            small_image: "https://img.ddimg.mobi/product/c7cfa4f41f6e31545281584531.jpg!maicai.product.list",
            name: "香菜 约50g",
            spec: "半生爱 小时不爱长大好喜欢",
            price: "1.20",
            origin_price: "1.20"
          },
          {
            id: "006",
            small_image: "https://ddimg.ddxq.mobi/562d52ead80ee1532573147955.jpg!maicai.product.list",
            name: "维达超韧系列纸面巾家庭装 130抽*6/袋",
            spec: "人气小S码 3层 130抽 湿水不易破",
            price: "19.90",
            origin_price: "20.90"
          },
          {
            id: "007",
            small_image: "https://img.ddimg.mobi/product/8fb970045ec721548094494171.jpg!deliver.product.list",
            name: "鼎丰料酒王 500ml/瓶",
            spec: "去除腥腻 还提香",
            price: "5.50",
            origin_price: "5.50"
          },
          {
            id: "008",
            name: "来伊份小米锅巴 78g/袋",
            origin_price: "4.90",
            price: "4.90",
            small_image: "https://ddimg.ddxq.mobi/0f5f617f1514884411854.jpg!maicai.product.list",
            spec: "小米含量高达90% 米香浓郁片片香脆"
          },
          {
            id: "009",
            name: "安井黄金蛋饺 165g/包",
            origin_price: "7.90",
            price: "7.90",
            small_image: "https://ddimg.ddxq.mobi/202c7fbf0402281539172014931.jpg!maicai.product.list",
            spec: "清脆可口的马蹄入馅 甘甜入味"
          },
          {
            id: "010",
            name: "大昌美国粟米粒 200g/袋",
            origin_price: "7.80",
            price: "7.80",
            small_image: "https://ddimg.ddxq.mobi/5cc519fb57d171504748643856.jpg!maicai.product.list",
            spec: "无需解冻 无需清洗 可直接烹调食用"
          },
          {
            id: "011",
            name: "鲜活味美花蛤 500g",
            origin_price: "7.80",
            price: "7.80",
            small_image: "https://img.ddimg.mobi/product/bec8e1249b6c1557746153709.jpg!deliver.product.list",
            spec: "鲜嫩可口 味道鲜美"
          },
          {
            id: "012",
            name: "艺杏鸭血（银荣） 435g/盒",
            origin_price: "3.90",
            price: "3.90",
            small_image: "https://img.ddimg.mobi/product/bf8c64fb956441543472667365.jpg!maicai.product.list",
            spec: "火锅里怎么能少了我"
          },
          {
            id: "013",
            name: "生鲜宽面（大） 300g/盒",
            origin_price: "3.50",
            price: "3.50",
            small_image: "https://ddimg.ddxq.mobi/dec914e66fe9d1539676748492.JPG!maicai.product.list",
            spec: "手工宽面 嚼在嘴里更有劲"
          },
          {
            id: "014",
            name: "蒙牛真巴氏鲜牛奶 180ml/包",
            origin_price: "2.80",
            price: "2.80",
            small_image: "https://ddimg.ddxq.mobi/d74f9ec75725e1541953105704.png!maicai.product.list",
            spec: "巴氏杀菌 袋装鲜乳"
          },
          {
            id: "015",
            name: "洋鸡蛋10枚",
            origin_price: "7.90",
            price: "7.90",
            small_image: "https://img.ddimg.mobi/product/dfc6e1ba03bc21544171340138.jpg!maicai.product.list",
            spec: "胆固醇和脂肪更低 适合爷爷奶奶"
          },
          {
            id: "001",
            small_image: "https://ddimg.ddxq.mobi/4cf7212172fb81494837237226.jpg!maicai.product.list",
            name: "顶味龙须面 200g/袋",
            spec: "不粘更爽口 丝丝缕缕龙须面",
            price: "2.70",
            origin_price: "2.70"
          },
          {
            id: "002",
            small_image: "https://img.ddimg.mobi/product/179c2d79f590a1563869550466.png!deliver.product.list",
            name: "光明莫斯利安酸牛奶 200g*12盒/箱",
            spec: "经过巴氏杀菌热处理的酸奶（新老包装交替发货）",
            price: "49.90",
            origin_price: "59.80"
          },
          {
            id: "003",
            small_image: "https://ddimg.ddxq.mobi/c4c87775684a31533809117568.jpg!maicai.product.list",
            name: "楚留鲜鲜鹌鹑蛋24枚 200g",
            spec: "营养丰富 味道鲜美",
            price: "9.90",
            origin_price: "9.90"
          },
          {
            id: "004",
            small_image: "https://img.ddimg.mobi/product/7d93c76f308261558670893918.jpg!deliver.product.list",
            name: "汉康卤水老豆腐 380g/盒",
            spec: "盒装干净 本味豆香 久违的淳朴美味",
            price: "4.20",
            origin_price: "4.20"
          },
          {
            id: "016",
            name: "汉康苏北老豆腐 400g/袋",
            origin_price: "4.90",
            price: "4.90",
            small_image: "https://img.ddimg.mobi/product/2fcc2d6e7b50e1558670127199.jpg!deliver.product.list",
            spec: "色泽洁白 口感嫩滑而紧实"
          },
          {
            id: "017",
            name: "金针菇 150g",
            origin_price: "0.99",
            price: "0.99",
            small_image: "https://img.ddimg.mobi/product/e8d50834520071544616778931.jpg!maicai.product.list",
            spec: "凉拌炖汤 家常小菜怎能少了它"
          },
          {
            id: "018",
            name: "维达超韧系列纸面巾 130抽/包",
            origin_price: "4.90",
            price: "4.90",
            small_image: "https://ddimg.ddxq.mobi/e66496081691c1492420154145.jpg!maicai.product.list",
            spec: "人气小S码 超韧细密 湿水不易破"
          },
          {
            id: "019",
            name: "百事可乐 600ml/瓶",
            origin_price: "3.00",
            price: "3.00",
            small_image: "https://img.ddimg.mobi/product/693c4947ce4381543154544133.jpg!maicai.product.list",
            spec: "兹兹气泡声是我独特的标志"
          },
          {
            id: "020",
            name: "卫龙香辣味大面筋 65g/袋",
            origin_price: "3.50",
            price: "3.50",
            small_image: "https://ddimg.ddxq.mobi/e6a8197d785ac1541952317876.jpg!maicai.product.list",
            spec: "一口一根 原汁原味"
          }   
    ],
  })
  return{
    status: 200,
    message: '成功',
    list:productList.data,
  }
})

// 分类
Mock.mock(/\/localhost\/api\/categoriesList/,'get',()=>{
    const categoriesList = Mock.mock({
      'data': [
        {
            id: "recommend",
            name: "推荐",
            params: "lk001"
        },
        {
            id: "58fd69dc936edf42508b48de",
            name: "安心蔬菜",
            params: "lk002",
        },
        {
            id: "590c1928936edf767a8daa6f",
            name: "豆制品",
            params: "lk003"
        },
        {
            id: "595edd01916edf5011ca395d",
            name: "新鲜水果",
            params: "lk004"
        },
        {
            id: "58fefa38916edf9b128b45fc",
            name: "肉禽蛋",
            params: "lk005"
        },
        {
            id: "58fefb94936edf5f5d8b4767",
            name: "海鲜水产",
            params: "lk006"
        },
        {
            id: "58ff04e6936edfc57a8b464f",
            name: "乳品烘焙",
            params: "lk007"
        },
        {
            id: "5ab06a0845cd42b3598bfa55",
            name: "营养早餐",
            params: "lk008"
        },
        {
            id: "5cd53472b0055a0b517a9d97",
            name: "生鲜精选",
            params: "lk009"
        },
        {
            id: "58ff04c5936edf777a8b46af",
            name: "米面粮油",
            params: "lk010"
        },
        {
            id: "58ff0496936edf747a8b4612",
            name: "调味品",
            params: "lk011"
        },
        {
            id: "5a27abc0936edf39418c236c",
            name: "方便速食",
            params: "lk012"
        },
        {
            id: "58ff04d2936edf747a8b461b",
            name: "酒水饮料",
            params: "lk013"
        },
        {
            id: "5a279d78916edf1544959b5a",
            name: "休闲零食",
            params: "lk014"
        },
        {
            id: "58ff0481936edfc57a8b463d",
            name: "南北干货",
            params: "lk015"
        },
      ],
    })
    return{
      status: 200,
      message: '成功',
      list:categoriesList.data,
    }
  })

// 分类商品
Mock.mock(/\/localhost\/api\/detailsList/,'post',()=>{
const detailsList = Mock.mock({
    'data': [
        {
            id: "assume_you_like",
            link: "ddxq://product/userLike/list?title=猜你喜欢",
            name: "猜你喜欢",
            products:[
              {
                id:"001",
                name: "土鸡蛋8枚",
                origin_price: "9.90",
                price: "6.90",
                small_image: "https://img.ddimg.mobi/product/2d489406e91691544062166784.jpg!maicai.product.list",
                spec: "民生鸡蛋 物美价廉"
              },
              {
                id:"002",
                name: "沪尚鸭血 360g/盒",
                origin_price: "3.90",
                price: "3.90",
                small_image: "https://img.ddimg.mobi/product/0756d9b94e1fd1548236284999.jpg!deliver.product.list",
                spec: "盒装鸭血 Q弹有韧性 人体清道夫"
              },
              {
                id:"003",
                name: "鲜手擀面 300g/盒",
                origin_price: "3.00",
                price: "3.00",
                small_image: "https://ddimg.ddxq.mobi/5e805bc3e9ebf1537628787739.jpg!maicai.product.list",
                spec: "够劲道的好面~"
              },
              {
                id:"004",
                name: "大昌美国杂菜 200g/袋",
                origin_price: "6.90",
                price: "6.90",
                small_image: "https://ddimg.ddxq.mobi/ed848ca670a6f1504064745559.png!maicai.product.list",
                spec: "无添加 开袋即烹超便捷"
              },
              {
                id:"005",
                name: "龙凤黑芝麻汤圆 200g/袋",
                origin_price: "8.80",
                price: "8.80",
                small_image: "https://ddimg.ddxq.mobi/eac4f136a54cc1538990793402.jpg!maicai.product.list",
                spec: "口感细腻 香糯不粘牙"
              },
              {
                id:"006",
                name: "乡吧佬卤蛋 25g/只",
                origin_price: "1.00",
                price: "1.00",
                small_image: "https://ddimg.ddxq.mobi/e13725751514881445681.jpg!maicai.product.list",
                spec: "新老包装更新中 文火慢卤 充分入味"
              },
              {
                id:"007",
                name: "怡宝纯净水 4.5L/瓶",
                origin_price: "9.80",
                price: "9.80",
                small_image: "https://ddimg.ddxq.mobi/61e716cea52621523612653053.jpg!maicai.product.list",
                spec: "滴滴纯净 喝出生活的质量"
              },
              {
                id:"008",
                name: "白猫柠檬红茶洗洁精 500g/瓶",
                origin_price: "4.80",
                price: "4.80",
                small_image: "https://ddimg.ddxq.mobi/1c589590ed8271492400622407.jpg!maicai.product.list",
                spec: "双手和餐具 油腻去无踪"
              },
              {
                id:"009",
                name: "优质番茄 约350g",
                origin_price: "2.20",
                price: "2.20",
                small_image: "https://ddimg.ddxq.mobi/be51d2b7e7cfb1541779541044.jpg!maicai.product.list",
                spec: "西红柿炒鸡蛋 亦可直接吃~"
              },
              {
                id:"010",
                name: "泰国进口超甜龙眼 500g",
                origin_price: "10.90",
                price: "8.90",
                small_image: "https://img.ddimg.mobi/product/de02c34be37991544521921435.jpg!maicai.product.list",
                spec: "色泽晶莹 柔软细嫩"
              },
            ]
          },
          {
            id: "vip_special",
            link: "https://activity.m.ddxq.mobi/#/vip?go_product=1",
            name: "今日特卖",
            products:[
              {
                id: "001",
                name: "安井黄金蛋饺 165g/包",
                origin_price: "7.90",
                price: "7.90",
                small_image: "https://ddimg.ddxq.mobi/202c7fbf0402281539172014931.jpg!maicai.product.list",
                spec: "清脆可口的马蹄入馅 甘甜入味"
              },
              {
                id: "002",
                name: "大昌美国粟米粒 200g/袋",
                origin_price: "7.80",
                price: "7.80",
                small_image: "https://ddimg.ddxq.mobi/5cc519fb57d171504748643856.jpg!maicai.product.list",
                spec: "无需解冻 无需清洗 可直接烹调食用"
              },
              {
                id: "003",
                name: "鲜活味美花蛤 500g",
                origin_price: "7.80",
                price: "7.80",
                small_image: "https://img.ddimg.mobi/product/bec8e1249b6c1557746153709.jpg!deliver.product.list",
                spec: "鲜嫩可口 味道鲜美"
              },
              {
                id: "004",
                name: "艺杏鸭血（银荣） 435g/盒",
                origin_price: "3.90",
                price: "3.90",
                small_image: "https://img.ddimg.mobi/product/bf8c64fb956441543472667365.jpg!maicai.product.list",
                spec: "火锅里怎么能少了我"
              },
              {
                id: "005",
                name: "生鲜宽面（大） 300g/盒",
                origin_price: "3.50",
                price: "3.50",
                small_image: "https://ddimg.ddxq.mobi/dec914e66fe9d1539676748492.JPG!maicai.product.list",
                spec: "手工宽面 嚼在嘴里更有劲"
              },
              {
                id: "006",
                name: "蒙牛真巴氏鲜牛奶 180ml/包",
                origin_price: "2.80",
                price: "2.80",
                small_image: "https://ddimg.ddxq.mobi/d74f9ec75725e1541953105704.png!maicai.product.list",
                spec: "巴氏杀菌 袋装鲜乳"
              },
              {
                id: "007",
                name: "洋鸡蛋10枚",
                origin_price: "7.90",
                price: "7.90",
                small_image: "https://img.ddimg.mobi/product/dfc6e1ba03bc21544171340138.jpg!maicai.product.list",
                spec: "胆固醇和脂肪更低 适合爷爷奶奶"
              },
              {
                id: "008",
                name: "汉康苏北老豆腐 400g/袋",
                origin_price: "4.90",
                price: "4.90",
                small_image: "https://img.ddimg.mobi/product/2fcc2d6e7b50e1558670127199.jpg!deliver.product.list",
                spec: "色泽洁白 口感嫩滑而紧实"
              },
              {
                id: "009",
                name: "金针菇 150g",
                origin_price: "0.99",
                price: "0.99",
                small_image: "https://img.ddimg.mobi/product/e8d50834520071544616778931.jpg!maicai.product.list",
                spec: "凉拌炖汤 家常小菜怎能少了它"
              },
              {
                id: "010",
                name: "维达超韧系列纸面巾 130抽/包",
                origin_price: "4.90",
                price: "4.90",
                small_image: "https://ddimg.ddxq.mobi/e66496081691c1492420154145.jpg!maicai.product.list",
                spec: "人气小S码 超韧细密 湿水不易破"
              },
              {
                id: "011",
                name: "百事可乐 600ml/瓶",
                origin_price: "3.00",
                price: "3.00",
                small_image: "https://img.ddimg.mobi/product/693c4947ce4381543154544133.jpg!maicai.product.list",
                spec: "兹兹气泡声是我独特的标志"
              },
            ]
          },
    ]
})
return{
    status: 200,
    message: '成功',
    list:detailsList.data,
}
})

// 首页轮播图
Mock.mock(/\/localhost\/api\/swiperList/,'get',()=>{
    const swiperList = Mock.mock({
        'data':[
            {icon_url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.ctoutiao.com%2Fuploads%2F2020%2F03%2F31%2F1585625414985544.png&refer=http%3A%2F%2Fimg2.ctoutiao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619947510&t=b0d1e2831b3fc79570d47389aaefb9be"},
            {icon_url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3510914355,2073934803&fm=26&gp=0.jpg"},
            {icon_url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814105614,3895167097&fm=26&gp=0.jpg"},
            {icon_url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b522558ce09400000098b5fccb9d.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619947346&t=f6d53fc975c4019072267c32b08391b0"},
        ]
    })
    return{
        status: 200,
        message: '成功',
        list:swiperList.data,
    }
    })

// 首页分类
Mock.mock(/\/localhost\/api\/categoryList/,'get',()=>{
    const categoryList = Mock.mock({
        'data':[
            {
                icon_url: "https://img.ddimg.mobi/faed0c89b1ac61561979943620.jpg",
                name: "安心蔬菜",
                query: "lk001"
              },
              {
                icon_url: "https://img.ddimg.mobi/a79822f496ec71561980537120.jpg",
                name: "豆制品",
                query: "lk002"
              },
              {
                icon_url: "https://img.ddimg.mobi/febc9219e5f061561980283162.jpg",
                name: "水果",
                query: "lk003"
              },
              {
                icon_url: "https://img.ddimg.mobi/57742da7f00ab1562725189267.jpg",
                name: "肉禽蛋",
                query: "lk004"
              },
              {
                icon_url: "https://img.ddimg.mobi/3f96191b097cd1562204510108.jpg",
                name: "海鲜水产",
                query: "lk005"
              },
              {
                icon_url: "https://img.ddimg.mobi/a19a8501bf4041561980956934.jpg",
                name: "乳品烘焙",
                query: "lk006"
              },
              {
                icon_url: "https://img.ddimg.mobi/baf53e7d1e9ce1561980371874.jpg",
                name: "营养早餐",
                query: "lk007"
              },
              {
                icon_url: "https://img.ddimg.mobi/cc39ecee3cee51564386403745.jpg",
                name: "生鲜精选",
                query: "lk008"
              },
              {
                icon_url: "https://img.ddimg.mobi/67260446df1451561980456552.jpg",
                name: "米面粮油",
                query: "lk009"
              },
              {
                icon_url: "https://img.ddimg.mobi/17964fae5012d1561980650167.jpg",
                name: "调味品",
                query: "lk010"
              },
        ]
    })
    return{
        status: 200,
        message: '成功',
        list:categoryList.data,
    }
})
// 首页导航
Mock.mock(/\/localhost\/api\/tabs/,'get',()=>{
    const tabs = Mock.mock({
        'data':[
            {
                id: 0,
                name: "all",
                title: "全部"
              },
              {
                id: 1,
                name: "dinner",
                title: "晚餐"
              },
              {
                id: 2,
                name: "popular",
                title: "热卖"
              },
              {
                id: 3,
                name: "heart",
                title: "精选"
              }
        ]
    })
    return{
        status: 200,
        message: '成功',
        list:tabs.data,
    }
})
// 首页商品
Mock.mock(/\/localhost\/api\/productList/,'get',()=>{
    const productList = Mock.mock({
        'data':[
            {
                id: "001",
                small_image: "https://ddimg.ddxq.mobi/4cf7212172fb81494837237226.jpg!maicai.product.list",
                name: "顶味龙须面 200g/袋",
                spec: "不粘更爽口 丝丝缕缕龙须面",
                price: "2.70",
                origin_price: "2.70"
              },
              {
                id: "002",
                small_image: "https://img.ddimg.mobi/product/179c2d79f590a1563869550466.png!deliver.product.list",
                name: "光明莫斯利安酸牛奶 200g*12盒/箱",
                spec: "经过巴氏杀菌热处理的酸奶（新老包装交替发货）",
                price: "49.90",
                origin_price: "59.80"
              },
              {
                id: "003",
                small_image: "https://ddimg.ddxq.mobi/c4c87775684a31533809117568.jpg!maicai.product.list",
                name: "楚留鲜鲜鹌鹑蛋24枚 200g",
                spec: "营养丰富 味道鲜美",
                price: "9.90",
                origin_price: "9.90"
              },
              {
                id: "004",
                small_image: "https://img.ddimg.mobi/product/7d93c76f308261558670893918.jpg!deliver.product.list",
                name: "汉康卤水老豆腐 380g/盒",
                spec: "盒装干净 本味豆香 久违的淳朴美味",
                price: "4.20",
                origin_price: "4.20"
              },
              {
                id: "005",
                small_image: "https://img.ddimg.mobi/product/c7cfa4f41f6e31545281584531.jpg!maicai.product.list",
                name: "香菜 约50g",
                spec: "半生爱 小时不爱长大好喜欢",
                price: "1.20",
                origin_price: "1.20"
              },
              {
                id: "006",
                small_image: "https://ddimg.ddxq.mobi/562d52ead80ee1532573147955.jpg!maicai.product.list",
                name: "维达超韧系列纸面巾家庭装 130抽*6/袋",
                spec: "人气小S码 3层 130抽 湿水不易破",
                price: "19.90",
                origin_price: "20.90"
              },
              {
                id: "007",
                small_image: "https://img.ddimg.mobi/product/8fb970045ec721548094494171.jpg!deliver.product.list",
                name: "鼎丰料酒王 500ml/瓶",
                spec: "去除腥腻 还提香",
                price: "5.50",
                origin_price: "5.50"
              },
              {
                id: "008",
                name: "来伊份小米锅巴 78g/袋",
                origin_price: "4.90",
                price: "4.90",
                small_image: "https://ddimg.ddxq.mobi/0f5f617f1514884411854.jpg!maicai.product.list",
                spec: "小米含量高达90% 米香浓郁片片香脆"
              },
              {
                id: "009",
                name: "安井黄金蛋饺 165g/包",
                origin_price: "7.90",
                price: "7.90",
                small_image: "https://ddimg.ddxq.mobi/202c7fbf0402281539172014931.jpg!maicai.product.list",
                spec: "清脆可口的马蹄入馅 甘甜入味"
              },
              {
                id: "010",
                name: "大昌美国粟米粒 200g/袋",
                origin_price: "7.80",
                price: "7.80",
                small_image: "https://ddimg.ddxq.mobi/5cc519fb57d171504748643856.jpg!maicai.product.list",
                spec: "无需解冻 无需清洗 可直接烹调食用"
              },
              {
                id: "011",
                name: "鲜活味美花蛤 500g",
                origin_price: "7.80",
                price: "7.80",
                small_image: "https://img.ddimg.mobi/product/bec8e1249b6c1557746153709.jpg!deliver.product.list",
                spec: "鲜嫩可口 味道鲜美"
              },
              {
                id: "012",
                name: "艺杏鸭血（银荣） 435g/盒",
                origin_price: "3.90",
                price: "3.90",
                small_image: "https://img.ddimg.mobi/product/bf8c64fb956441543472667365.jpg!maicai.product.list",
                spec: "火锅里怎么能少了我"
              },
              {
                id: "013",
                name: "生鲜宽面（大） 300g/盒",
                origin_price: "3.50",
                price: "3.50",
                small_image: "https://ddimg.ddxq.mobi/dec914e66fe9d1539676748492.JPG!maicai.product.list",
                spec: "手工宽面 嚼在嘴里更有劲"
              },
              {
                id: "014",
                name: "蒙牛真巴氏鲜牛奶 180ml/包",
                origin_price: "2.80",
                price: "2.80",
                small_image: "https://ddimg.ddxq.mobi/d74f9ec75725e1541953105704.png!maicai.product.list",
                spec: "巴氏杀菌 袋装鲜乳"
              },
              {
                id: "015",
                name: "洋鸡蛋10枚",
                origin_price: "7.90",
                price: "7.90",
                small_image: "https://img.ddimg.mobi/product/dfc6e1ba03bc21544171340138.jpg!maicai.product.list",
                spec: "胆固醇和脂肪更低 适合爷爷奶奶"
              },
              {
                id: "016",
                name: "汉康苏北老豆腐 400g/袋",
                origin_price: "4.90",
                price: "4.90",
                small_image: "https://img.ddimg.mobi/product/2fcc2d6e7b50e1558670127199.jpg!deliver.product.list",
                spec: "色泽洁白 口感嫩滑而紧实"
              },
              {
                id: "017",
                name: "金针菇 150g",
                origin_price: "0.99",
                price: "0.99",
                small_image: "https://img.ddimg.mobi/product/e8d50834520071544616778931.jpg!maicai.product.list",
                spec: "凉拌炖汤 家常小菜怎能少了它"
              },
              {
                id: "018",
                name: "维达超韧系列纸面巾 130抽/包",
                origin_price: "4.90",
                price: "4.90",
                small_image: "https://ddimg.ddxq.mobi/e66496081691c1492420154145.jpg!maicai.product.list",
                spec: "人气小S码 超韧细密 湿水不易破"
              },
              {
                id: "019",
                name: "百事可乐 600ml/瓶",
                origin_price: "3.00",
                price: "3.00",
                small_image: "https://img.ddimg.mobi/product/693c4947ce4381543154544133.jpg!maicai.product.list",
                spec: "兹兹气泡声是我独特的标志"
              },
              {
                id: "020",
                name: "卫龙香辣味大面筋 65g/袋",
                origin_price: "3.50",
                price: "3.50",
                small_image: "https://ddimg.ddxq.mobi/e6a8197d785ac1541952317876.jpg!maicai.product.list",
                spec: "一口一根 原汁原味"
              }   
        ]
    })
    return{
        status: 200,
        message: '成功',
        list:productList.data,
    }
})
  