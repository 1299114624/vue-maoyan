<template>
<div>
    <div class="page" id="movie">

        <!-- 标题 -->
        <app-header title="猫眼电影"></app-header>

        <!-- 子标题 -->
        <div class="sub-header">
            <span class="city-icon" @click="cityListAction">{{$store.state.city}}</span>
            <nav class="nav">
                <li @click="changeAction(index)"
                    v-for="(item,index) in navList" :key="index"
                    :class="{active: index == navIndex}">
                    {{item}}    
                </li>
            </nav>
            <span class="search-icon" @click="searchAction">
                <img src="../../assets/search.png">
            </span>
        </div>

        <!-- 内容 -->
        <!-- 记录缓存位置 -->
        <keep-alive>
            <!-- 正在热映 -->
            <playing v-if="navIndex == 0"/>
            <!-- 即将上映 -->
            <coming v-if="navIndex == 1"/>
        </keep-alive>
    </div>
    <router-view/>
</div>
</template>

<script>
import Playing from '../../components/movie/Playing'
import Coming from '../../components/movie/Coming'

export default {
    components:{
        'playing':Playing,
        'coming':Coming,
    },
    data(){
        return{
            navList: ['正在热映','即将上映'],
            navIndex: 0,
        }
    },
    methods: {
        changeAction(index){
            this.navIndex = index;
        },
        cityListAction(){
            this.$router.push('/movie/cityList');
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
    color: #666;
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
    .nav{
        width: 50%;
        display: flex;
        li{
            flex: 1;
            text-align: center;
            &.active{
                color: #f03d37;
                border-bottom: 2px solid #f03d37;
            }
        }
    }
    .search-icon img{
        width: 20px;
        margin: 12px 15px
    }
}

</style>

