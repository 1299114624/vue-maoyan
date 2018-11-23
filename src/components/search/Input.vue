<template>
    <div class="search_input" id="search_input">
        <div class="input_wrapper">
            <img src="../../assets/search2.png" class="search_icon">
            <input type="text" placeholder="搜电影、搜影院" @input="inputAction" ref="input">
            <img src="../../assets/cancel.png" class="search_cancel" @click="clearAction">
        </div>
        <div class="cancel" @click="backAction">取消</div>
    </div>
</template>

<script>
export default {
    methods:{
        inputAction(){
            // console.log(this.$refs.input.value)
            this.$center.$emit('inputValue',this.$refs.input.value)
        },
        clearAction(){
            this.$refs.input.value = '';
        },
        backAction(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
#search_input{
    display: flex;
    align-items: center;
    padding: 8px 0 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .input_wrapper{
        padding: 0 10px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        background-color: #fff;
        flex: 1;
        .search_icon{
            width: 15px;
            height: 15px;
            margin-right: 6px;
            float: left;
            position: relative;
            top: 6px;
        }
        input{
            flex: 1;
            border: none;
            font-size: 14px;
            color: #333;
            line-height: 20px;
            padding: 4px 0;
            outline: none;
            width: calc(100% - 40px);
        }
        .search_cancel{
            width: 15px;
            height: 15px;
            float: right;
            top:6px;
            position: relative;
        }
    }
    .cancel{
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        font-size: 16px;
        color: #f03d37;
    }
}
</style>
