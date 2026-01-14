<template>
  <div class="layout-wrapper">
    <AppHeader @toggle-drawer="isDrawerVisible = true" />

    <el-drawer
      v-model="isDrawerVisible"
      direction="ltr"
      size="70%"
      :with-header="false"
    >
      <el-menu router @select="isDrawerVisible = false">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/products">产品展示</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
        <el-menu-item index="/contact">联系我们</el-menu-item>
      </el-menu>
    </el-drawer>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="app-footer">
      <div class="container">
        <p>© 2024 Global Build Materials Co., Ltd. 版权所有</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'

const isDrawerVisible = ref(false)
</script>

<style scoped lang="scss">
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main-content {
    flex: 1; /* 保证 Footer 在页面内容少时也沉底 */
  }

  .app-footer {
    padding: 40px 0;
    background: #333;
    color: #fff;
    text-align: center;
  }
}
</style>