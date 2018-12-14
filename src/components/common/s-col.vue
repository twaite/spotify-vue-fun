<template>
  <div class="col" 
    :class="[growClass, xAlignClass, yAlignClass]"
    v-bind="$attrs"
    v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
  const alignOptions = ['start', 'center', 'end'];
  const alignValidation = val => {
    return alignOptions.indexOf(val) !== -1;
  }

  const SCol = {
    inheritAttrs: true,
    props: {
      grow: {
        type: Boolean,
        default: false,
      },
      xAlign: {
        type: String,
        validator: alignValidation
      },
      yAlign: {
        type: String,
        validator: alignValidation
      }
    },
    computed: {
      growClass() {
        if (this.grow) return 'flex-grow';
      },
      xAlignClass() {
        if (this.xAlign) return `items-${this.xAlign}`;
      },
      yAlignClass() {
        if (this.yAlign) return `justify-${this.yAlign}`;
      }
    }
  };

  export default SCol;
</script>

<style lang="postcss" scoped>
.col {
  @apply flex flex-col;
}
</style>
