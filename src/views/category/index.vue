<template>
  <div class="category">
    <van-search placeholder="搜索一下" v-model="value" @search="onSearch" />
    <template>
      <b-scroll :data="categoriesList" :scrollY="true" ref="leftWrap" class="left-wrap">
        <div ref="leftContent">
          <div
            v-for="(item,index) in categoriesList"
            :key="item.id"
            class="item"
            :class="{'item-active':cateIndex === index}"
            @click="onCateClick(item.params,index)"
            ref="leftItem"
          >
            <span>{{item.name}}</span>
          </div>
        </div>
      </b-scroll>
      <div class="right-wrap">
        <b-scroll :data="detailsList" :scrollX="true" ref="navWrap" class="nav-wrap">
          <div ref="navContent">
            <div
              v-for="(item,index) in detailsList"
              :key="item.id"
              class="item"
              :class="{'item-active':navIndex === index}"
              @click="onNavClick(index)"
              ref="navItem"
            >
              <span>{{item.name}}</span>
            </div>
          </div>
        </b-scroll>
        <div class="nav-all" @click="onAllClick" v-show="cateIndex!==0">
          <van-icon :name="arrowName" />
        </div>
        <div class="nav-all-wrap" v-show="showAll" @click="showAll=false">
          <div class="nav-all-list">
            <div
              v-for="(item,index) in detailsList"
              :key="item.id"
              class="nav-item"
              :class="{'nav-item-active':navIndex===index}"
              @click="onNavClick(index, 'all')"
            >
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
        <b-scroll :data="productList" :scrollY="true" ref="listWrap" class="list-wrap">
          <div ref="listContent">
            <span class="nav-title">{{navTitle}}</span>
            <div v-for="item in productList" :key="item.id" class="list-item">
              <img :src="item.small_image" class="image" alt />
              <div class="content">
                <span class="name">{{item.name}}</span>
                <span class="spec">{{item.spec}}</span>
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
                          <stop data-v-da2028b6 stop-color="#39B460" offset="100%" />
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
            <span class="bottom-text">到底了，看看别的分类吧</span>
          </div>
        </b-scroll>
      </div>
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
import BScroll from "@/components/bscroll";
import { mapMutations, mapState } from "vuex";
import axios from 'axios'
import mock from '@/mock'

