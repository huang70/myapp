<template>
  <div>
    <CInput v-model:title="parentIn"/>
    <div class="test">
      2222
    </div>
    <div>
    333</div>
  </div>
</template>
<script setup lang="ts">
import CInput from "@/components/CInput.vue";
import { ref, watchEffect } from "vue";
const parentIn = ref("parent");
watchEffect(() => {
  console.log('parentIn',parentIn.value)
})

</script>
<style scoped>
.test:hover{
color: red;
}
.test:after{
color: green;
}
</style>
