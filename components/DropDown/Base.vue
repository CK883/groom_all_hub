<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import Id from '~/pages/contact/[id].vue';
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  iconTitle: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
  class: {
    type: [String, Object],
    default: '',
  },
  value: {
    type: String || Number,
    default: '',
  },
  menuItemClass: {
    type: [String, Object],
    default: '',
  },
  classValue: {
    type: [String, Object],
    default: '',
  },
  bottom: {
    type: Boolean,
    default: false,
  },
});

function close() {
  // const menu = document.getElementById(props.id);
  // menu.click();
  console.log('close');

}
</script>
<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton :id="id" :class="class" active="!bg-white  !px-4 !py-1 rounded-md border-0"
          class="bg-main-soft/40 text-base-white px-4 !py-1 rounded-md h-[36px]">
          <div class="flex items-center justify-between text-start">
            <div v-if="title || value" class="flex items-center mr-2">
              <span v-if="title" class="line-clamp-1 cursor-pointer mx-1"> <i :class="[iconTitle]" class="mt-1" /> {{ title
                }}</span>
              <span v-if="value" class="line-clamp-1 cursor-pointer" :class="[classValue]">{{ `${value}`
                }}</span>
            </div>
            <i :class="[icon]" class="mt-1" />
          </div>
        </MenuButton>
      </div>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems :id="`menu_$`" :class="[menuItemClass , bottom ? 'bottom-full' : 'origin-top-right']"
        class="absolute right-0 z-10 mt-2 w-56   rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        style="max-height: 300px; overflow-y: auto;">
          <MenuItem disabled v-slot="{ close }">
          <div class="py-1 overflow-y-auto ">
            <slot :close="close" />
          </div>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
