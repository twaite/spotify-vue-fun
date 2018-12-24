<template>
  <s-row class="w-screen h-screen" xAlign="center">
    <s-col yAlign="center" xAlign="center">
      <h1 class="mb-4">Login to spotify</h1>
      <s-button class="w-48" @click="login">Login</s-button>
    </s-col>
  </s-row>
</template>

<script>
import { redirectForLogin } from '@/services/auth';

const LoginPage = {
  name: 'LoginPage',
  methods: {
    login() {
      redirectForLogin();
    }
  }
}

export default LoginPage;
</script>
