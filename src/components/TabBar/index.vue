<template>
  <div class="tabBar">
    <MusicPlayer/>
    <van-tabbar route v-model="active" active-color="#ee0a24" inactive-color="#ccc">
      <van-tabbar-item to="/home/find">
        <div class="tabbarItem">
          <i class="iconfont icon-wangyiyunyinle"></i>
          <p>发现</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item to="/home/podcast">
        <div class="tabbarItem">
          <i class="iconfont icon-zhuanjiguangpan"></i>
          <p>播客</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item to="/home/my">
        <div class="tabbarItem">
          <i class="iconfont icon-yinyue"></i>
          <p>我的</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item to="/home/concern">
        <div class="tabbarItem">
          <i class="iconfont icon-haoyou"></i>
          <p>关注</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item to="/home/yuncun">
        <div class="tabbarItem">
          <i class="iconfont icon-M_round"></i>
          <p>云村</p>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from "vue";
import MusicPlayer from '@/components/MusicPlayer.vue'
export default {
  name: "TabBar",
  components: {
    MusicPlayer
  },
  setup() {
    const active = ref(0);
    const icon = {
      active: "https://img.yzcdn.cn/vant/user-active.png",
      inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
    };
    return {
      icon,
      active,
    };
  },
};
</script>
<style lang="less" scoped>
.tabbarItem{
    text-align: center;
}
</style>
