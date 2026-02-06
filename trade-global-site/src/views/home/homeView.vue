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

      <section class="section-block video-section" id="video-section">
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

      <section class="section-block pricing-section" id="pricing-section">
        <div class="section-header">
          <h2>服务定价</h2>
          <p class="pricing-subtitle">提供高性价比的模块化服务套餐，助力企业低成本转型</p>
          <span class="decoration-line"></span>
        </div>

        <div class="pricing-grid">
          <div v-for="(plan, index) in pricingPlans" :key="index" :class="['pricing-card', { 'is-featured': plan.featured }]">
            <div v-if="plan.featured" class="featured-tag">推荐选择</div>
            <div class="plan-name">{{ plan.name }}</div>
            <div class="plan-price">
              <span class="unit">¥</span>
              <span class="amount">{{ plan.price }}</span>
            </div>
            <ul class="plan-features">
              <li v-for="(f, fi) in plan.features" :key="fi">{{ f }}</li>
            </ul>
            <el-button :type="plan.featured ? 'primary' : 'default'" class="plan-btn" @click="showContact = true">立即咨询</el-button>
          </div>
        </div>

        <div class="extra-pricing">
          <el-collapse>
            <el-collapse-item title="点击查看单独服务报价及增值服务" name="1">
              <div class="solo-price-grid">
                <div v-for="(item, i) in soloPrices" :key="i" class="solo-price-item">
                  <span class="label">{{ item.name }}</span>
                  <span class="value">{{ item.price }}</span>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </section>

      <section class="section-block about-section" id="about-section">
        <div class="section-header">
          <h2>关于我们</h2>
          <span class="decoration-line"></span>
        </div>

        <div class="about-container">
          <div class="about-intro-group">
            <h3>以技术赋能，助中小企业破局增长</h3>
            <p class="intro-description">
              在数字化浪潮中，我们专注于为中小企业提供“<strong>短视频营销 + 网站搭建 + AI智能赋能 + 出海辅助</strong>”的一站式解决方案。我们打破传统服务的碎片化壁垒，以“一个入口、一套方案、全程陪伴”的模式，助力企业低成本实现数字化转型与全球拓展。
            </p>
          </div>

          <div class="business-showcase">
            <div v-for="(bus, index) in businessList" :key="index" class="bus-card">
              <div class="bus-img-box">
                <div class="aspect-ratio-wrapper">
                   <img v-if="bus.img" :src="bus.img" class="actual-img" />
                   <div v-else class="img-placeholder"><span>图片预览: {{ bus.title }}</span></div>
                </div>
              </div>
              <div class="bus-info">
                <div class="bus-tag">核心业务 0{{ index + 1 }}</div>
                <h4>{{ bus.title }}</h4>
                <ul class="bus-points">
                  <li v-for="(p, pi) in bus.points" :key="pi">{{ p }}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="advantage-grid">
            <div v-for="(adv, index) in advantages" :key="index" class="adv-card">
              <div class="adv-icon">{{ adv.icon }}</div>
              <h4>{{ adv.title }}</h4>
              <p>{{ adv.desc }}</p>
            </div>
          </div>

          <div class="vision-banner-white">
             <div class="vision-box">
                <span class="v-label">核心使命</span>
                <p>以技术简化复杂，以服务赋能成长</p>
             </div>
             <div class="vision-divider"></div>
             <div class="vision-box">
                <span class="v-label">企业愿景</span>
                <p>成为中小企业最信赖的数字化增长伙伴</p>
             </div>
          </div>
        </div>
      </section>
    </div>

    <el-dialog v-model="showContact" title="扫码咨询专属方案" width="300px" center>
      <div class="qr-container">
        <img src="https://placehold.co/200x200/png?text=QR+Code" alt="咨询二维码" class="qr-img" />
        <p>扫码添加专业顾问微信</p>
      </div>
    </el-dialog>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const showContact = ref(false);

const videoServices = ref([
  { title: '探视陪诊拍摄', desc: '首家商业路演化、发掘公司，则需全流程交付执行', image: 'https://placehold.co/600x400/png' },
  { title: '内容全案策划', desc: '针对痛点提供从策略到执行的全案服务，涵盖脚本、拍摄与剪辑', image: 'https://placehold.co/600x400/png' },
  { title: '多平台适配', desc: '适配抖音、视频号、TikTok等主流平台，以数据驱动内容优化', image: 'https://placehold.co/600x400/png' }
]);

const websiteTexts = ref([
  '网站是企业的“线上名片”，我们提供响应式官网、营销型网站及外贸独立站搭建，支持98种全球语言翻译。',
  '融合SEO优化与用户体验设计，确保网站不仅“好看”，更能有效获客，成为企业24小时线上展厅。'
]);

