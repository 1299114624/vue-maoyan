<template>
<nav class="tabs">
    <slot/>
</nav>
</template>

<script>
export default {
    name: 'tabs',
    props:{
        value:Number,
    },
    methods:{
        handleTabAction(tabName){
            let vnode = this.$slots.default;
            let tabItem = vnode.map(item=>item.componentInstance);
            tabItem.map((item,index)=>{
                item.isActive = false;
                if(item.name == tabName){
                    this.$emit('input',index)
                }
            });
        },
    },
    mounted(){
        if(this.value<this.$slots.default.length){
            this.$slots.default[this.value].componentInstance.isActive=true
        }
    }
}
</script>

<style scoped>
 .tabs{
    width: 100%;
    height: 49px;
    left: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    border-top: 1px solid #ddd;
  }

</style>
