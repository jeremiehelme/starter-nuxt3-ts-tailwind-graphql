
<template>
  <button v-bind="props" class="relative w-fit flex flex-row items-center gap-x-2 text-base leading-md font-base bg-primary hover:bg-secondary border-2 border-transparent hover:border-primary disabled:bg-gray-light text-secondary hover:text-primary transition duration-300  rounded-3xl px-8 py-3">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes } from "vue";

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {}
const props = defineProps<Props>();
</script>