<template>
  <div>
    <baseLayout title="典型表单" subTitle="包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。">
      <e-form ref="typicalForm" :model="typicalForm" label-width="160px">
        <e-form-item label="输入框">
          <e-input v-model="typicalForm.name"></e-input>
        </e-form-item>
        <e-form-item label="选择框">
          <e-select v-model="typicalForm.region" placeholder="请选择活动区域">
            <e-option label="区域一" value="shanghai"></e-option>
            <e-option label="区域二" value="beijing"></e-option>
          </e-select>
        </e-form-item>
        <e-form-item label="复选框">
          <e-checkbox v-model="typicalForm.delivery">备选项1</e-checkbox>
        </e-form-item>
        <e-form-item label="性别">
          <e-radio-group v-model="typicalForm.sex">
            <e-radio label="1" checked>备选项</e-radio>
            <e-radio label="2">备选项1</e-radio>
          </e-radio-group>
        </e-form-item>
        <e-form-item label="复选框组">
          <e-checkbox-group v-model="typicalForm.type">
            <e-checkbox label="复选框 A"></e-checkbox>
            <e-checkbox label="复选框 B"></e-checkbox>
            <e-checkbox label="复选框 C"></e-checkbox>
          </e-checkbox-group>
        </e-form-item>
        <e-form-item label="文本域">
          <e-input type="textarea" v-model="typicalForm.desc" :rows="5" />
        </e-form-item>
        <e-form-item>
          <e-button type="primary">立即创建</e-button>
          <e-button>取消</e-button>
        </e-form-item>
      </e-form>
    </baseLayout>
    <baseLayout title="行内表单" subTitle="当垂直方向空间受限且表单较简单时，可以在一行内放置表单。">
      <e-form ref="formInline" :model="formInline" :inline="true">
        <e-form-item label="输入框">
          <e-input v-model="formInline.name"></e-input>
        </e-form-item>
        <e-form-item label="选择框">
          <e-select v-model="formInline.region" placeholder="请选择活动区域">
            <e-option label="区域一" value="shanghai"></e-option>
            <e-option label="区域二" value="beijing"></e-option>
          </e-select>
        </e-form-item>
        <e-form-item>
          <e-button type="primary">查询</e-button>
          <e-button>取消</e-button>
        </e-form-item>
      </e-form>
    </baseLayout>
    <baseLayout title="对齐方式" subTitle="根据具体目标和制约因素，选择最佳的标签对齐方式。"></baseLayout>
    <baseLayout title="表单验证" subTitle="在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。">
      <e-form ref="ruleForm" :model="typicalForm" :rules="rules" label-width="160px">
        <e-form-item label="输入框" prop="name">
          <e-input v-model="typicalForm.name"></e-input>
        </e-form-item>
        <e-form-item label="选择框" prop="region">
          <e-select v-model="typicalForm.region" placeholder="请选择活动区域">
            <e-option label="区域一" value="shanghai"></e-option>
            <e-option label="区域二" value="beijing"></e-option>
          </e-select>
        </e-form-item>
        <e-form-item label="复选框" prop="delivery">
          <e-checkbox v-model="typicalForm.delivery">备选项1</e-checkbox>
        </e-form-item>
        <e-form-item label="性别" prop="sex">
          <e-radio-group v-model="typicalForm.sex">
            <e-radio label="1" checked>备选项</e-radio>
            <e-radio label="2">备选项1</e-radio>
          </e-radio-group>
        </e-form-item>
        <e-form-item label="复选框组" prop="type">
          <e-checkbox-group v-model="typicalForm.type">
            <e-checkbox label="复选框 A"></e-checkbox>
            <e-checkbox label="复选框 B"></e-checkbox>
            <e-checkbox label="复选框 C"></e-checkbox>
          </e-checkbox-group>
        </e-form-item>
        <e-form-item label="文本域" prop="desc">
          <e-input type="textarea" v-model="typicalForm.desc" :rows="5" />
        </e-form-item>
        <e-form-item>
          <e-button type="primary" @click="submitForm('ruleForm')">立即创建</e-button>
          <e-button @click="resetForm('ruleForm')">重置</e-button>
        </e-form-item>
      </e-form>
    </baseLayout>
    <baseLayout title="自定义校验规则" subTitle="这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。"></baseLayout>
    <baseLayout title="动态增减表单项"></baseLayout>
    <baseLayout title="数字类型验证"></baseLayout>
    <baseLayout
      title="表单内组件尺寸控制"
      subTitle="通过设置 Form 上的 size 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。"
    ></baseLayout>
  </div>
</template>

<script>
export default {
  name: "forms",
  data() {
    return {
      typicalForm: {
        name: "",
        region: "",
        delivery: false,
        sex: "1",
        type: ["复选框 A"],
        resource: "",
        desc: "",
      },
      formInline: {
        name: "",
        region: "",
      },
      rules: {
        name: [
          { required: true, message: "必填项", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [{ required: true, message: "必填项", trigger: "change" }],
        type: [
          {
            type: "array",
            required: true,
            message: "必填项",
            trigger: "change",
          },
        ],
        desc: [{ required: true, message: "必填项", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="stylus" scoped></style>