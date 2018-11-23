<template>
    <div class="div">
        <div class="page" id="cinema">
            <!-- 标题 -->
            <app-header title="影院"></app-header>

            <!-- 子标题 -->
            <div class="sub-header">
                <span class="city-icon" @click="cityListAction">{{$store.state.city}}</span>
                <div class="search-input" @click="searchAction">
                    <img src="../../assets/search.png">
                    <span>搜影院</span>
                </div>
            </div>

            <!-- 筛选栏 -->
            <nav-bar :style="{top:'88px',position:'fixed'}"/>

            <!-- 滚动内容 -->
            <app-content :style="{top:'128px'}">
                <cinema-list api="cinemaList"/>
            </app-content>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import CinemaName from '../../components/cinema/CinemaName'
export default {
    components:{
        'cinema-list':CinemaName
    },
    methods:{
        cityListAction(){
            this.$router.push('/cinema/cityList');
        },
        searchAction(){
            this.$router.push('/search')
        }
    }
}
</script>

<style lang="scss" scoped>
.sub-header{
    width: 100%;
    height: 44px;
    line-height: 44px;
    position: absolute;
    left: 0;
    top: 44px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    background-color: #f5f5f5;
    .city-icon{
        padding-left: 15px;
        &:after{
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            margin-left: 3px;
            border: 6px solid transparent;
            border-top: 6px solid #ccc;
            transform: translateY(3px)
        }
    }
    .search-input{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        font-size: 13px;
        color: #b2b2b2;
        margin-left: 18px;
        border: .5px solid #e6e6e6;
        border-radius: 5px;
        margin-right: 15px;
        flex: 1;
        background-color: #fff;
        img{
            width: 14px;
            height: 14px;
            margin-left: 3px;
            margin-right: 4px;
        }
    }
}
</style>