// 报价数据
const pricingPlans = ref([
  { name: '基础版', price: '6100', features: ['短视频拍摄 12条', '网站基础版(静态网页)', '脚本制作/拍摄/剪辑', 'ICP备案'], featured: false },
  { name: '高级版', price: '7300', features: ['短视频拍摄 16条', '网站高级版(带登录系统)', '脚本制作/拍摄/剪辑', '服务器搭建/ICP备案'], featured: true },
  { name: '企业版', price: '9688', features: ['短视频拍摄 20条', '网站企业版(定制域名)', '脚本制作/拍摄/剪辑', '动态页面/带系统/备案'], featured: false }
]);

const soloPrices = ref([
  { name: '短视频拍摄(脚本/拍摄/剪辑)', price: '5300元 / 13条' },
  { name: '网站基础版(静态网页/备案)', price: '4000元' },
  { name: '网站高级版(服务器/登录系统)', price: '5888元' },
  { name: '网站企业版(动态/定制域名)', price: '7999元' },
  { name: '垂直投流服务', price: '投流以实际金额为准' },
  { name: '运行维护', price: '300~500元 / 月' }
]);

const businessList = ref([
  { title: '短视频营销', points: ['差异化账号定位', '实拍/脚本/剪辑全案', '矩阵运营与数据复盘'], img: '' },
  { title: '企业网站搭建', points: ['PC/移动全终端适配', '支持98种全球语言', 'SEO/获客功能集成'], img: '' },
  { title: 'AI 智能赋能', points: ['AI爆款预测', '自动化翻译适配', '运营降本增效工具'], img: '' },
  { title: '出海辅助', points: ['外贸独立站搭建', '本地化运营合规', '全球流量分发对接'], img: '' }
]);

const advantages = ref([
  { title: '中小企业专属', desc: '深度理解预算有限需求，提供模块化服务。', icon: '🎯' },
  { title: '全链路一站式', desc: '整合短视频、网站、AI服务，一个团队全程跟进。', icon: '⚡' },
  { title: '技术+实战驱动', desc: '兼具创意与研发，既懂内容也懂经营痛点。', icon: '🚀' },
  { title: '长期陪伴服务', desc: '覆盖初创到出海全周期，提供持续数据复盘。', icon: '🤝' }
]);
</script>

