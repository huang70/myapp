<template>
  <div>
    <el-input
      :modelValue="props.title"
      placeholder="child"
      @input="(val) => emit('update:title', val)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "i am child",
  },
});
const emit = defineEmits(["update:title"]);
</script>

<style scoped></style>
