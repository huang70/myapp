<template>
  <div>
    <el-dialog v-bind="$attrs">
      <slot></slot>
      <template #footer>
        <span v-for="(item, index) in buttonList" :key="index">
          <slot name="footer" :item="item" :i="index">
            <el-button round>默认按钮</el-button>
          </slot>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

// const props = defineProps({
//   modelValue: Boolean,
//   title: { type: String, fault: '弹窗' },
//   width: { type: [String, Number], required: false },
// });
// const emits = defineEmits(['update:modelValue']);
// watchEffect(() => {
//   console.log('modelValue', props.modelValue);
// });
const buttonList = ['自定义按钮', '取消按钮'];
</script>

<style scoped></style>
