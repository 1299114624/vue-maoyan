<template>
    <ul class="wrapper">
        <li class="movie_item" v-for="item in movieList" :key="item.id" @click="goMovieDetail(item.id)">
            <div class="item_img">
                <img :src="item.img" alt="">
            </div>
            <div class="item_content">
                <h3>{{item.nm}}</h3>
                <p v-show="item.sc">观众评<mark>{{item.sc}}</mark>分</p>
                <p v-show="!item.sc"><mark>{{item.wish}}</mark>人想看</p>
                <p>主演: {{item.star}}</p>
                <p>{{item.showInfo}}</p>
                <p v-show="!item.showInfo">test  test</p>
            </div>
            <div class="item_btn">
                <span :class="{preview:!item.globalReleased,wish:!item.showInfo}">{{btnName(item)}}</span>
            </div>
        </li>
    </ul> 
</template>

<script>
export default {
    props:{
        movieList:Array
    },
    methods:{
        btnName:function(item){
            if(item.globalReleased){
                return '购票'
            }else{
                if(item.showInfo){
                    return '预售'
                }else{
                    return '想看'
                }
            }
        },
        goMovieDetail(id){
            // console.log(this.movieList)
            console.log('GO了')
            this.$router.push({name:'movieDetail',params:{id}})
        }
    },
    created(){
        console.log('创建了')
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    padding: 0 10px;
    .movie_item{
        display: flex;
        padding: 8px;
        .item_img img{
            width: 64px;
            height: 90px;
        }
        .item_content{
            width: 50%;
            margin-left: 10px;
            border-bottom: 1px solid #e6e6e6;
            p,h3{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
        .item_btn{
            width: 25%;
            margin: auto;
           span{
                padding: 5px 10px;
                background-color: #f03d37;
                color: #fff;
                border-radius: 4px;
                margin-left: 10px;
                &.preview{
                    background-color: #3c9fe6;
                }
                &.wish{
                    background-color: #faaf00;
                }
           }
        }
    }
}
</style>

