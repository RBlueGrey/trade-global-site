<template>
  <header class="app-header">
    <div class="container header-content">
      <div class="logo" @click="$router.push('/')">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img" v-if="hasLogo" />
        <span v-else>TRADE CO.</span>
      </div>

      <nav class="desktop-menu">
        <el-menu mode="horizontal" :ellipsis="false" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/products">产品展示</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </nav>

      <div class="mobile-trigger" @click="emit('toggle-drawer')">
        <el-icon size="24px"><Menu /></el-icon>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu } from '@element-plus/icons-vue'
const emit = defineEmits(['toggle-drawer'])
const hasLogo = false // 暂时没图，设为false
</script>

<style scoped lang="scss">
.app-header {
  height: 70px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #004a99; /* 常见的工业蓝 */
    cursor: pointer;
  }

  /* 响应式逻辑：通过媒体查询切换显示 */
  .desktop-menu {
    display: block;
    @media (max-width: 768px) { display: none; }
  }

  .mobile-trigger {
    display: none;
    cursor: pointer;
    @media (max-width: 768px) { display: block; }
  }
}
</style>