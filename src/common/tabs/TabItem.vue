<template>
<li class="tab" @click="tabAction" :class="{active:isActive}" id="tabItem">
    <span :class="icon">❤</span>
    <span>{{name}}</span>
</li>
</template>

<script>
export default {
    name: 'tab-item',
    props:{
        name:String,
        icon:String,
    },
    data(){
        return{
            isActive : false
        }
    },
    methods:{
        tabAction(){
            this.$parent.handleTabAction(this.name);
            // console.log(this.$parent)
            this.isActive = true;
        }
    }
}
</script>

<style lang="scss" scoped>
#tabItem{
    flex: 1;
    text-align: center;
    flex-direction: column;
    display: flex;
    color: #333;
    span{
        flex: 1;
        &:first-of-type{
            font-size: 20px;
        }
        &:last-of-type{
            font-size: 12px;
        }
    }
    &.active{
        color: #f03d37;
    }
}
</style>

