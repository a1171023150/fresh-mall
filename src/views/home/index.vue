<template>
  <div class="home">
    <template>
      <Header
        :swiperList="swiperList"
        v-if="flag"
      />
      <div class="category">
        <template v-for="(item,index) in categoryList">
          <div class="category-item" :key="item.name" @click="onItemClick(item.query,index)">
            <img :src="item.icon_url" class="item-icon" alt />
            <span class="item-text">{{item.name}}</span>
          </div>
        </template>
      </div>

      <van-tabs
        v-model="activeName"
        color="#de1c31"
        title-active-color="#de1c31"
        title-inactive-color="#7d7e80"
        @click="onClick"
        @change="onChange"
        swipeable
        animated
        sticky
        :offset-top="50">
        <van-tab v-for="tab in tabs" :key="tab.title" :title="tab.title" :name="tab.name">
          <div class="product-list">
            <div v-for="item in productList" :key="item.id" class="product-item">
              <img :src="item.small_image" v-lazy="item.small_image" alt />
              <p class="title text-overflow">{{item.name}}</p>
              <p class="spec text-overflow">{{item.spec}}</p>
              <div class="price">
                <div>
                  <span class="now-price">￥{{item.price}}</span>
                  <span class="origin-price">￥{{item.origin_price}}</span>
                </div>
                <div class="buy-cart" @click="addCart(item, $event)">
                  <svg t="1616999026604" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24575" width="23" height="23"><path d="M512 0c282.752 0 512 229.248 512 512s-229.248 512-512 512S0 794.752 0 512 229.248 0 512 0zM409.813333 660.778667a57.770667 57.770667 0 1 0 0 115.541333 57.770667 57.770667 0 0 0 0-115.541333z m265.728 0a57.770667 57.770667 0 1 0 0 115.541333 57.770667 57.770667 0 0 0 0-115.541333z m-265.728 23.125333a34.645333 34.645333 0 1 1 0 69.333333 34.645333 34.645333 0 0 1 0-69.333333z m265.728 0a34.645333 34.645333 0 1 1 0 69.333333 34.645333 34.645333 0 0 1 0-69.333333zM238.634667 267.776a11.52 11.52 0 0 0-6.4 22.101333l83.584 32.384 1.877333 0.938667a11.52 11.52 0 0 1 5.418667 8.448l12.586666 103.296 0.426667 2.048 0.256 0.768 19.712 166.613333 0.853333 4.522667c3.925333 16.213333 18.218667 28.757333 34.474667 28.757333h295.765333l4.394667-0.298666c15.829333-2.176 28.928-16.128 30.933333-32.981334l24.576-208 0.213334-4.522666c-0.298667-17.706667-14.933333-31.530667-33.834667-31.530667H365.184l-5.290667 0.426667a35.413333 35.413333 0 0 0-9.685333 2.730666l-4.181333-34.645333-0.554667-3.413333a34.688 34.688 0 0 0-21.333333-24.746667L240.64 268.373333z m474.837333 115.669333c6.997333 0 11.349333 4.522667 10.666667 10.24l-24.576 207.957334-0.64 2.986666c-1.877333 5.717333-6.954667 9.941333-11.733334 9.941334H391.424l-2.389333-0.341334a15.061333 15.061333 0 0 1-9.984-12.586666l-24.576-208v-2.346667c0.64-4.522667 4.693333-7.850667 10.666666-7.850667z" p-id="24576" fill="#d81e06"></path>
                    <defs data-v-da2028b6>
                      <radialGradient
                        data-v-da2028b6
                        cx="27.0288363%"
                        cy="10.3693483%"
                        fx="27.0288363%"
                        fy="10.3693483%"
                        r="93.8427229%"
                        id="radialGradient-1"
                      >
                        <stop data-v-da2028b6 stop-color="#4ECA75" offset="0%" />
                        <stop data-v-da2028b6 stop-color="#de1c31" offset="100%" />
                      </radialGradient>
                    </defs>
                    <g
                      data-v-da2028b6
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g data-v-da2028b6 transform="translate(-678.000000, -2742.000000)">
                        <g data-v-da2028b6 transform="translate(678.000000, 2742.000000)">
                          <rect
                            data-v-da2028b6
                            fill="url(#radialGradient-1)"
                            x="0"
                            y="0"
                            width="51.8699976"
                            height="51.8699976"
                            rx="25.9349988"
                          />
                          <path
                            data-v-da2028b6
                            fill="#FFFFFF"
                            d="M20.3666667,39 C19.1700497,39 18.2,38.0299503 18.2,36.8333333 C18.2,35.6367164 19.1700497,34.6666667 20.3666667,34.6666667 C21.5632836,34.6666667 22.5333333,35.6367164 22.5333333,36.8333333 C22.5333333,38.0299503 21.5632836,39 20.3666667,39 Z M33.3666667,38.1333333 C32.1700497,38.1333333 31.2,37.1632836 31.2,35.9666667 C31.2,34.7700497 32.1700497,33.8 33.3666667,33.8 C34.5632836,33.8 35.5333333,34.7700497 35.5333333,35.9666667 C35.5333333,37.1632836 34.5632836,38.1333333 33.3666667,38.1333333 Z"
                          />
                          <path
                            data-v-da2028b6
                            stroke="#FFFFFF"
                            stroke-width="2.6"
                            stroke-linecap="round"
                            d="M12.1333333,13.8666667 L13.6768756,13.8666667 C15.4621209,13.8666667 16.9554584,15.222463 17.1274221,16.9994069 L18.2224287,28.314386 C18.4068512,30.2200702 20.1012175,31.6154285 22.0069016,31.431006 C22.0111286,31.4305969 22.0153548,31.4301801 22.0195802,31.4297555 L33.2997819,30.296256 C34.7947282,30.1460352 36.0227397,29.0499108 36.3411182,27.581556 L37.8958814,20.4110205 C38.0987345,19.4754663 37.5047629,18.5526049 36.5692087,18.3497518 C36.3853963,18.3098964 36.1963225,18.3002236 36.0094025,18.3211126 L22.8968424,19.7864909"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <scroll-top />
      <van-divider>我也是有底线的~</van-divider>
      <drop-ball
        :dropImg="dropImg"
        :elLeft="elLeft"
        :elTop="elTop"
        :dots="dots"
        @change="onDotChange"
      />
    </template>
  </div>
