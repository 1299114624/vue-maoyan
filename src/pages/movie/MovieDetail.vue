<template>
    <div class="page subpage" id="movieDetail" ref="movieDetail">

        <!-- 头部 -->
        <app-header :title="detailMsg.nm">
            <span slot="left" @click="backAction">&lt;</span>
        </app-header>


        <!-- 内容 -->
        <div class="page_content" :style="{top:'44px'}">

          <!-- 电影详情 -->
          <div class="movie_detail">
              <div class="movie_filter"></div>
              <div class="poster_bg"
                  :style="{'background':`url(${detailMsg.albumImg}) no-repeat`}">
              </div>
              <div class="detail">
                  <div class="poster">
                      <img :src="detailMsg.img" alt="">
                      <!-- <img :src="detailMsg.img | replaceWH(148,219)" alt=""> -->
                  </div>
                  <div class="detailContent">
                      <div class="title oneLine">
                          {{detailMsg.nm}}
                      </div>
                      <div class="title_en_name oneLine">
                          {{detailMsg.enm}}
                      </div>
                      <div class="score">
                          {{detailMsg.sc}}
                          <span class="snum">
                              3.8万人评
                          </span>
                      </div>
                      <div class="type oneLine">
                          <span>
                              {{detailMsg.cat}}
                          </span>
                      </div>
                      <div class="src oneLine">
                          {{detailMsg.src}}
                      </div>
                      <div class="pubDesc oneLine">
                          {{detailMsg.pubDesc}}
                      </div>
                  </div>
              </div>
          </div>

          <!-- timeLine -->
          <time-line ref="timeLine"/>

          <!-- nav导航栏 -->
          <nav-bar ref="navBar"/>

          <!-- 影院列表 -->
          <cinema-list api='movie' :movieId='id'/>
        </div>
    </div>
</template>

<script>
import CinemaName from "../../components/cinema/CinemaName";
import { getDetailMovie } from "../../services/movieService";
import "../../utils/filter";
export default {
  props: ["id"],
  data() {
    return {
      detailMsg: {},
      dates:[],
      height:''
    }
  },
  components: {
    'cinema-list': CinemaName
  },
  methods: {
    initData() {
      getDetailMovie(this.id).then(result => {
        this.detailMsg = result;
      });
    },
    backAction() {
      this.$router.back();
    },
    handleHeight() {
      this.height = this.$refs.movieDetail.scrollTop;
      this.$nextTick(()=>{
        if(this.height>=188){
          // console.log(this.$refs.timeLine)
          this.$refs.timeLine.$el.style ='position:fixed;top:0' ;
          this.$refs.navBar.$el.style ='position:fixed;top:40px' ;
        }else{
          this.$refs.timeLine.$el.style ='' ;
          this.$refs.navBar.$el.style ='' ;
        }

      })
    }
  },
  created() {
    this.initData();
    
  },
  mounted(){
    // console.log(this.$refs.movieDetail);
   this.$refs.movieDetail.addEventListener('scroll',this.handleHeight)
  }
};
</script>

<style lang="scss" scoped>
#movieDetail {
  background-color: #fff;
  overflow-y: scroll;
  .oneLine {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .movie_detail {
    height: 188px;
    position: relative;
    .movie_filter {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #333;
      z-index: -1;
    }
    .poster_bg {
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      position: absolute;
      filter: blur(1.2rem);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.55;
    }
    .detail {
      height: 150px;
      padding: 19px 30px 19px 15px;
      display: flex;
      img {
        width: 110px;
        height: 150px;
      }
      .detailContent {
        overflow-x: hidden;
        margin-left: 12.5px;
        flex: 1;
        color: #fff;
        .title {
          font-size: 20px;
          margin-top: 2px;
          font-weight: 700;
          overflow: hidden;
        }
        .title_en_name,
        .snum,
        .src,
        .pubDesc {
          margin-top: 5px;
          font-size: 12px;
          color: #fff;
          opacity: 0.8;
        }
        .score {
          font-size: 18px;
          font-weight: 700;
          color: #fc0;
          margin-top: 11px;
          opacity: 0.8;
        }
        .type {
          opacity: 0.8;
          .type_group {
            display: inline-block;
            width: 42px;
            opacity: 0.85;
            img {
              width: 42px;
            }
          }
        }
      }
    }
  }
}
</style>

