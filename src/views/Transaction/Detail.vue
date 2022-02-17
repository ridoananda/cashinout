<script setup lang="ts">
import moment from 'moment';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../../store';
const { state, getters } = useStore()
const transactionType = (amount: number) => getters['transaction/transactionType'](amount)
const route = useRoute()
const transaction = state.transaction.transactions.find((transaction: any) => transaction.slug === route.params.slug)
</script>
<template>
	<div class="container">
		<div class="font-semibold">{{ transaction.title }}</div>
		<div class="text-xs lg:text-sm opacity-80 mt-1">
			Status :
			<span
				:class="transactionType(transaction.amount) == '+' ? 'text-green-500' : 'text-red-500'"
			>{{ `${transactionType(transaction.amount)}$${Math.abs(transaction.amount)}` }}</span>
			on {{ moment(transaction.date).format('dddd, MMM D yyyy') }}
		</div>
		<div class="text-sm lg:text-base leading-relaxed mt-3">{{ transaction.description }}</div>
	</div>
</template>