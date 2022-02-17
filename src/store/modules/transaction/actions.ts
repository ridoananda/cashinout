import { ActionTree } from "vuex";
import { RootState } from "../..";
import { convertToSlug } from "../../../helpers/string";
import { TransactionActionType } from "./action-types";
import { TransactionMutationType } from "./mutation-types";
import { State } from "./state";

export type FormPayload = {
	amount: number,
	date: string,
	title: string,
	slug: string,
	text?: string
}
export const actions: ActionTree<State, RootState> = {
	async [TransactionActionType.fetch]({ commit }, payload: string): Promise<boolean> {
		return true
	},
	async [TransactionActionType.addTransaction]({ commit, state }, payload: FormPayload): Promise<boolean> {
		let { balance, income, expenses } = state;
		if (payload.amount > 0) {
			income = state.income + payload.amount
		} else {
			expenses = state.expenses + payload.amount
		}
		balance = state.balance + payload.amount
		payload.slug = convertToSlug(payload.title)
		commit(TransactionMutationType.ADD_TRANSACTION, payload)
		commit(TransactionMutationType.SET_BALANCE, balance)
		commit(TransactionMutationType.SET_INCOME, income)
		commit(TransactionMutationType.SET_EXPENSES, expenses)
		return true
	},
	async [TransactionActionType.deleteTransaction]({ commit, state }, payload: FormPayload): Promise<boolean> {
		let { balance, income, expenses } = state;
		if (payload.amount > 0) {
			income = state.income - payload.amount
		} else {
			expenses = state.expenses - payload.amount
		}
		balance = state.balance - payload.amount
		commit(TransactionMutationType.DELETE_TRANSACTION, payload)
		commit(TransactionMutationType.SET_BALANCE, balance)
		commit(TransactionMutationType.SET_INCOME, income)
		commit(TransactionMutationType.SET_EXPENSES, expenses)
		return true
	}
}
// export type AugmentedActionContext = {
// 	commit<K extends keyof Mutations>(
// 		key: K,
// 		payload: Parameters<Mutations[K]>[1],
// 	): ReturnType<Mutations[K]>;
// } & Omit<ActionContext<State, RootState>, 'commit'>