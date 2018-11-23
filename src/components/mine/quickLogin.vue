<template>
    <form id="normalLogin">
        <dl>
            <dd>
                <input class="hasdiv" type="text" placeholder="请输入手机号" ref="user">
                <div class="securityCode">获取验证码</div>
            </dd>
            <dd>
                <input type="text" placeholder="请输入短信验证码" ref="psd">
            </dd>
        </dl>
        <div class="cover">
            <div class="loginBtn" @click="loginAction">登录</div>
        </div>
    </form>
</template>

<script>
export default {
    methods: {
        loginAction(){
            let user = this.$refs.user.value;
            let psd = this.$refs.psd.value;
            //发送登陆的ajax请求

            //保存登陆成功后的信息
            localStorage.setItem('token','asdhgasdjadsgads');
            this.$router.push('/mine');
        }
    }
}
</script>

<style lang="scss" scoped>
#normalLogin{
    width: 100%; 
    dl{
        width: 100%; 
        box-sizing: border-box;
        padding-left: 10px;
        dd{
            width: 100%;
            box-sizing: border-box;
            border-bottom: 1px solid #d6d6d6;
            padding: 5px 20px 5px 0;
            display: flex;
            input{
                display: inline-block;
                height: 31px;
                width: 100%;
                border: 0;
                outline: none;
                font-size: 16px;
                padding-left: 10px;
                margin-top: 4px;
                &:focus{
                    background-color: #eee;
                    border-radius: 4px;
                }
                &.hasdiv{
                    width: 60%;
                }
            }
            .securityCode{
                display: inline-block;
                height: 31px;
                margin-top: 4px;
                line-height: 30px;
                text-align: center;
                background-color: #dcdcdc;
                color: #999;
                border-radius: 4px;
                margin-left: 15px;
                padding: 0 10px;
            }
        }
    }
    .cover{
        width: 100%;
        box-sizing: border-box;
        padding: 15px;
        .loginBtn{
            padding: 10px;
            display: block;
            width: 100%;
            box-sizing: border-box;
            height: 44px;
            font-size: 20px;
            line-height: 24px;
            background-color: #dcdcdc;
            text-align: center;
            color: #fff;
        }
    }
}
</style>

