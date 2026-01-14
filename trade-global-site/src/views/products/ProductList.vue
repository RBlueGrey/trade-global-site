<template>
  <div class="product-page-wrapper">
    <div class="product-page container">
      <div class="mobile-filter-bar hidden-md-and-up">
        <el-button type="primary" :icon="Filter" @click="isDrawerOpen = true">
          筛选分类 {{ currentCategoryName ? `: ${currentCategoryName}` : '' }}
        </el-button>
        <el-button v-if="queryParams.categoryId || queryParams.keyword" @click="showAll">
          显示全部
        </el-button>
      </div>

      <el-row :gutter="20" class="main-row">
        <el-col :md="6" class="hidden-sm-and-down">
          <div class="filter-sidebar">
            <div class="sidebar-header">
              <h3>产品分类</h3>
              <el-button v-if="queryParams.categoryId" type="primary" link @click="showAll">显示全部</el-button>
            </div>
            <el-tree 
              ref="categoryTree"
              :data="categoryData" 
              node-key="id"
              highlight-current
              @node-click="handleCategoryClick" 
              v-loading="catLoading"
            />
          </div>
        </el-col>

        <el-col :xs="24" :md="18">
          <div class="list-header">
            <div class="title-area">
              <h2>{{ currentCategoryName || '所有产品' }}</h2>
              <span class="result-count" v-if="total > 0">共 {{ total }} 款</span>
            </div>
            <div class="header-tools hidden-sm-and-down">
              <el-input 
                v-model="queryParams.keyword" 
                placeholder="搜索名称或型号..." 
                clearable 
                @keyup.enter="handleFilter"
                @clear="handleFilter"
                style="width: 280px"
              >
                <template #append>
                  <el-button :icon="Search" @click="handleFilter" />
                </template>
              </el-input>
            </div>
          </div>

          <div class="grid-container" v-loading="loading">
            <el-row :gutter="15" v-if="productList.length > 0">
              <el-col 
                v-for="item in productList" 
                :key="item.id" 
                :xs="12" :sm="8" :md="6" 
                class="product-col"
              >
                <el-card :body-style="{ padding: '0px' }" class="product-card" @click="toDetail(item.id)">
                  <div class="image-wrapper">
                    <el-image :src="item.mainImage" fit="cover" class="product-img" lazy>
                      <template #error>
                        <div class="image-placeholder">
                          <el-icon :size="30" color="#ddd"><Picture /></el-icon>
                          <span>No Image</span>
                        </div>
                      </template>
                    </el-image>
                    <div class="model-tag">{{ item.modelNumber }}</div>
                  </div>
                  <div class="info">
                    <span class="name">{{ item.name }}</span>
                    <div class="bottom">
                      <span class="moq">MOQ: {{ item.moq }}</span>
                      <el-button link type="primary">详情</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <el-empty v-else-if="!loading" description="未找到匹配产品" />
          </div>

          <div class="pagination-wrapper" v-if="total > 0">
            <el-pagination 
              background
              layout="prev, pager, next" 
              :total="total" 
              :page-size="queryParams.pageSize"
              v-model:current-page="queryParams.pageNum"
              @current-change="fetchProducts"
            />
          </div>
        </el-col>
      </el-row>

      <el-drawer v-model="isDrawerOpen" title="选择分类" direction="bottom" size="60%">
        <div style="padding: 0 20px 20px">
          <el-button @click="showAll" plain style="width: 100%; margin-bottom: 20px">全部产品</el-button>
          <el-tree :data="categoryData" node-key="id" @node-click="handleCategoryClick" />
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { Filter, Picture, Search } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
// 这里根据你的实际 API 路径修改
import { getCategories, getProducts } from '@/api/product'; 

const router = useRouter();
const categoryTree = ref();
const isDrawerOpen = ref(false);
const loading = ref(false);
const catLoading = ref(false);

// 状态数据
const categoryData = ref([]);
const productList = ref([]);
const total = ref(0);
const currentCategoryName = ref('');

const queryParams = reactive({
  categoryId: '',
  keyword: '',
  pageNum: 1,
  pageSize: 12
});

// 1. 获取分类
const fetchCategories = async () => {
  catLoading.value = true;
  try {
    const data: any = await getCategories();
    categoryData.value = data;
  } catch (err) {
    console.error('Fetch categories failed', err);
  } finally {
    catLoading.value = false;
  }
};

// 2. 获取产品
const fetchProducts = async () => {
  loading.value = true;
  try {
    const data: any = await getProducts(queryParams);
    productList.value = data.list;
    total.value = data.total;
  } catch (err) {
    console.error('Fetch products failed', err);
  } finally {
    // 延迟一小会儿关闭 loading，防止闪烁
    setTimeout(() => { loading.value = false; }, 300);
  }
};

// 3. 交互逻辑
const handleCategoryClick = (data: any) => {
  queryParams.categoryId = data.id;
  currentCategoryName.value = data.label;
  queryParams.pageNum = 1;
  isDrawerOpen.value = false;
  fetchProducts();
};

const showAll = () => {
  queryParams.categoryId = '';
  currentCategoryName.value = '';
  queryParams.keyword = '';
  queryParams.pageNum = 1;
  isDrawerOpen.value = false;
  if (categoryTree.value) categoryTree.value.setCurrentKey(null);
  fetchProducts();
};

const handleFilter = () => {
  queryParams.pageNum = 1;
  fetchProducts();
};

const toDetail = (id: number) => {
  router.push(`/products/${id}`);
};

onMounted(() => {
  fetchCategories();
  fetchProducts();
});
</script>

<style scoped lang="scss">
/* 布局核心：防止溢出和抖动 */
.product-page-wrapper {
  width: 100%;
  overflow-x: hidden;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.product-page {
  padding: 20px 15px;
  box-sizing: border-box;
}

.main-row {
  margin-left: -7.5px !important;
  margin-right: -7.5px !important;
}

.grid-container {
  min-height: 450px; /* 解决抖动关键 */
  position: relative;
}

.filter-sidebar {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h3 { margin: 0; font-size: 16px; border-left: 4px solid #409eff; padding-left: 10px; }
  }
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 { margin: 0; font-size: 22px; color: #333; }
  .result-count { font-size: 13px; color: #999; margin-left: 10px; }
}

.product-col {
  padding: 0 7.5px 20px !important;
}

.product-card {
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    .name { color: #409eff; }
  }
  .image-wrapper {
    aspect-ratio: 1 / 1;
    background: #f0f2f5;
    position: relative;
    .product-img { width: 100%; height: 100%; }
    .image-placeholder { 
      height: 100%; display: flex; flex-direction: column; 
      align-items: center; justify-content: center; color: #bbb;
    }
    .model-tag {
      position: absolute; top: 10px; left: 10px;
      background: #004a99; color: #fff; padding: 2px 6px;
      font-size: 11px; border-radius: 4px; z-index: 2;
    }
  }
  .info {
    padding: 12px;
    .name {
      font-size: 14px; font-weight: bold; color: #333;
      height: 40px; display: -webkit-box; -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
    }
    .bottom {
      margin-top: 10px; display: flex; 
      justify-content: space-between; align-items: center;
      .moq { font-size: 11px; color: #999; }
    }
  }
}

.mobile-filter-bar { display: flex; justify-content: space-between; margin-bottom: 15px; }
.pagination-wrapper { display: flex; justify-content: center; padding: 30px 0; }
</style>