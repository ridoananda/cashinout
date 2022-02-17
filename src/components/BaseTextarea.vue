<script setup lang="ts">
const props = defineProps<{ modelValue: string | number, id?: string, labelName?: string }>()
const emits = defineEmits(['update:modelValue'])
const updateInput = (e: any): void => {
	emits('update:modelValue', e.target.value)
}
</script>
<template>
	<label :for="id" v-if="labelName" class="text-sm block mb-3">{{ labelName }}</label>
	<textarea
		v-bind="$attrs"
		:id="id"
		v-model="modelValue"
		@input="updateInput($event)"
		class="focus:outline-none bg-transparent text-sm py-3 px-4 rounded-xl border border-white-border dark:border-dark-border w-full resize-none"
	></textarea>
</template>