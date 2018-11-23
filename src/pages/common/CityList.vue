<template>
    <div class="page subpage" id="cityList">
        
    <app-content ref="content">
        <section ref="locationList">
            <div class="city_title">定位城市</div>
            <div class="city_list">
                <div class="location_city">
                    定位失败，请点击重试
                </div>
            </div>
        </section>
        <section ref="latestList">
            <div class="city_title">最近访问城市</div>
            <div class="city_list">
                <div class="city_item">北京</div>
                <div class="city_item">重庆</div>
                <div class="city_item">上海</div>
            </div>
        </section>
        <section ref="hotList">  
            <div class="city_title">热门城市</div>
            <div class="city_list">
                <div class="city_item" v-for="(item,index) in olddata" :key="index"
                    @click="setCityAction(item)">
                    {{item.nm}}
                </div>
            </div>
        </section>
        <section v-for="item in data" :key="item.key" ref="list">
            <div class="city_title city_title_letter">{{item.key | toUpperLetter}}</div>
            <div class="city_block">
                <div class="city_item" v-for="city in item.value" :key="city.id"
                    @click="setCityAction(city)">
                    {{city.nm}}
                </div>
            </div>
        </section>
    </app-content>
    <div class="nav_bar">
        <div @click="locationAction()">定位</div>
        <div @click="latestAction()">最近</div>
        <div @click="hotAction()">热门</div>
        <span class="nav_item" v-for="(item,index) in keys" :key="item" @click="btnAction(index)">
            {{item | toUpperLetter}}
        </span>
    </div>
    </div>
</template>

<script>
import {getCityList} from '../../services/appService'
import '../../utils/filter'
import {mapState, mapActions} from 'vuex'
export default {
    data(){
        return {
            keys: [],
            olddata:[],
            data: [],
        }
    },
    methods:{
        ...mapActions(['modifyCityAction']),
        locationAction(){
            this.$refs.content.refresh();
            let height = 0;
            this.$refs.content.scrollTo(height)
        },
        latestAction(){
            this.$refs.content.refresh();
            let height = this.$refs.locationList.offsetHeight;
            this.$refs.content.scrollTo(height)
        },
        hotAction(){
            this.$refs.content.refresh();
            let height = this.$refs.locationList.offsetHeight + this.$refs.latestList.offsetHeight;
            this.$refs.content.scrollTo(height)
        },
        btnAction(index){
            this.$refs.content.refresh();
            //计算高度
            let height = this.$refs.locationList.offsetHeight + this.$refs.latestList.offsetHeight + this.$refs.hotList.offsetHeight;
            for(let i = 0; i < this.$refs.list.length;i++){
                if(i < index){
                    height += this.$refs.list[i].offsetHeight;
                }else {
                    break;
                }
            }
            this.$refs.content.scrollTo(height)
        },
        //选择城市
        setCityAction(city){
            this.modifyCityAction({
                cityID:city.id,
                city:city.nm
            })
            this.$router.back()
        }
    },
    created(){
        getCityList().then(({keys,olddata,data})=>{
            this.keys = keys;
            this.olddata = olddata.slice(0,10);
            this.data = data;
        })
    }
}
</script>

<style lang="scss" scoped>
#cityList{
    background-color: #ebebeb;
    font-size: 14px;
    color: #333;
    section{
        margin-right: 15px;
        .city_title_letter{
            padding-left: 25px;
        }
    }
    .city_title{
        padding-left: 15px;
        line-height: 30px;
    }
    .city_list{
        padding-right: 30px;
        background-color: #f5f5f5;
        padding-bottom: 8px;
        overflow: hidden;
        .city_item{
            float: left;
            background: #fff;
            width: 29%;
            height: 33px;
            margin-top: 15px;
            margin-left: 4%;
            padding: 0 4px;
            border: 1px solid #e6e6e6;
            border-radius: 3px;
            line-height: 33px;
            text-align: center;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .location_city{
            width: auto;
            min-width: 30%;
            padding: 0 20px;
            float: left;
            background: #fff;
            height: 33px;
            margin-top: 15px;
            margin-left: 4%;
            border: 1px solid #e6e6e6;
            border-radius: 3px;
            line-height: 33px;
            text-align: center;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .city_block{
        background-color: #f5f5f5;
        .city_item{
            height: 44px;
            line-height: 44px;
            margin-left: 15px;
            margin-right: 30px;
            border-bottom: 1px solid #c8c7cc;
        }
    }
    .nav_bar{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        .nav_item{
            display: block;
            font-size: 14px;
            padding: 0 6px;
            margin-left: 10px;
            text-align: center;
        }
    }
}
</style>

