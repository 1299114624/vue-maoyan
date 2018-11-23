<template>
    <form id="normalLogin">
        <dl>
            <dd>
                <input type="text" placeholder="账户名/手机号/email" ref="user">
            </dd>
            <dd>
                <input type="password" placeholder="请输入您的密码" ref="psd">
            </dd>
        </dl>
        <div class="cover">

            <div class="loginBtn" @click="loginAction">
                登录
            </div>
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
            input{
                width: 100%;
                height: 31px;
                border: 0;
                outline: none;
                font-size: 16px;
                padding-left: 10px;
                margin-top: 4px;
                &:focus{
                    background-color: #eee;
                    border-radius: 4px;
                }
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
            background-color: #f03d37;
            text-align: center;
            color: #fff;
        }
    }
}
</style>

