<template>
    <nav class="tabs" id="navBar">
        <div class="tab">
            <div class="item">
                全城
                <span></span>
            </div>
            |
            <div class="item">
                品牌
                <span></span>
            </div>
            |
            <div class="item">
                特色
                <span></span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:'nav-bar'
}
</script>

<style lang="scss" scoped>
#navBar{
    width: 100%;
    height: 40px;
    background-color: #fff;
    z-index: 10;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .tab{
        display: flex;
        font-size: 18px;
        align-items: center;
        color: #eee;
        .item{
            color: #777;
            flex: 1;
            text-align: center;
            line-height: 40px;
            position: relative;
            font-size: 14px;
            span{
                display: inline-block;
                position: absolute;
                width: 0;
                height: 0;
                top:18px;
                margin-left: 4px;
                border: 4px solid transparent;
                border-top-color: #b0b0b0; 
            }
        }
    }
}
</style>