export default {
  name: "category",
  data() {
    return {
      value: "",
      categoriesList: [

      ],
      cateIndex: 0,
      // 猜你喜欢 会员特价
      detailsList: [
        
      ],
      navIndex: 0,
      showAll: false,
      dropImg: "",
      elLeft: null,
      elTop: null,
      dots: [] // 小球集合
    };
  },
created() {
    axios.get('/localhost/api/categoriesList',{}).then(res=>{
        this.categoriesList = res.data.list
        console.log(res);
    })
    axios.post('/localhost/api/detailsList',{}).then(res=>{
        this.detailsList = res.data.list
        console.log(res);
    })
  },
  computed: {
    ...mapState(['userInfo']),
    arrowName() {
      return this.showAll ? "arrow-up" : "arrow-down";
    },
    productList() {
      return this.detailsList.length
        ? this.detailsList[this.navIndex].products : [];
    },
    navTitle() {
      return this.detailsList.length
        ? this.detailsList[this.navIndex].name : "";
    }
  },
  methods: {
      ...mapMutations(["ADD_GOODS"]),
    // initData() {
    //   this.getCategories();
    //   this.getDetails();
    // },
    // async getCategories() {
    
    // })
    // let res = await axios.get('/localhost/api/categoriesList',{});
    // console.log(res);
    //   if (res.data.code === 0) {
    //     this.categoriesList = res.data.data.cate.map((cate, index) => {
    //       cate.params = index < 9 ? `lk00${index + 1}` : `lk0${index + 1}`;
    //       console.log(res);
    //       return cate;
    //     });
    // }
    //   let res = await this.$http("/api/homeApi/categories");
    //   if (res.data.code === 0) {
    //     this.categoriesList = res.data.data.cate.map((cate, index) => {
    //       cate.params = index < 9 ? `lk00${index + 1}` : `lk0${index + 1}`;
    //       console.log(res);
    //       return cate;
    //     });
    //   }
    // },
    // async getDetails(params = "lk001") {
    //   let res = await this.$http(`/api/homeApi/categoriesdetail/${params}`);
    //   if (res.data.code === 0) {
    //     this.detailsList = res.data.data.cate;
    //     this.showLoading = false;
    //     this.$nextTick(() => {
    //       this.getNavWidth();
    //     });
    //   }
    // },
    // getNavWidth() {
    //   let contentWidth = 0;
    //   let el = this.$refs.navItem;
    //   for (let i = 0; i < el.length; i++) {
    //     contentWidth += el[i].clientWidth * 1.2;
    //   }
    //   this.$refs.navContent.style.width = contentWidth + "px";
    // }
    onSearch() {
      this.$toast("搜索功能敬请期待");
      this.value = "";
    },
    onCateClick(params, index) {
      this.cateIndex = index;
      this.showAll = false;
    //   this.getDetails(params);
      setTimeout(() => {
        let leftItem = this.$refs.leftItem;
        let el = leftItem[index];
        this.$refs.leftWrap.scrollToElement(el, 300);
      }, 500);
      // this.$toast("分类功能敬请期待~");
    },
    onNavClick(index, type) {
      this.navIndex = index;
      let navItem = this.$refs.navItem;
      let el = navItem[index];
      this.$refs.navWrap.scrollToElement(el, 300);
      if (type === "all") {
        this.showAll = false;
      }
    },
    onAllClick() {
      this.showAll = !this.showAll;
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
    },
  },
  mounted() {
    const { query, index } = this.$route.params;
    if (index) {
      setTimeout(() => {
        this.onCateClick(query, index + 1);
      }, 50);
    }
  },
  components: {
    BScroll
  }
};
</script>
<style lang='scss' scoped>
.category {
  position: relative;
  .van-search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    .van-search__content {
      background-color: #f2f2f2;
    }
  }
  .left-wrap {
    position: absolute;
    top: 50px;
    left: 0;
    width: 25%;
    height: 85vh;
    overflow: hidden;
    background-color: #f2f2f2;
    .item {
      display: inline-block;
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      color: grey;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      position: relative;
    }
    .item-active {
      background-color: #fff;
      color: #000;
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0.5rem;
        left: 0;
        width: 0.2rem;
        height: 2rem;
        background-color: #de1c31;
      }
    }
  }
  .right-wrap {
    position: absolute;
    top: 50px;
    right: 0;
    width: 75%;
    height: 85vh;
    overflow: hidden;
    .nav-wrap {
      position: absolute;
      left: 0;
      right: 2rem;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      .item {
        display: inline-block;
        height: 3rem;
        line-height: 3rem;
        padding: 0 1rem;
        text-align: center;
      }
      .item-active {
        color: #de1c31;
      }
    }
    .nav-all {
      position: absolute;
      top: 1rem;
      right: 0;
      width: 2.5rem;
      text-align: center;
      background-color: #fff;
    }
    .nav-all-wrap {
      position: fixed;
      top: 6.5rem;
      bottom: 50px;
      background-color: hsla(0, 0%, 100%, 0.6);
      z-index: 20;
      .nav-all-list {
        padding: 1rem;
        background-color: #fff;
        .nav-item {
          display: inline-block;
          padding: 0.4rem 0.6rem;
          margin: 0 1rem 1rem 0;
          border: 1px solid #dedede;
          font-size: 0.9375rem;
          color: rgba(0, 0, 0, 0.7);
          border-radius: 1rem;
        }
        .nav-item-active {
          color: #de1c31;
        }
      }
    }
    .list-wrap {
      position: absolute;
      top: 3rem;
      left: 0;
      right: 0;
      height: 90%;
      overflow: hidden;
      .nav-title {
        display: inline-block;
        width: 100%;
        padding-left: 1rem;
        line-height: 3rem;
        font-size: 0.8rem;
        color: #93999f;
        background-color: #f3f5f7;
        position: relative;
        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          top: 0.5rem;
          left: 0;
          width: 0.2rem;
          height: 2rem;
          background-color: #d9dde1;
        }
      }
      .list-item {
        display: flex;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        padding: 1rem 0.5rem;
        .image {
          width: 4.2rem;
          height: 4.2rem;
          margin-right: 0.3rem;
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          .name {
            font-size: 1rem;
            color: #07111b;
          }
          .spec {
            margin: 0.5rem 0;
            font-size: 0.8rem;
            color: #93999f;
            line-height: 1.2;
          }
          .price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .now-price {
              color: red;
            }
            .origin-price {
              margin-left: 0.5rem;
              font-size: 0.8rem;
              color: #b2b2b2;
              text-decoration: line-through;
            }
            .buy-cart {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
      .bottom-text {
        display: inline-block;
        width: 100%;
        line-height: 3rem;
        text-align: center;
      }
    }
  }
}
</style>