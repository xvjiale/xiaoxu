<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <Common-aside></Common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <Common-header></Common-header>
        </el-header>
        <!-- tag切换 -->
        <Common-tag></Common-tag>
        <el-main>
          <!-- 路由出口 
          渲染页面 -->
            <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside.vue"
import CommonHeader from "@/components/CommonHeader.vue"
import CommonTag from "@/components/CommonTag.vue"
export default {
    components:{
        CommonAside,
        CommonHeader,
        CommonTag
    }
};
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>