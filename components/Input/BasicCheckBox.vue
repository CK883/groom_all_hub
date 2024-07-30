<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
interface CheckboxOption {
  _id?: string
  name?: string
  value?: string
}

interface Props {
  modelValue: boolean[]
  name: string
  options: CheckboxOption[]
  rules?: z.ZodType<any> | object | Function | string
  classInput?: string
  classLabel?: string
  classError?: string
  classDiv?: string,
  disabled: boolean,
  page: number,
  limit: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  rules: () => z.array(z.boolean()).refine((arr) => arr.some(Boolean), {
    message: 'กรุณาเลือกอย่างน้อย 1 ตัวเลือก',
  }),
  classInput: '',
  classLabel: '',
  classError: '',
  disabled: false,
  classDiv: '',
  page: 1,
  limit: 10
})

const emit = defineEmits(['update:modelValue'])

const schema = computed(() => {
  if (!props.rules) return {}
  if (props.rules instanceof z.ZodType) {
    return toTypedSchema(props.rules)
  }
  return props.rules
})

const { value, errorMessage, errors, validate } = useField(props.name, schema, {
  initialValue: props.modelValue,
})

const updateCheckbox = async (index: number, checked: boolean) => {
  const globalIndex = (props.page - 1) * props.limit + index
  const newValue = [...value.value]
  newValue[globalIndex] = checked
  value.value = newValue
  emit('update:modelValue', newValue)
  await validate()
}

watch(() => props.modelValue, (newValue) => {
  if (JSON.stringify(newValue) !== JSON.stringify(value.value)) {
    value.value = newValue
  }
}, { deep: true })
</script>

<template>
  <div :class="[classDiv]">
    <div v-for="(option, index) in options" :key="option.value">
      <input type="checkbox" :id="`${name}-${index}`" :checked="value[(page - 1) * limit + index]"
        class="w-4 h-4 mx-2 text-main-primary mb-1 bg-base-white border-gray-300 rounded focus:ring-main-primary focus:ring-2"
        @change="updateCheckbox(index, $event.target.checked)" :class="[
          classInput,
          errors.length ? '!border-red-500' : ''
        ]">
      <label :for="`${name}-${index}`" class="mx-1" :class="classLabel, [errorMessage ? 'text-main-danger' : '']">{{
        option.name }}</label>
    </div>
    <span v-if="errorMessage" :class="['text-main-danger', classError]">{{ errorMessage }}</span>
  </div>
</template>