<style scoped lang="scss">
/* --- 全局基础样式 (保持不变) --- */
.home-container { display: flex; flex-direction: column; min-height: 100vh; }
.content-wrapper { flex: 1; background-color: #fff; }
.banner-section { position: relative; width: 100%; height: auto; }
.banner-bg { width: 100%; min-height: 600px; background: url('@/assets/background.jpg') no-repeat center center; background-size: cover; display: flex; align-items: center; justify-content: center; }
.banner-overlay { background: rgba(0, 0, 0, 0.6); padding: 40px; border-radius: 8px; max-width: 1000px; margin: 0 20px; text-align: center; color: #fff; }
.banner-title { font-size: 3.5rem; font-weight: bold; margin-bottom: 20px; line-height: 1.3; }
.banner-subtitle { font-size: 1.2rem; color: #e0e0e0; line-height: 1.6; margin-bottom: 32px; }
.banner-btn { padding: 12px 40px; font-size: 1.1rem; font-weight: 600; }
.section-block { padding: 80px 10%; max-width: 1440px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 60px; h2 { font-size: 2.5rem; color: #333; margin-bottom: 15px; font-weight: bold; } .decoration-line { display: inline-block; width: 60px; height: 4px; background-color: #409EFF; border-radius: 2px; } }
.card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.service-card { background: #fff; border-radius: 8px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; &:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); } }
.card-image-wrapper { width: 100%; height: 220px; overflow: hidden; .card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; } }
.service-card:hover .card-img { transform: scale(1.05); }
.card-content { padding: 20px; text-align: left; h3 { font-size: 1.25rem; color: #333; margin-bottom: 10px; font-weight: 600; } p { font-size: 0.95rem; color: #666; line-height: 1.6; } }
.website-section { background-color: #f9faff; }
.text-content-area { max-width: 1000px; margin: 0 auto; }
.text-paragraph { font-size: 1.1rem; color: #555; line-height: 1.8; margin-bottom: 30px; text-align: justify; }

/* --- [新增] 服务定价板块样式 --- */
.pricing-subtitle { color: #888; margin-top: -10px; margin-bottom: 20px; text-align: center; }
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-bottom: 40px; }
.pricing-card {
  border: 1px solid #eee; padding: 40px 20px; border-radius: 16px; text-align: center; transition: all 0.3s; position: relative; background: #fff;
  &:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.05); }
  &.is-featured { border: 2px solid #409EFF; box-shadow: 0 15px 35px rgba(64,158,255,0.1); transform: scale(1.05); z-index: 2; .plan-name { color: #409EFF; } }
  .featured-tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #409EFF; color: #fff; padding: 4px 15px; border-radius: 20px; font-size: 12px; }
  .plan-name { font-size: 1.5rem; font-weight: bold; margin-bottom: 20px; color: #333; }
  .plan-price { margin-bottom: 30px; .unit { font-size: 1.2rem; color: #409EFF; margin-right: 4px; } .amount { font-size: 3rem; font-weight: 800; color: #409EFF; } }
  .plan-features { list-style: none; padding: 0; margin-bottom: 30px; li { padding: 10px 0; color: #666; border-bottom: 1px dashed #f0f0f0; &:last-child { border: none; } } }
  .plan-btn { width: 100%; height: 48px; border-radius: 8px; font-size: 1rem; font-weight: 600; }
}
/* 单独报价折叠 */
.extra-pricing {
  max-width: 900px; margin: 0 auto; 
  :deep(.el-collapse) { border: none; --el-collapse-header-bg-color: transparent; }
  :deep(.el-collapse-item__header) { justify-content: center; font-size: 1rem; color: #409EFF; background: #f8f9fb; border-radius: 8px; margin-bottom: 10px; border: 1px solid #eee; }
  :deep(.el-collapse-item__content) { padding-bottom: 0; }
}
.solo-price-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; padding: 20px; background: #fff; border: 1px solid #eee; border-radius: 8px; margin-top: 10px;
  .solo-price-item { display: flex; justify-content: space-between; padding: 12px; border-bottom: 1px solid #f5f5f5; .label { color: #555; } .value { font-weight: bold; color: #333; } }
}

/* --- 关于我们样式 (保持优化版) --- */
.about-intro-group { margin-bottom: 50px; text-align: left; h3 { font-size: 2rem; color: #333; margin-bottom: 20px; } .intro-description { font-size: 1.1rem; color: #666; line-height: 1.8; } }
.business-showcase { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-bottom: 60px; }
.bus-card { display: flex; background: #fff; border: 1px solid #f0f0f0; border-radius: 12px; overflow: hidden; transition: all 0.3s ease; &:hover { border-color: #409EFF; transform: translateY(-3px); } }
.bus-img-box { width: 35%; flex-shrink: 0; background: #f8f9fb; }
.aspect-ratio-wrapper { position: relative; width: 100%; height: 0; padding-bottom: 100%; .img-placeholder { position: absolute; top:0; left:0; width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f0f2f5; color:#ccc; font-size:12px; } .actual-img { position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; } }
.bus-info { padding: 25px; text-align: left; .bus-tag { font-size: 12px; color: #409EFF; background: #ecf5ff; padding: 2px 8px; border-radius: 4px; margin-bottom: 10px; display: inline-block; } h4 { font-size: 1.25rem; margin-bottom: 12px; } .bus-points { list-style:none; padding:0; li { font-size:0.9rem; color:#666; margin-bottom:6px; padding-left:15px; position:relative; &::before{ content:"•"; color:#409EFF; position:absolute; left:0; } } } }
.advantage-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; margin-bottom: 70px; }
.adv-card { padding: 30px 20px; border: 1px solid #eee; border-radius: 12px; text-align: center; transition: all 0.3s; &:hover { border-color:#409EFF; background:#fcfdff; } .adv-icon { font-size: 2.2rem; margin-bottom: 15px; } h4 { margin-bottom: 10px; font-size: 1.1rem; } p { font-size: 0.85rem; color: #888; line-height: 1.5; } }
.vision-banner-white { display: flex; background: #fff; border: 1px solid #eef2f7; border-radius: 16px; padding: 50px 40px; color: #333; justify-content: space-around; align-items: center; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
.vision-box { text-align: center; .v-label { color: #409EFF; font-weight: 600; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 12px; display: block; } p { font-size: 1.2rem; font-weight: 500; color: #222; } }
.vision-divider { width: 1px; height: 60px; background: #eef2f7; }

/* 咨询弹窗 */
.qr-container { text-align: center; .qr-img { width: 100%; border-radius: 8px; margin-bottom: 15px; } p { color: #666; font-size: 0.9rem; } }

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .banner-bg { min-height: 400px; }
  .banner-overlay { padding: 30px 20px; }
  .banner-title { font-size: 2rem; }
  .banner-subtitle { font-size: 1rem; }
  .section-block { padding: 50px 20px; }
  .pricing-grid, .card-grid, .business-showcase, .advantage-grid, .solo-price-grid { grid-template-columns: 1fr; }
  .pricing-card.is-featured { transform: scale(1); }
  .bus-card { flex-direction: column; }
  .bus-img-box { width: 100%; }
  .aspect-ratio-wrapper { padding-bottom: 56.25%; }
  .vision-banner-white { flex-direction: column; gap: 40px; }
  .vision-divider { width: 60%; height: 1px; }
  .text-paragraph { font-size: 1rem; text-align: left; }
}
</style>