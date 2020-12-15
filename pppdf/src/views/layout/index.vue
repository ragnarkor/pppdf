<template>
    <div>
        <!-- 子路由出口 -->
        <router-view />
        <!-- /子路由出口 -->
        <van-tabbar v-model="active" route>
            <van-tabbar-item replace to="/" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/shop" icon="cart-o">
                商城
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="contact">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {

    name: 'LayoutIndex',

    data() {
        return {
            active: 0,
        }
    }
}
</script>
<style lang="less" scoped>
</style>