<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, DialogTitle, } from '@headlessui/vue'
import { reactive, ref, toRaw } from 'vue';
import useDate from '../../helpers/date';
import BaseInput from '../BaseInput.vue';
import BaseTextarea from '../BaseTextarea.vue';
import IconDate from '../icons/IconDate.vue';
import IconClose from '../icons/IconClose.vue';
import { TransactionActionType } from '../../store/modules/transaction/action-types';
import { useStore } from '../../store';
const props = defineProps<{ open: boolean }>();
const emits = defineEmits(['close'])
const { now } = useDate();
const { dispatch } = useStore()
const form = reactive({
	title: '',
	amount: '',
	date: now(),
	description: ''
})
const createTransaction = async (e: any) => {
	await dispatch(`transaction/${TransactionActionType.addTransaction}`, { ...form })
	emits('close', false)
	form.title = ''
	form.amount = ''
	form.date = now()
	form.description = ''
}

</script>
<template>
	<TransitionRoot appear :show="open" as="template">
		<Dialog as="div" @close="emits('close', false)">
			<div class="fixed inset-0 z-10 overflow-y-auto backdrop-blur bg-white/10 dark:bg-dark/10">
				<div class="min-h-screen px-4 text-center">
					<DialogOverlay class="fixed inset-0" />
					<span class="inline-block h-screen align-middle" aria-hidden="true"></span>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-50"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-50"
					>
						<div
							class="inline-block w-full max-w-lg p-4 overflow-hidden text-left transition-all transform bg-white dark:bg-dark rounded-2xl align-middle text-white-text dark:text-white border border-white-border dark:border-dark-border"
						>
							<DialogTitle as="div" class="text-lg font-bold text-center py-2 mb-4 capitalize relative">
								Add Transaction
								<div
									class="absolute right-0 top-2 bottom-2 flex items-center cursor-pointer"
									@click="emits('close', false)"
								>
									<IconClose />
								</div>
							</DialogTitle>
							<form class="space-y-3" @submit.prevent="createTransaction">
								<div>
									<BaseInput v-model.trim="form.title" type="text" id="title" label-name="Title" />
								</div>
								<div class="flex space-x-2 items-end justify-between">
									<div class="basis-1/2">
										<BaseInput
											v-model.number="form.amount"
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
											<BaseInput v-model="form.date" type="date" id="date" class="w-28" />
										</div>
									</div>
								</div>
								<div>
									<BaseTextarea
										v-model="form.description"
										id="description"
										label-name="Description"
										class="h-32"
									/>
								</div>
								<div class="mt-4 flex justify-center">
									<button
										type="submit"
										class="text-center px-5 py-2 text-sm font-medium focus:outline-none bg-white-primary dark:bg-dark-primary rounded-xl"
									>Create</button>
								</div>
							</form>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>