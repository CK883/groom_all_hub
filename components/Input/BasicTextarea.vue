<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  rules: {
    type: [Object, Function, String],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 3
  },
  resizeable: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const inputValue = ref(props.modelValue);
const shouldValidate = ref(false);

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue;
});

const computedRules = computed(() => {
  if (!props.rules) return {}
  if (typeof props.rules === 'string' || typeof props.rules === 'function') {
    return { validate: props.rules };
  }
  return { ...props.rules };
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event:any) => {
  const value = event.target.value;
  inputValue.value = value;
  shouldValidate.value = true;
  emit('update:modelValue', value);
};
</script>

<template>
  <div>
    <VeeField :name="name" :disabled='disabled' :rules="computedRules" v-model="inputValue" v-slot="{ field, errors, errorMessage }"
      :validateOnInput="shouldValidate">
      <textarea v-bind="field" :rows='rows' :value="inputValue" @input="handleInput" :class="[
        'w-full border p-2 rounded-xl',
        errors.length ? 'border-red-500' : 'border-base-gray-lighten',
        resizeable ? '' : 'textarea-not-resize'
      ]" :id="id" :placeholder="placeholder"></textarea>
      <span v-if="errorMessage" class="text-main-danger">{{ errorMessage }}</span>
    </VeeField>
  </div>
</template>

<style>
.textarea-not-resize {
  resize: none;
}
</style>