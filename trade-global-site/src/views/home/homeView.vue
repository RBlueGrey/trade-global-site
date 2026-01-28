<template>
  <div class="home-container">
    <Navbar />

    <div class="content-wrapper">
      
      <main class="banner-section">
        <div class="banner-bg">
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

      <section class="section-block video-section">
        <div class="section-header">
          <h2>短视频拍摄</h2>
          <span class="decoration-line"></span>
        </div>
        
        <div class="card-grid">
          <div v-for="(item, index) in videoServices" :key="index" class="service-card">
            <div class="card-image-wrapper">
              <img :src="item.image" :alt="item.title" class="card-img" />
            </div>
            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-block website-section">
        <div class="section-header">
          <h2>网站搭建</h2>
          <span class="decoration-line"></span>
        </div>

        <div class="text-content-area">
          <p v-for="(text, index) in websiteTexts" :key="index" class="text-paragraph">
            {{ text }}
          </p>
        </div>
      </section>

    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

// 模拟数据：短视频拍摄
// 请将 image 换成你 assets 里的真实路径
const videoServices = ref([
  {
    title: '探视陪诊拍摄',
    desc: '首家商业路演化、发掘公司，则需全流程交付执行',
    image: 'https://placehold.co/600x400/png' 
  },
  {
    title: '服务内容',
    desc: '数据采集业，素材库中素材，视频剪辑及后期处理',
    image: 'https://placehold.co/600x400/png'
  },
  {
    title: '服务内容',
    desc: '专业拍摄超市，替换赛道运营，用工短缺',
    image: 'https://placehold.co/600x400/png'
  }
]);

// 模拟数据：网站搭建
const websiteTexts = ref([
  '大数据推进在文创风尚相关服务企业级联流通业务场景进入数据层级全生命全流程文理企业件服务，文检合规示范价，可赋能挖掘高作AI驱动行业价值方式。',
  '结合搭建在市级风尚相关服务企业展要流通业务领域在大数据概念建立行业标准象成企业件服务，文检合规示范价，可赋能挖掘高作AI驱动行业价值方式。',
  '配合搭建在市级风尚相关服务企业联流通业务场景进入数据层级全生命全流程文理企业件服务，文检合规示范价，可赋能挖掘高作AI驱动行业价值方式。'
]);
</script>

<style scoped lang="scss">
/* 全局基础样式 */
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex: 1;
  background-color: #fff;
}

/* 1. Banner 样式 
   这里结合了你的原代码要求：背景图 + 居中的文字蒙版盒子
*/
.banner-section {
  position: relative;
  width: 100%;
  // 保持高度自适应或固定高度，视你的背景图而定，这里参考你的原代码用 auto 或配合 min-height
  height: auto; 
}

.banner-bg {
  width: 100%;
  min-height: 600px; /* 桌面端高度 */
  // 背景图路径请确认
  background: url('@/assets/background.jpg') no-repeat center center; 
  background-size: cover;
  position: relative;
  
  // Flex 布局：确保蒙版盒子在正中间
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 核心修改：加回了蒙版样式 */
.banner-overlay {
  position: relative;
  z-index: 2;
  
  // 这里的样式来自你提供的原代码，实现了文字背景黑框
  background: rgba(0, 0, 0, 0.6); 
  padding: 40px;
  border-radius: 8px;
  max-width: 1000px;
  margin: 0 20px; /* 防止在小屏幕贴边 */
  
  // 文字居中
  text-align: center;
  color: #fff;
}

.banner-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.3;
}

.banner-subtitle {
  font-size: 1.2rem;
  margin-bottom: 32px;
  color: #e0e0e0;
  line-height: 1.6;
}

.banner-btn {
  padding: 12px 40px;
  font-size: 1.1rem;
  font-weight: 600;
}

/* 2. 通用板块样式 */
.section-block {
  padding: 80px 10%;
  max-width: 1440px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .decoration-line {
    display: inline-block;
    width: 60px;
    height: 4px;
    background-color: #409EFF;
    border-radius: 2px;
  }
}

/* 3. 短视频 Grid 布局 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
}

.card-image-wrapper {
  width: 100%;
  height: 220px;
  overflow: hidden;
  
  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
}

.service-card:hover .card-img {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
  text-align: left;

  h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
  }
}

/* 4. 网站搭建文字板块 */
.website-section {
  background-color: #f9faff;
}

.text-content-area {
  max-width: 1000px;
  margin: 0 auto;
}

.text-paragraph {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
  text-align: justify;
}

/* 移动端适配 
*/
@media screen and (max-width: 768px) {
  /* Banner 适配 */
  .banner-bg {
    min-height: 400px;
  }
  
  /* 蒙版在移动端稍微减小内边距，保持原代码逻辑 */
  .banner-overlay {
    padding: 30px 20px;
  }
  
  .banner-title {
    font-size: 2rem;
  }
  
  .banner-subtitle {
    font-size: 1rem;
  }

  /* 板块通用适配 */
  .section-block {
    padding: 50px 20px;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  /* Grid 变单列 */
  .card-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  /* 文字部分适配 */
  .text-paragraph {
    font-size: 1rem;
    text-align: left;
  }
}
</style>