<template>
    <div class="page subpage" id="search">
        <app-header title="猫眼电影">
            <span slot="left" @click="backAction">&lt;</span>
        </app-header>
        <div class="page_content" :style="{top:'44px'}">
            <!-- 搜索框 -->
            <search-input/>

            <!-- 热门搜索 -->
            <div class="hot_search" ref="hot">
                <h3>热门搜索</h3>
                <div class="hot_movies_wrap"></div>
            </div>

            <!-- 搜索结果 -->
            <search-list v-show="ifList"/>
        </div>
    </div>
</template>

<script>
import Input from '../../components/search/Input'
import searchList from '../../components/search/searchList'
export default {
    data(){
        return{
            ifList:false
        }
    },
    components:{
        'search-input':Input,
        'search-list':searchList,
    },
    methods:{
        backAction(){
            this.$router.back();
        }
    },
    created(){
        this.$center.$on('inputValue',(val)=>{
            this.$nextTick(()=>{
                // console.log(this.$refs.hot)
                if(val == ''){
                    this.ifList = false;
                    this.$refs.hot.style.display = ''
                }else{
                    this.ifList = true;
                    this.$refs.hot.style.display = 'none';
                }
            })
        })
    }
}
</script>

<style lang="scss" scoped>
#search{
    background-color: #f5f5f5;
    z-index: 20;
    .hot_search{
        padding: 0 0 8px 15px;
        background-color: #fff;
        top: -1px;
        position: relative;
        h3{
            border-top: 1px solid #e5e5e5;
            padding-top: 17px;
            font-size: 14px;
            color: #666;
            font-weight: 400;
        }
        .hot_movies_wrap{
            margin-top: 15px;
            padding-right: 15px;
            overflow: hidden;
        }
    }
}
</style>

