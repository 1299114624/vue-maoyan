<template>
<app-content :style="{top:'88px'}" @loadmore="getMoreData" :canLoadMore="canLoadMore">
<div class="expected">
    <p>近期最受期待</p>
    <ul class="expected_list">
        <li class="expected_item" v-for="item in expectedList" :key="item.id">
            <img :src="item.img | replaceWH(170,230)">
            <h5>{{item.nm}}</h5>
            <p>{{item.comingTitle | replaceDate}}</p>
        </li>
    </ul>
</div>
<div class="Coming">
    <div v-for="(list,key) in comingMap" :key="key">
        <p style="padding:6px 18px;color:#333">{{key}}</p>
        <movieItem :movieList="list"/>
    </div>
</div> 
</app-content> 
</template>

<script>
import {getComingList,getMoreComingList,handleComingList,getMostExpectedData} from '../../services/movieService'
import MovieItem from '../../common/item/MovieItem'
import '../../utils/filter'
import {mapState} from 'vuex'

export default {
    data(){
        return {
            comingMap:{},
            comingIds:[],
            comingList:[],
            expectedList:[],
            canLoadMore:true
        }
    },
    computed:{
        ...mapState(['cityID'])
    },
    components:{
        'movieItem':MovieItem
    },
    watch:{
        cityID(){
            console.log('cityID变化了');
            this.initData()
        }
    },
    methods:{
        getMoreData(){
            //取得下一页数据
            //取得ids
            let ids = [...this.comingIds];
            ids = ids.splice(this.comingList.length,10);
            //组装请求参数
            let movieIds = ids.join(',');
            //发送请求
            this.canLoadMore = false;
            getMoreComingList(movieIds,this.cityID).then(result=>{
                this.comingList = [...this.comingList,...result];
                //判断是否加载完了所有的数据
                if(this.comingList.length >= this.comingIds.length){
                    this.canLoadMore = false; //加载完毕
                    console.log('加载完毕');
                }else{
                    this.canLoadMore = true;
                }
                this.comingMap = handleComingList(this.comingList)
            })
        },
        initData(){
            //请求即将上映的电影数据
            getComingList(this.cityID).then(({data,ids})=>{
                this.comingIds = ids;
                this.comingList = data;
                this.comingMap = handleComingList(data)
            });
            //请求最受期待的电影数据
            getMostExpectedData(this.cityID).then((result)=>{
                this.expectedList = result;
            })
        }
    },
    created(){
        this.initData();
    }
}
</script>

<style lang="scss" scoped>
.expected{
    padding: 18px;
    p{
        padding-bottom: 12px;
    }
    .expected_list{
        overflow: scroll;
        white-space: nowrap;
        .expected_item{
            display: inline-block;
            img{
                width: 85px;
                height: 115px;
                margin-right: 10px;
            }
            h5{
                width: 85px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color:#222 ;
            }
            p{
                font-size: 12px;
                color: #999 !important;
            }
        }
    }
}
</style>

