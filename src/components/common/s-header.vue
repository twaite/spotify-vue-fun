<template>
  <s-row class="header" yAlign="center">
    <h3 class="flex-1">Spotify</h3>
    <s-button @click="onClickedLogout">Logout</s-button>
  </s-row>
</template>

<script>
import { logout } from '@/services/auth';

const SHeader = {
  name: 'SHeader',
  methods: {
    onClickedLogout() {
      logout();
      this.$router.push('/login');
    }
  }
}

export default SHeader;
</script>

<style lang="postcss" scoped>
  .header {
    @apply bg-purple-darkest p-3 shadow-md;
  }
</style>