</template>
<script>
import Header from "./header";
import { mapState, mapMutations } from "vuex";
import axios from 'axios'
import mock from '@/mock'

export default {
  name: "home",
  data() {
    return {
      // 轮播
      swiperList:[
      ],
      flag: false,
      // 类目
      categoryList: [
      ], 
      activeName: "all",
      tabs: [
      ],
      productList: [
      ],
      dropImg: "",
      elLeft: null,
      elTop: null,
      dots: [] // 小球集合
    };
  },
  created() {
    this.flag = true;
    // 请求首页数据
    axios.get('/localhost/api/swiperList',{}).then(res=>{
        this.swiperList = res.data.list
        console.log(res);
    })
    axios.get('/localhost/api/categoryList',{}).then(res=>{
        this.categoryList = res.data.list
        console.log(res);
    })
    axios.get('/localhost/api/tabs',{}).then(res=>{
        this.tabs = res.data.list
        console.log(res);
    })
    axios.get('/localhost/api/productList',{}).then(res=>{
        this.productList = res.data.list
        console.log(res);
    })
  
  },
  computed: {
    ...mapState(["userInfo", "addressInfo"])
  },
  methods: {
    ...mapMutations(["ADD_GOODS"]),
    onItemClick(query, index) {
      this.$router.push({ name: "Category", params: { query, index } });
    },
    onClick() {
      this.shuffle(this.productList);
    },
    onChange() {
      this.shuffle(this.productList);
    },
    // 数组洗牌
    shuffle(array) {
      let m = array.length,
        t,
        i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    },
    addCart({ id, name, small_image, price }, event) {
      if (!Object.keys(this.userInfo).length) {
        this.$router.push({ path: "/login" });
        return;
      }
      this.ADD_GOODS({ id, name, small_image, price });
      this.dropImg = small_image;
      this.elLeft = event.target.getBoundingClientRect().left;
      this.elTop = event.target.getBoundingClientRect().top;
      this.dots = [...this.dots, true];
    },
    onDotChange(data) {
      this.dots = [...this.dots, data];
    }
  },
  components: {
    Header,
  }
};
</script>
<style lang='scss' scoped>
.home {
  .category {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .category-item {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 8px;
      box-sizing: border-box;
      .item-icon {
        width: 28px;
        height: 28px;
      }
      .item-text {
        margin-top: 8px;
        font-size: 12px;
        color: #7d7e80;
      }
    }
  }
  .vip-panel {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 95%;
    margin: 0.5rem auto;
    border-radius: 0.2rem;
    font-size: 12px;
    color: #fff;
    background-color: #de1c31;
  }
  .product-list {
    width: 100%;
    overflow: hidden;
    .product-item {
      width: 48%;
      margin-right: 2%;
      margin-top: 1rem;
      display: inline-block;
      padding: 0 0.5rem;
      box-sizing: border-box;
      .title {
        font-size: 0.625rem;
        padding-left: 0.5rem;
      }
      .spec {
        font-size: 0.45rem;
        padding: 0.5rem 0 0.5rem 0.5rem;
        color: grey;
      }
      .text-overflow {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .now-price {
          font-size: 0.928rem;
          color: #f37078;
          margin-right: 0.5rem;
        }
        .origin-price {
          font-size: 0.6875rem;
          color: #999;
          text-decoration: line-through;
        }
        .buy-cart {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
}
</style>