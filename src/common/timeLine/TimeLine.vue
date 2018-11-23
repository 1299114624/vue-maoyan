<template>
    <ul class="timeLine" id="timeLine">
        <li v-for="(item,index) in timeList" :key="index" @click="changeAction(item.date)">
            {{item.date | modifyDate}}
        </li>
    </ul>
</template>

<script>
import '../../utils/filter'
export default {
    name:'time-line',
    data(){
        return{
            timeList:[]
        }
    },
    created(){
        this.$center.$on('showDays',(dates)=>{
            this.timeList = dates
        })
    },
    methods:{
        changeAction(date){
            this.$center.$emit('changeCinema',date);
        }
    }
}
</script>

<style lang="scss" scoped>
#timeLine{
    white-space: nowrap;
    overflow: scroll;
    background-color: #fff;
    z-index: 15;
    border-bottom: 1px solid #e0e0e0;
    li{
        position: relative;
        display: inline-block;
        width: 115px;
        line-height: 43px;
        margin-left: 4.5px;
        font-size: 14px;
        text-align: center;
        list-style: none;
        color: #666;
    }
}
</style>

