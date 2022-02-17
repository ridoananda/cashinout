<script setup lang="ts">
import IconArrowExpense from '../components/icons/IconArrowExpense.vue';
import IconArrowIncome from '../components/icons/IconArrowIncome.vue';
import IconDate from '../components/icons/IconDate.vue';
import Transaction from '../components/Transaction.vue';
import BaseInput from '../components/BaseInput.vue';
import { computed, reactive, ref } from 'vue';
import NewTransactionModal from '../components/modals/NewTransactionModal.vue';
import useDate from '../helpers/date';
import BaseTextarea from '../components/BaseTextarea.vue';
import { useStore } from '../store';
import { TransactionActionType } from '../store/modules/transaction/action-types';

const { now } = useDate()
const { state, dispatch } = useStore()
const transactionModal = ref(false);
const balance = computed(() => state.transaction.balance)
const income = computed(() => state.transaction.income)
const expenses = computed(() => state.transaction.expenses)
const transactions = computed(() => state.transaction.transactions)

const date = reactive({
	from: now(undefined, -7),
	to: now()
});

const transactionForm = reactive({
	title: '',
	amount: '',
	date: now(),
	description: ''
})
const createTransaction = (e: any) => {
	dispatch(`transaction/${TransactionActionType.addTransaction}`, { ...transactionForm })
	transactionForm.amount = ''
	transactionForm.title = ''
	transactionForm.date = now()
	transactionForm.description = ''
}
</script>
<template>
	<div class="container flex space-x-3">
		<div class="lg:w-8/12 w-full">
			<!-- balance -->
			<div
				class="border-[1.5px] border-white-border dark:border-dark-border rounded-3xl bg-white-primary dark:bg-dark-primary md:w-8/12 lg:w-7/12"
			>
				<div class="flex flex-col p-4 border-b border-white-border dark:border-dark-border">
					<div class="text-xs tracking-widest text-white-text/70 dark:text-white/70">Balance</div>
					<div class="text-xl font-semibold">${{ balance }}</div>
				</div>
				<div class="flex items-center justify-between p-4 space-x-2 overflow-x-auto">
					<div class="flex basis-1/2 items-center space-x-2">
						<div class="flex items-center h-10 w-10 rounded-full bg-white dark:bg-dark justify-center">
							<IconArrowIncome />
						</div>
						<div class="flex flex-col">
							<div class="text-[0.65rem] tracking-widest text-white-text/70 dark:text-white/70">Income</div>
							<div class="font-semibold text-sm truncate">${{ income }}</div>
						</div>
					</div>
					<div class="flex basis-1/2 items-center space-x-2">
						<div class="flex items-center h-10 w-10 rounded-full bg-white dark:bg-dark justify-center">
							<IconArrowExpense />
						</div>
						<div class="flex flex-col">
							<div class="text-[0.65rem] tracking-widest text-white-text/70 dark:text-white/70">Expenses</div>
							<div class="font-semibold text-sm truncate">${{ Math.abs(expenses) }}</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Transaction -->
			<div>
				<div class="flex items-center justify-between mt-6 mb-4">
					<div class="text-lg font-semibold">Transaction</div>
					<div
						class="text-sm py-1.5 px-4 flex items-center bg-white-primary dark:bg-dark-primary rounded-xl cursor-pointer lg:hidden"
						@click="transactionModal = true"
					>
						<span class="font-light mr-1">+</span>
						<span class="font-medium">New</span>
					</div>
				</div>
				<!-- Filter Transaction -->
				<div
					class="flex items-center text-white-text/90 dark:text-white/90 flex-wrap gap-y-2 gap-x-1.5"
				>
					<div
						class="flex items-center font-semibold text-sm space-x-0.5 border border-white-border dark:border-dark-border rounded-xl py-1.5 pl-3"
					>
						<label for="from">
							<IconDate />
						</label>
						<BaseInput v-model="date.from" type="date" id="from" class="w-28" />
					</div>
					<div>-</div>
					<div
						class="flex items-center font-semibold text-sm space-x-0.5 border border-white-border dark:border-dark-border rounded-xl py-1.5 pl-3"
					>
						<label for="to">
							<IconDate />
						</label>
						<BaseInput v-model="date.to" type="date" id="to" class="w-28" />
					</div>
				</div>
				<div class="my-5 flex flex-wrap flex-row">
					<div
						class="flex flex-col w-full md:w-6/12 md:pr-2 pb-3"
						v-for="(transaction, i) in transactions"
						:key="i"
					>
						<Transaction :data="transaction" />
					</div>
				</div>
			</div>
		</div>
		<!-- Add Transaction (DEKSTOP) -->
		<div class="hidden lg:block lg:w-4/12">
			<div class="text-lg font-bold text-center mb-4 capitalize relative">Add Transaction</div>
			<div class="space-y-3">
				<div>
					<BaseInput v-model.trim="transactionForm.title" type="text" id="title" label-name="Title" />
				</div>
				<div class="flex space-x-2 items-end justify-between">
					<div class="basis-1/2">
						<BaseInput
							v-model.number="transactionForm.amount"
							type="number"
							id="amount"
							label-name="Amount"
							placeholder="$"
							step=".01"
						/>
					</div>
					<div class="basis-1/2">
						<label for="date" class="text-sm block mb-3">Date</label>
						<div
							class="flex items-center font-semibold text-sm border border-white-border dark:border-dark-border rounded-xl py-1.5 pl-3 space-x-0.5"
						>
							<label for="to">
								<IconDate />
							</label>
							<BaseInput v-model="transactionForm.date" type="date" id="date" class="w-28" />
						</div>
					</div>
				</div>
				<div>
					<BaseTextarea
						v-model="transactionForm.description"
						id="description"
						label-name="Description"
						class="h-32"
					/>
				</div>
			</div>
			<div class="mt-4 flex justify-center">
				<button
					@click="createTransaction"
					type="button"
					class="text-center px-5 py-2 text-sm font-medium focus:outline-none bg-white-primary dark:bg-dark-primary rounded-xl"
				>Create</button>
			</div>
		</div>
	</div>

	<NewTransactionModal :open="transactionModal" @close="transactionModal = false" />
</template>
