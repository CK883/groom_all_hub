<script lang="ts" setup>
import common from '~/common/common';
import { Dialog, DialogPanel, DialogTitle, TransitionRoot } from '@headlessui/vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Modal",
  },
  size: {
    type: String,
    default: "md",
  },
  noneHeader: {
    type: Boolean,
    default: false,
  },
  closeBlackDrops: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(["closeModal"]);
const modalSize = ref({
  sm: "w-1/4",
  ssm: "w-1/3",
  md: "w-1/2",
  lg: "w-3/4",
  xl: "w-4/5",
} as Record<string, string>);

function closeBlackDrops() {
  if (props.closeBlackDrops)
    emit('closeModal');
}
</script>
<template>

  <TransitionRoot appear :show='isVisible' as='template'>
    <Dialog as='div' @close="closeBlackDrops" class="relative z-50">
      <div class='fixed inset-0 bg-black/25' />
      <div class='fixed inset-0 overflow-y-auto'>
        <div class='flex min-h-full items-center justify-center p-4 text-center'>
          <DialogPanel :class="[modalSize[size], props.class]"
            class=' transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
            <DialogTitle v-if="!noneHeader" as='h3' class='text-lg font-medium leading-6 text-gray-900'>
              <div id='header' class='flex justify-between items-center'>
                <span class="font-bold text-lg">{{ title }}</span>
                <button-icon-label id="click-close-modal" icon="bi-x-lg" @click="emit('closeModal')"
                  classIcon="flex justify-center items-center"></button-icon-label>
              </div>
            </DialogTitle>

            <div id="body" class="mt-4" :class="noneHeader ? '!mt-0' : ''">
              <slot></slot>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped></style>
