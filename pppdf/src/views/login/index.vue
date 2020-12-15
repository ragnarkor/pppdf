<template>
    <div>
        <!-- 导航栏 -->
        <van-nav-bar 
            title="登录"
            left-text="返回" 
            left-arrow 
            @click-left="$router.back()" 
        />
        <!-- /导航栏 -->
        <!-- 登录表单 -->
        <van-form @submit="onLogin">
            <van-field 
                v-model="user.mobile"
                required
                clearable
                left-icon="user-o" 
                placeholder="请输入手机号" 
                />
            <van-field 
                v-model="user.code"
                required
                clearable 
                left-icon="eye-o" 
                placeholder="请输入验证码">
                <template #button>
                    <van-button size="small" round>发送验证码</van-button>
                </template>
            </van-field>
            <div>
                <van-button type="info" native-type="submit" block round>登录</van-button>
            </div>
        </van-form>
        <!-- /登录表单 -->
    </div>
</template>
<script>
import { login } from '@/api/user'
export default {
    name: 'LoginIndex',
    data() {
        return {
            user: {
                mobile: '', //手机号
                code: '', // 验证码
            },
        }
    },
    methods:{
        async onLogin () {
          // 开始转圈圈
          this.$toast.loading({
              duration: 0,  // 持续展示
              forbidClick: true,
              message: '登录中...',
          });
          
          try {
            const res = await login(this.user);
            console.log('登录成功', res);
            this.$toast.success('登录成功');
          } catch (err) {
            if (err.response.status === 400) {
                console.log('登录失败', err);
                this.$toast.fail('登录失败');
            }
            console.log('登录失败', err);
            this.$toast.fail('登录失败');
          }
        }
    },
}
</script>
<style lang="less" scoped>
</style>