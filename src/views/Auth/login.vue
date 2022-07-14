<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">电商管理系统</div>
      <a-form
        :model="param"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        class="ms-content"
      >
        <a-form-item name="username">
          <a-input v-model:value="param.username" placeholder="username">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            placeholder="password"
            v-model:value="param.password"
          >
            <template #prefix>
              <lock-outlined />
            </template>
          </a-input-password>
        </a-form-item>
        <div class="login-btn">
          <a-button type="primary" html-type="submit">登录</a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { message as AntDMessage } from "ant-design-vue";
import { useAuthStore } from "@/store/authStore";
const router = useRouter();
const AuthStroe = useAuthStore();
const param = reactive({
  username: "superAdmin",
  password: "123456",
});
const onFinish = (values: any) => {
  AuthStroe.login(values);
  // console.log("Success:", values);
  // AntDMessage.success("登录成功");
  // localStorage.setItem("ms_username", param.username);
  // router.push("/");
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
  AntDMessage.error("登录失败");
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/img/login-bg.jpg);
  background-size: 100% 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
