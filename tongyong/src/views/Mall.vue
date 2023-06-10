<template>
  <div>
    <el-button type="primary" class="anniu" @click="jiayi">+</el-button>
    <el-form :inline="true" :model="form" ref="form" >
      <div v-for="(item, index) in form.arr" :key="index">
        <el-form-item label="姓名">
          <el-input v-model="item.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="item.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-button type="primary" @click.prevent="removeDomain(index)"
          >删除</el-button
        >
      </div>
    </el-form>
    <el-button type="primary" @click="tijao">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        arr: [
          {
            name: "",
            age: "",
          },
        ],
      },
    };
  },
  methods: {
    // 增加
    jiayi() {
      this.form.arr.push({
        name: "",
        age: "",
      });
    },
    // 提交数据修改为josn
    tijao() {
      this.form.arr.forEach((item)=>{
        if (item.name != "" && item.age != "") {
        const str = JSON.stringify(this.form);
        console.log(str);
      }
      })

    },
    // 删除
    removeDomain(item) {
      if (item !== 0) {
        this.form.arr.splice(item, 1);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.anniu {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border: none;
  color: #fff;
  font-size: 24px;
}
.annius {
  margin-left: 15px;
}
</style>