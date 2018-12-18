<template>
  <div class="row"
    :class="[growClass, wrapClass, xAlignClass, yAlignClass]"
    v-bind="$attrs"
    v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
  const alignOptions = ['start', 'center', 'end', 'around'];
  const alignValidation = val => {
    return alignOptions.indexOf(val) !== -1;
  }

  const SRow = {
    inheritAttrs: true,
    props: {
      grow: {
        type: Boolean,
        default: false,
      },
      wrap: {
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
      wrapClass() {
        if (this.wrap) return 'flex-wrap';
      },
      xAlignClass() {
        if (this.xAlign) return `justify-${this.xAlign}`;
      },
      yAlignClass() {
        if (this.yAlign) return `items-${this.yAlign}`;
      }
    }
  };

  export default SRow;
</script>

<style lang="postcss" scoped>
.row {
  @apply flex;
}
</style>
