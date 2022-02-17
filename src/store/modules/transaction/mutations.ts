import { MutationTree } from "vuex";
import { Balance, Expenses, Income, Transaction } from "../../../@types";
import { TransactionMutationType as MutationType } from "./mutation-types";
import { State } from "./state";

export const mutations: MutationTree<State> = {
	[MutationType.SET_BALANCE](state: State, payload: Balance): void {
		state.balance = payload
	},
	[MutationType.SET_INCOME](state: State, payload: Income): void {
		state.income = payload
	},
	[MutationType.SET_EXPENSES](state: State, payload: Expenses): void {
		state.expenses = payload
	},
	[MutationType.ADD_TRANSACTION](state: State, payload: Transaction): void {
		state.transactions.unshift(payload)
	},
}
// export type Mutations<S = State> = {
// 	[MutationType.SET_BALANCE](state: State, payload: Balance): void;
// 	[MutationType.SET_INCOME](state: State, payload: Income): void;
// }
