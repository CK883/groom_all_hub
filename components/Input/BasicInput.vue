<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useField } from 'vee-validate'
interface Props {
  numberOnly?: boolean
  modelValue: string | number
  name: string
  rules?: object | Function | string
  type?: string
  id: string
  placeholder?: string
  max?: string
  min?: string
  classInput?: {
    type: string
    default: ''
  },
  classSpan?: {
    type: string
    default: ''
  }
  maxlength?: string
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  rules: '',
  disabled: false
})

const emit = defineEmits(['update:modelValue'])
const computedRules = computed(() => {
  let rules: any = {};

  if (props.rules) {
    if (typeof props.rules === 'string' || typeof props.rules === 'function') {
      rules = { validate: props.rules };
    } else {
      rules = { ...props.rules };
    }
  }

  // เพิ่มกฎห้ามมีช่องว่าง
  const noSpaceRule = (value: string) => {
    if (!value || typeof value !== 'string') return
    return !value.includes(' ') || 'ห้ามมีช่องว่างในข้อมูล';
  };

  if (typeof rules.validate === 'function') {
    const originalValidate = rules.validate;
    rules.validate = (value: string) => {
      const noSpaceResult = noSpaceRule(value);
      if (noSpaceResult !== true) {
        return noSpaceResult;
      }
      return originalValidate(value);
    };
  } else {
    rules.validate = noSpaceRule;
  }

  return rules;
});
const { value, errorMessage, errors, validate } = useField(props.name, computedRules, {
  initialValue: props.modelValue,
})

const handleInput = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const newValue = target.value;

  // ตัดช่องว่างเฉพาะตอนเริ่มต้นและสิ้นสุดของข้อความ
  const trimmedValue = newValue.replace(/^\s+|/g, '');

  value.value = trimmedValue;
  emit('update:modelValue', trimmedValue);
  await validate();
}
const handleKeyPress = (event: KeyboardEvent) => {
  if (!props.numberOnly) return
  const charCode = event.which ? event.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault()
  }
}

// Sync the external modelValue with the internal value
watch(() => props.modelValue, (newValue) => {
  if (newValue !== value.value) {
    value.value = newValue
  }
})
</script>

<template>
  <div class="">
    <input v-model="value" :disabled='disabled' @keypress="handleKeyPress" @input="handleInput" class=" w-full border p-2 rounded-lg border-base-gray-lighten
           transition duration-150 ease-in-out" :max="max" :min="min" :maxlength="maxlength"
      :class="[classInput, errors.length ? '!border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500' : classInput]"
      :type="type" :id="id" :placeholder="placeholder">
    <span v-if="errorMessage" class="text-main-danger" :class="classSpan">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.focus-input:focus {
  border-color: #dddd !important;
  /* เปลี่ยนเป็นสีที่คุณต้องการ */
  outline: none;
  /* ลบ outline ที่เบราว์เซอร์สร้างให้โดยอัตโนมัติ */
}
</style>