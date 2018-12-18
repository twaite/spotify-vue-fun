<template>
  <s-row class="w-screen h-screen" xAlign="center">
    <s-col yAlign="center" xAlign="center">
      <h1 class="mb-4">Login to spotify</h1>
      <s-button class="w-48" @click="login">Login</s-button>
    </s-col>
  </s-row>
</template>

<script>
const LoginPage = {
  name: 'LoginPage',
  methods: {
    login() {
      const authUrl = 'https://accounts.spotify.com/authorize';
      const clientId = 'dbc7aa206bf44549a9ab788d013f4682';
      const redirectUri = encodeURIComponent('http://localhost:8080/#/?');
      const url = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
      location = url;
    }
  }
}

export default LoginPage;
</script>
