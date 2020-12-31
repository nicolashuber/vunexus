<template>
  <button type="button" class="btn" :class="btnClasses">
    Button
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: 'primary'
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClasses () {
      return [
        `is-${this.size}`,
        `is-${this.color}`,
        { 'is-block': this.block },
        { 'is-disabled': this.disabled }
      ]
    }
  }
}
</script>

<style lang="scss">
  .btn {
    display: inline-block;
    padding: .5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    vertical-align: top;
    border: 1px solid transparent;
    border-radius: $border-radius;

    // Colors
    @each $name, $schema in $color-schema {
      &.is-#{$name} {
        color: map-get($schema, 'color');
        background: map-get($schema, 'background');

        &:hover {
          background: darken(map-get($schema, 'background'), 10%);
        }

        &:focus {
          background: darken(map-get($schema, 'background'), 25%);
        }

        &:active {
          background: darken(map-get($schema, 'background'), 25%);
          border-color: darken(map-get($schema, 'background'), 40%);
        }
      }
    }

    // Sizes
    @each $name, $size in $sizes {
      &.is-#{$name} {
        font-size: #{$size}rem;
      }
    }

    // Modifiers
    &.is-disabled {
      opacity: .4;
      cursor: not-allowed;
    }

    &.is-block {
      width: 100%;
      display: block;
    }
  }
</style>
