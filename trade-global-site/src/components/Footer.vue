<template>
  <el-footer class="footer-container">
    <div class="footer-wrapper">
      <!-- Logo 区域 -->
      

      <!-- 链接区域 - 三列，每列4个项目 -->
      <div class="footer-links">
        <!-- 第一列 -->
        <div class="link-column">
          <h4>核心产品</h4>
          <ul>
            <li><a href="#">AI数据链主文</a></li>
            <li><a href="#">AI深度协作</a></li>
            <li><a href="#">AI数据通信节目</a></li>
          </ul>
        </div>
        
        <!-- 第二列 -->
        <div class="link-column">
          <h4>网站搭建</h4>
          <ul>
            <li><a href="#">数据后台</a></li>
            <li><a href="#">实时监控</a></li>
            <li><a href="#">网络安全</a></li>
          </ul>
        </div>
        
        <!-- 第三列 -->
        <div class="link-column">
          <h4>关于我们</h4>
          <ul>
            <li><a href="#">发展历程</a></li>
            <li><a href="#">团队成员</a></li>
            <li><a href="#">联系方式</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 版权信息 -->
    <div class="footer-copyright">
      <hr />
      <p>©2023 Garnet LLC. All rights reserved. Privacy Policy Terms & License.</p>
    </div>
  </el-footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer-container {
  background: #1a1a2e !important;
  color: #fff;
  padding: 40px 0 20px;
  border: none !important;
  width: 100%;
  height: auto;
}

.footer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  
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

.footer-links {
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  justify-content: center;
}

.link-column {
  min-width: 150px;
  
  h4 {
    font-size: 16px;
    margin-bottom: 16px;
    color: #fff;
    font-weight: 500;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin: 8px 0;
      
      a {
        color: #a0a0a0;
        text-decoration: none;
        font-size: 14px;
        transition: color 0.3s;
        
        &:hover {
          color: #409eff;
        }
      }
    }
  }
}

.footer-copyright {
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
  text-align: center;
  
  hr {
    border: none;
    border-top: 1px solid #333;
    margin-bottom: 16px;
  }
  
  p {
    font-size: 12px;
    color: #666;
  }
}

// 响应式适配
@media (max-width: 768px) {
  .footer-wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-links {
    gap: 40px;
    justify-content: center;
  }
}
</style>