<template>
    <div class="result_wrapper" id="result_wrapper">
        <div class="result">
            <h3>电影/电视剧/综艺</h3>
            <movieSearchItem :movieList="movieList"/>
            <div class="more_result">查看全部{{movieList.total}}部影视剧</div>
        </div>
        <div class="result">
            <h3>影院</h3>
            <cinemaSearchItem :cinemaList="cinemaList"/>
            <div class="more_result">查看全部{{movieList.total}}家电影院</div>
        </div>
    </div>
</template>

<script>
import MovieSearchItem from '../../common/item/MovieSearchItem'
import CinemaSearchItem from '../../common/item/CinemaSearchItem'
import {getSearchMovie} from '../../services/movieService'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            movieList:{},
            cinemaList:[]
        }
    },  
    components:{
        'movieSearchItem':MovieSearchItem,
        'cinemaSearchItem':CinemaSearchItem
    },
    computed:{
        ...mapState(['cityID'])
    },
    created(){
        this.$center.$on('inputValue',(val)=>{
            console.log(val);
            getSearchMovie(val,this.cityID).then(result=>{
                if(result.movies){
                        this.movieList = result.movies;
                }
                console.log(result)
                if(result.cinemas){
                    this.cinemaList = result.cinemas.list.slice(0,3);
                }
                console.log(this.cinemaList)
               
            })
        })
    }
}
</script>

<style lang="scss" scoped>
#result_wrapper{
    height: 100%;
    overflow: auto;
    .result{
        margin-bottom: 10px;
        background-color: #fff;
        h3{
            font-size: 15px;
            color: #999;
            padding: 9px 15px;
            font-weight: 400;
        }
        .more_result{
            text-align: center;
            line-height: 44px;
            height: 44px;
            font-size: 15px;
            color: #ef4238;
        }
    }
}
</style>

