<template>
  <div>
    <CInputVue v-model:title="state.input"></CInputVue>
    <el-table :data="tableData">
      <el-table-column label="Date" width="180">
        <template #default="myData">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ myData.row.date }}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="state.visible = true">打开弹窗</el-button>
    <CDialog title="弹窗" v-model="state.visible">
      这是一个弹窗
      <template #footer="slotProps">
        <el-button @click="state.visible = false">
          {{ slotProps.item + slotProps.i }}
        </el-button>
      </template>
    </CDialog>
  </div>
</template>
<script setup lang="ts">
import CInputVue from '@/components/CInput.vue';
import CDialog from '@/components/CDialog.vue';
import { reactive } from 'vue';
import { Timer } from '@element-plus/icons-vue';
interface User {
  date: string;
  name: string;
  address: string;
}
const state = reactive({
  visible: false,
  input: 'aa',
});
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>
<style scoped></style>
