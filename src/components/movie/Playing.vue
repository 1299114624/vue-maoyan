<template>
<div>
    <app-content :style="{top:'88px'}" @loadmore="getMoreData" :canLoadMore="canLoadMore">
        <movieItem :movieList="playingList"/>
    </app-content> 
</div>
</template>

<script>
import {getPlayingList,getMorePlayingList} from '../../services/movieService'
import MovieItem from '../../common/item/MovieItem'
export default {
    data(){
        return {
            playingList:[],
            playingIds:[],
            canLoadMore:true
        }
    },
    components:{
        'movieItem':MovieItem
    },
    methods:{
        getMoreData(){
            //取得下一页数据
            //取得ids
            let ids = [...this.playingIds];
            ids = ids.splice(this.playingList.length,10);
            //组装请求参数
            let movieIds = ids.join(',');
            //发送请求
            this.canLoadMore = false;
            getMorePlayingList(movieIds).then(result=>{
                this.playingList = [...this.playingList,...result];
                //判断是否加载完了所有的数据
                if(this.playingList.length >= this.playingIds.length){
                    this.canLoadMore = false; //加载完毕
                    console.log('加载完毕');
                }else{
                    this.canLoadMore = true;
                }
            })
        }
    },
    created(){
        //初始化请求正在热映的电影数据
        getPlayingList().then(({data,ids})=>{
            this.playingList = data;
            this.playingIds = ids;
            // this.getMoreData();
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

