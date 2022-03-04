<template>
	<div>
		<el-input v-model="input" placeholder="Please input" />
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const input = ref("");
</script>

<style scoped>
</style>