<template>
    <div class="page subpage" id="mine">
        <app-header title="猫眼电影">
            <span slot="left" @click="backAction">&lt;</span>
        </app-header>
        <div class="page_content" :style="{top:'44px'}">
            <nav class="sub_header">
                <li v-for="(item,index) in navList" :key="index"
                    @click="changeAction(index)" :class="{active:index == navIndex}">
                    {{item}}
                </li>
            </nav>
            <normal v-if="navIndex == 0"/>
            <quick v-if="navIndex == 1"/>
            <ul class="subline">
                <li><router-link to="/movie">立即注册</router-link></li>
                <li class="fr"><router-link to="/movie">找回密码</router-link></li>
            </ul>
            <div class="copyright">
                <span>© 猫眼电影 客服电话：<i>400-670-5335</i></span>
            </div>
        </div>
    </div>
</template>

<script>
import normal from '../../components/mine/normalLogin'
import quick from '../../components/mine/quickLogin'
export default {
    data(){
        return{
            navList:['美团账号登陆','手机验证登陆'],
            navIndex:0,
        }
    },
    components:{
        normal,
        quick,
    },
    methods:{
        backAction(){
            this.$router.back();
        },
        changeAction(index){
            this.navIndex = index
        }
    }
}
</script>

<style lang="scss" scoped>
#mine{
    background-color: #fff;
    .sub_header{
        width: 100%;
        height: 44px;
        border-bottom: 8px solid #d6d6d6;
        display: flex;
        li{
            flex: 1;
            text-align: center;
            line-height: 44px;
            position: relative;
            &.active{
                color: #f03d37;
                &::after{
                    content: '';
                    width: 150px;
                    height: 0;
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 44px;
                    border-bottom: 8px solid #f03d37;
                }
            }
        }
    }
    .subline{
        margin:0 20px;
        
        li{
            display: inline-block;
            a{
                color: #f03d37;
            }
            &.fr{
                float: right;
            }
        }
    }
    .copyright{
        margin-top: 5px;
        text-align: center;
        i{
            font-style: normal;
            color: #f03d37;
        }
    }
}
</style>


