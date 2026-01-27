<template>
  <el-header class="navbar-container">
    <div class="navbar-wrapper">
      <!-- Logo 区域 -->
      <div class="logo">
        <img src="@/assets/logo.png" alt="龙御品AI" class="logo-img" />
        <span class="logo-text">龙御品<sup>AI</sup></span>
      </div>

      <!-- 桌面端导航 -->
      <el-menu
        mode="horizontal"
        class="nav-menu-desktop"
        :default-active="activePath"
        @select="handleMenuSelect"
      >
        <el-menu-item index="/ai-function">AI功能</el-menu-item>
        <el-menu-item index="/pricing">定价</el-menu-item>
        <el-menu-item index="/product">产品</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
      </el-menu>

      <!-- 登录按钮 -->
      <el-button type="primary" class="login-btn">登录</el-button>

      <!-- 移动端汉堡菜单 -->
      <el-icon class="hamburger" @click="showMobileMenu = !showMobileMenu">
        <Menu />
      </el-icon>
    </div>

    <!-- 移动端导航菜单 -->
    <el-drawer
      v-model="showMobileMenu"
      direction="rtl"
      :with-header="false"
      class="mobile-menu"
    >
      <el-menu
        mode="vertical"
        class="nav-menu-mobile"
        :default-active="activePath"
        @select="handleMenuSelect"
      >
        <el-menu-item index="/ai-function">AI功能</el-menu-item>
        <el-menu-item index="/pricing">定价</el-menu-item>
        <el-menu-item index="/product">产品</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
        <el-menu-item index="/login">
          <el-button type="primary" class="mobile-login-btn">登录</el-button>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </el-header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const showMobileMenu = ref(false)

// 高亮当前路由
const activePath = computed(() => route.path)

// 菜单跳转
const handleMenuSelect = (index: string) => {
  router.push(index)
  showMobileMenu.value = false
}
</script>

<style scoped lang="scss">
.navbar-container {
  background: #000;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 999;
  margin: 0;
  padding: 0;
}


.navbar-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;

  .logo-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  sup {
    font-size: 12px;
    color: #409eff;
  }
}

.nav-menu-desktop {
  flex: 1;
  justify-content: center;
  background: transparent;
  border: none;

  .el-menu-item {
    color: #fff;
    font-size: 16px;
    margin: 0 16px;

    &:hover,
    &.is-active {
      color: #409eff;
    }
  }
}

.login-btn {
  border-radius: 4px;
  font-size: 14px;
  padding: 8px 16px;
}

.hamburger {
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  display: none;
}

.mobile-menu {
  .nav-menu-mobile {
    padding-top: 20px;
    background: #1a1a1a;

    .el-menu-item {
      color: #fff;
      font-size: 16px;
      margin: 8px 0;
    }

    .mobile-login-btn {
      width: 100%;
      margin-top: 16px;
    }
  }
}

// 响应式适配
@media (max-width: 768px) {
  .nav-menu-desktop,
  .login-btn {
    display: none;
  }

  .hamburger {
    display: block;
  }
}
</style>