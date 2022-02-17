<script setup lang="ts">
const props = defineProps<{ modelValue: string | number, id?: string, labelName?: string }>()
const emits = defineEmits(['update:modelValue'])
const updateInput = (e: any): void => {
	emits('update:modelValue', e.target.value)
}
</script>
<template>
	<label :for="id" v-if="labelName" class="text-sm block mb-3">{{ labelName }}</label>
	<input
		v-bind="$attrs"
		:id="id"
		v-model="modelValue"
		@input="updateInput($event)"
		class="focus:outline-none bg-transparent text-sm"
		:class="{ 'py-2 px-4 rounded-xl border border-white-border dark:border-dark-border w-full': !$attrs.class }"
	/>
</template>
<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
	@apply hidden;
}
input[type="datetime-local"]::-webkit-calendar-picker-indicator {
	@apply text-white !important;
}
input[type="date"]::-webkit-datetime-edit {
	@apply p-0;
}
input[type="datetime-local"]::-webkit-datetime-edit {
	@apply p-0;
}
</style>