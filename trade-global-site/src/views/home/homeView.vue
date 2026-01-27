<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <Navbar />

    <!-- 主要内容和页脚容器 -->
    <div class="content-wrapper">
      <!-- 横幅区域 -->
      <main class="banner-section">
        <div class="banner-bg">
          <!-- 移除了原有的img标签，改用CSS背景图 -->
          <div class="banner-overlay">
            <h1 class="banner-title">
              聚焦 "产业数字化+人工智能"<br />双引擎
            </h1>
            <p class="banner-subtitle">
              以数据治理为基础，数据要素流通和场景化AI驱动行业价值升级
            </p>
            <el-button type="primary" class="banner-btn">点击了解</el-button>
          </div>
        </div>
      </main>

      <!-- 页脚 -->
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped lang="scss">
.home-container {
  min-height: 100vh; // 改为100vh确保页面占满视口高度
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.banner-section {
  position: relative;
  width: 100%; // 替换100vw避免横向滚动
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.banner-bg {
  position: relative;
  width: 100%;
  min-height: 70vh; // 给背景容器设置最小高度，确保图片完整显示
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 0;
  // 核心修改：用background-image替代img标签，完美适配背景
  background: url('@/assets/background.jpg') center center / cover no-repeat;
  background-color: #f0f0f0; // 图片加载前的备用背景
}

.banner-overlay {
  position: relative;
  z-index: 2; // 确保内容在背景图上方
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 20px;
}

.banner-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.3;
}

.banner-subtitle {
  font-size: 16px;
  margin-bottom: 32px;
  color: #e0e0e0;
  line-height: 1.6;
}

.banner-btn {
  font-size: 16px;
  padding: 12px 32px;
  border-radius: 4px;
  font-weight: 600;
}

// 响应式适配（优化了高度适配）
@media (max-width: 768px) {
  .banner-bg {
    min-height: 60vh; // 适配平板端高度
  }

  .banner-title {
    font-size: 28px;
  }

  .banner-subtitle {
    font-size: 14px;
  }
  
  .banner-overlay {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .banner-bg {
    min-height: 50vh; // 适配手机端高度
  }
  
  .banner-title {
    font-size: 24px;
  }
  
  .banner-subtitle {
    font-size: 13px;
  }
}
</style>