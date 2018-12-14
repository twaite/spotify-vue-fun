<template>
  <button class="btn primary" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
  const SButton = {
    inheritAttrs: true,
  };

  export default SButton;
</script>

<style lang="postcss" scoped>
.btn {
  @apply rounded rounded-full px-4 py-2;
}

.primary {
  @apply text-white bg-purple-dark;
}
</style>
