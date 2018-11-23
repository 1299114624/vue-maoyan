<template>
    <ul id="wrapper" ref="wrapper">
            <li class="cinema_item" v-for="item in cinemaList" :key="item.id">
                <div class="item_title line_ellipsis">
                    <span>{{item.nm}}</span>
                    <span class="price_block">
                        <span class="price">{{item.sellPrice}}</span>
                        <span class="q">元起</span>
                    </span>
                </div>
                <div class="item_location box_flex">
                    <div class="line_ellipsis flex">{{item.addr}}</div>
                    <div class="distance">{{item.distance}}</div>
                </div>
                <div class="label_block line_ellipsis">
                    <div class="snack" v-show="item.snack">小吃</div>
                    <div class="vipTag" v-show="item.vipDesc">折扣卡</div>
                </div>
            </li>
        </ul>
</template>

<script>
export default {
    props:{
        cinemaList:Array
    },
    created(){
        console.log(this.cinemaList)
    }
}
</script>

<style lang="scss" scoped>
.waiting{
    display: none;
    position: absolute;
    top: 88px;
}
#wrapper{
    color: #666;
    .line_ellipsis{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .box_flex{
        display: flex;
    }
    .flex{
        flex: 1;
    }
    .distance{
        margin-left: 5px;
    }
    .cinema_item{
        padding: 13px 0;
        margin-right: 25px;
        margin-left: 15px;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        .item_title{
            height: 23px;
            line-height: 23px;
            font-size: 16px;
            color: #000;
            .price_block{
                padding-top: 9px;
                padding-left: 3px;
                .price{
                    font-size:18px;
                    color: #f03d37;
                }
                .q{
                    margin-left: 3px;
                    font-size: 12px;
                    color: #f03d37;
                }
            }
        }
        .label_block{
            height: 17px;
            line-height: 17px;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            font-size: 0;
            flex-shrink: 0;
            &>div{
                position: relative;
                display: inline-block;
                padding: 0 3px;
                height: 15px;
                line-height: 15px;
                border-radius: 2px;
                font-size: .6rem;
                &+div{
                    margin-left: 5px;
                }
                &.endorse{
                    color: #589daf;
                    border: 1px solid #589daf;
                }
                &.vipTag{
                    color: #f90;
                    border: 1px solid #f90;
                }
                &.hallType{
                    color: #589daf;
                    border: 1px solid #589daf;
                }
                &.snack{
                    color: #f90;
                    border: 1px solid #f90;
                }
            }
        } 
         .item_discount{
             color: #999;
         }
    }
}
</style>
