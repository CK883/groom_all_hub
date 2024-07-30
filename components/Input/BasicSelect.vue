<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useField } from 'vee-validate'

interface Option {
  value: string
  label: string
}

interface Props {
  modelValue?: string
  name: string
  rules?: object | Function | string
  id: string
  options: Option[]
  disabled: boolean
  keyValue: string
  keyLabel: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  keyValue: 'value',
  keyLabel: 'label'
})

const emit = defineEmits(['update:modelValue','change-value'])

const computedRules = computed(() => {
  if (!props.rules) return {}
  if (typeof props.rules === 'string' || typeof props.rules === 'function') {
    return { validate: props.rules }
  }
  return { ...props.rules }
})

const { value, errorMessage, errors, validate } = useField(props.name, computedRules, {
  initialValue: props.modelValue,
})

const handleChange = async (event: Event) => {
  const target = event.target as HTMLSelectElement
  value.value = target.value
  emit('update:modelValue', target.value)
  emit('change-value')
  await validate()
}

// Sync the external modelValue with the internal value
watch(() => props.modelValue, (newValue) => {
  if (newValue !== value.value) {
    value.value = newValue
  }
})
</script>

<template>
  <div>
    <select v-model="value" :disabled='disabled' @change="handleChange" :class="[
      'w-full border rounded-lg border-base-gray-lighten pb-1 ',
      errors.length ? 'border-red-500' : 'border-base-gray-lighten'
    ]" :id="id">
      <option value="" disabled>เลือก...</option>
      <option v-for="option in options" :key="option[keyValue]" :value="option[keyValue]">
        {{ option[keyLabel] }}
      </option>
    </select>
    <span v-if="errorMessage" class="text-main-danger">{{ errorMessage }}</span>
  </div>
</template>