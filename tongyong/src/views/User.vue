<template>
  <div class="manage">
    <!-- :before-close="handleClose"关闭弹窗form数据清空 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- 用户的表单 -->
      <el-form
        ref="form"
        :inline="true"
        :rules="rules"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="dialogVisible = true">
        +新增
      </el-button>
      <!-- tab表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import { addProduct } from "@/api/request";
export default {
  data() {
    return {
      dialogVisible: false,
      // data:[
      //   {
      //     model:'name',
      //     label:'姓名',
      //     type:'index'
      //   },
      //   {
      //     model:'age',
      //     label:'年龄',
      //     type:'input'
      //   },
      //   {
      //     model:'sex',
      //     label:'性别',
      //     type:'select',
      //     opts:[
      //       {
      //         label:'男',
      //         value:'1'
      //       },
      //       {
      //         label:'女',
      //         value:'0'
      //       }
      //     ]
      //   },
      //   {
      //     model:'birth',
      //     label:'出生日期',
      //     type:'date'
      //   },
      //   {
      //     model:'addr',
      //     label:'地址',
      //     type:'input'
      //   },
      // ],
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
          },
        ],
        age: [
          {
            required: true,
            message: "请输入年龄",
          },
        ],
        sex: [
          {
            required: true,
            message: "请选择性别",
          },
        ],
        birth: [
          {
            required: true,
            message: "请选择出生日期",
          },
        ],
        addr: [
          {
            required: true,
            message: "请输入地址",
          },
        ],
      },
      tableData:[
        
      ]
    };
  },
  methods: {
    // 提交用户表单
    submit() {
      this.$refs.form.validate((valid) => {
        // console.log(valid);
        // if (valid) {
        //   // 后续对表单数据的处理
        //   console.log(this.form);

        //   // 清空表单
        //   this.$refs.form.resetFields();
        //   // 关闭弹窗
        //   this.dialogVisible = false;
        // }
      });
    },
    // 点击关闭弹窗清理数据
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    cancel() {
      this.handleClose();
    },
    // 获取用户数据
  },
};
</script>

<style>
</style>