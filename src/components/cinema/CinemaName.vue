<template>
    
        <ul id="wrapper" ref="wrapper">
            <li class="cinema_item" v-for="item in cinemaList" :key="item.id">
                <div class="item_title line_ellipsis">
                    <span>{{item.nm}}</span>
                    <span class="price_block">
                        <span class="price">{{item.sellPrice}}</span>
                        <span class="q">元起</span>
                    </span>
                </div>
                <div class="item_location box_flex">
                    <div class="line_ellipsis flex">{{item.addr}}</div>
                    <div class="distance">{{item.distance}}</div>
                </div>
                <div class="label_block line_ellipsis">
                    <div class="endorse" v-show="item.tag.endorse">改签</div>
                    <div class="snack" v-show="item.tag.snack">小吃</div>
                    <div class="vipTag" v-show="item.tag.vipTag">折扣卡</div>
                    <div class="hallType" v-show="item.tag.hallType"
                        v-for="i in item.tag.hallType" :key="i">{{i}}</div>
                </div>
                <div class="item_discount">{{item.promotion.cardPromotionTag}}</div>
            </li>
        </ul>
    
</template>

<script>
import {getCinemaNameList,getMovieCinemaList} from '../../services/movieService'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            cinemaList:[],
            date:''
        }
    },
    props: ['api','movieId'],
    computed:{
        ...mapState(['cityID'])
    },
    watch:{
        cityID(){
            this.initData();
        }
    },
    methods:{
        initData(){
            // console.log(this.api)
            if(this.api == 'cinemaList'){
                getCinemaNameList(this.cityID).then(result=>{
                    this.cinemaList = result;
                })
            }
            if(this.api == 'movie'){
                getMovieCinemaList(this.cityID,this.movieId,this.date).then(result=>{
                    this.cinemaList = result.cinemas;
                    this.$center.$emit('showDays',result.showDays)
                })
                // getCinemaNameList(this.cityID,this.movieId).then(result=>{
                //     this.cinemaList = result;
                // })
            }
        }
    },
    created(){
        this.initData();
        this.$center.$on('changeCinema',(date)=>{
            // console.log(date);
            this.date = date;
            this.initData()
        })
    }
}
</script>

<style lang="scss" scoped>
.waiting{
    display: none;
    position: absolute;
    top: 88px;
}
#wrapper{
    color: #666;
    .line_ellipsis{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .box_flex{
        display: flex;
    }
    .flex{
        flex: 1;
    }
    .distance{
        margin-left: 5px;
    }
    .cinema_item{
        padding: 13px 0;
        margin-right: 25px;
        margin-left: 15px;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        .item_title{
            height: 23px;
            line-height: 23px;
            font-size: 16px;
            color: #000;
            .price_block{
                padding-top: 9px;
                padding-left: 3px;
                .price{
                    font-size:18px;
                    color: #f03d37;
                }
                .q{
                    margin-left: 3px;
                    font-size: 12px;
                    color: #f03d37;
                }
            }
        }
        .label_block{
            height: 17px;
            line-height: 17px;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            font-size: 0;
            flex-shrink: 0;
            &>div{
                position: relative;
                display: inline-block;
                padding: 0 3px;
                height: 15px;
                line-height: 15px;
                border-radius: 2px;
                font-size: .6rem;
                &+div{
                    margin-left: 5px;
                }
                &.endorse{
                    color: #589daf;
                    border: 1px solid #589daf;
                }
                &.vipTag{
                    color: #f90;
                    border: 1px solid #f90;
                }
                &.hallType{
                    color: #589daf;
                    border: 1px solid #589daf;
                }
                &.snack{
                    color: #f90;
                    border: 1px solid #f90;
                }
            }
        } 
         .item_discount{
             color: #999;
         }
    }
}
</style>

