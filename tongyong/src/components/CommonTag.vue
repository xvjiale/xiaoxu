<template>
  <div class="tabs">
    <!-- :closable="item.name !=='home'"首页没有取消 
    :effect="$route.name===item.name ? 'dark' : 'plain'" 显示当前页面tag颜色
    @click="changeMenu(item)" 点击tag跳转的功能
    @close="handleClose(item)" 删除
    -->
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      :closable="item.name !== 'home'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    // 点击tag跳转的功能
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    // 点击tag删除的功能
    ...mapMutations(["closeTag"]),
    handleClose(item, index) {
      // 将调用store中的mutation
      this.closeTag(item);
      const length = this.tags.length;
      // 删除之后的跳转逻辑
      if (item.name !== this.$route.name) {
        return;
      }
    //   表示的删除的最后一项
      if (index === length) {
        this.$router.push({
            name:this.tags[index-1].name
        });
      }else{
            this.$router.push({
            name:this.tags[index].name
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>