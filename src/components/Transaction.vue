<script setup lang="ts">
import { Transaction } from '../@types';
import IconArrowIncome from './icons/IconArrowIncome.vue';
import IconArrowExpense from './icons/IconArrowExpense.vue';
import moment from 'moment';

const props = defineProps<{ data: Transaction }>()

</script>
<template>
	<router-link
		:to="`/transaction/${data.slug}`"
		class="flex items-center justify-between bg-white-primary dark:bg-dark-primary border border-white-border dark:border-dark-border rounded-3xl py-3 px-3"
	>
		<div class="flex items-center space-x-2">
			<div class="flex items-center h-12 w-12 rounded-full bg-white dark:bg-dark justify-center">
				<IconArrowIncome v-if="data.amount > 0" />
				<IconArrowExpense v-else />
			</div>
			<div class="flex flex-col">
				<div class="font-semibold text-sm mb-0.5">{{ data.title }}</div>
				<div
					class="text-[0.7rem] text-white-text/70 dark:text-white/70"
				>{{ moment(data.date).format('dddd, MMM D yyyy') }}</div>
			</div>
		</div>
		<div class="font-semibold text-sm">
			<span class="font-light mr-1 text-xs">{{ data.amount > 0 ? '+' : '-' }}</span>
			<span>${{ Math.abs(data.amount) }}</span>
		</div>
	</router-link>
</template>