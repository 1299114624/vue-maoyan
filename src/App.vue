<template>
  <div id="app">
    
    <keep-alive>
      <router-view/>
    </keep-alive>

    <tabs v-model="selectIndex">
      <tab-item v-for="(tabItem,index) in tabList" :key="index"
        :name="tabItem.name">
      </tab-item>
    </tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectIndex : 0,
      tabList:[
        {name:'电影',path:'/movie'},
        {name:'影院',path:'/cinema'},
        {name:'我的',path:'/mine'}
      ]
    }
  },
  watch:{
    selectIndex:{
      handler(newVal){
        // console.log(newVal);
        this.$router.push(this.tabList[newVal].path);
      }
    }
  },
  created(){
    let path = this.$route.path;
    // console.log(path)
    let index = this.tabList.findIndex((item,index)=>{
      // console.log(item.path == path);
      return item.path == path;
    })
    if(index >=0){
      this.selectIndex = index;
    }
  }
}
</script>


<style lang="scss">
#app{
  font-size: 14px;
  p{
    color: #666;
  }
}
</style>
