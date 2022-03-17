<template>
  <div>
    <el-input :modelValue="props.title" placeholder="child" @input="(val) => emit('update:title', val)" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'i am child',
    // validator(value: string) {
    //   // 这个值必须与下列字符串中的其中一个相匹配
    //   return ['success', 'warning', 'danger'].includes(value);
    // },
  },
});
const emit = defineEmits(['update:title']);
</script>

<style scoped></style>
