<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  icon: {
    type: String,
    default: "",
  },
  classLabel: {
    type: String,
    default: "",
  },
  classIcon: {
    type: String,
    default: "",
  },
  iconRight: {
    type: String,
    default: "",
  },
  classIconRight: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
});

const buttonColor = computed(() => {
  switch (props.color) {
    case 'primary-fill':
      return 'text-base-white bg-main-primary hover:bg-main-primary/80';
    case 'primary':
      return 'bg-base-white text-main-primary border border-base-gray-lighten hover:bg-base-gray-lighten';
    case 'base-fill':
      return 'text-main-primary bg-main-base hover:bg-main-primary/10';
    case 'base-border':
      return 'text-main-primary bg-main-base border border-main-soft';
    case 'dark-fill':
      return 'text-base-white bg-base-black ';
    case 'success':
      return 'text-base-white bg-main-success ';
    case 'no-border':
      return '!border-none';
    case 'disabled':
      return 'bg-base-gray-lighten text-base-gray-darken';
    case 'yellow-fill':
      return 'bg-main-secondary text-base-white';
    case 'normal':
      return 'border border-base-gray-lighten bg-base-white hover:bg-base-gray-lighten';
    default:
      return '';
  }
});
</script>

<template>
  <button :id="id" :disabled="disabled" :type="type"
    class="px-3 py-1.5 rounded-lg flex items-center justify-center disabled:text-base-gray-darken disabled:!bg-base-gray-lighten"
    :class="[buttonColor, { 'space-x-1': label && icon || label && iconRight }]">
    <i :class="[icon, classIcon, label ? 'text-[11px] pt-1' : '' , 'flex items-center justify-center py-1.5']"></i>
    <span :class="classLabel">{{ label }}</span>
    <i v-if="iconRight" :class="[iconRight, classIconRight, 'flex items-center justify-center py-1.5 ']"></i>
  </button>
</template>

<style scoped></style>