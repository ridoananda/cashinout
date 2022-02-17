import { GetterTree } from "vuex";
import { RootState } from "../..";
import { Transaction, Balance, Income, Expenses } from "../../../@types"
import { State } from "./state";

export const getters: GetterTree<State, RootState> & Getters = {
	balance: (state) => state.balance,
	income: (state) => state.income,
	expenses: (state) => state.expenses,
	transactionType: (state) => (amount: number) => amount > 0 ? '+' : '-',
	transactions: (state) => state.transactions,
}

export interface Getters {
	balance(state: State): Balance,
	income(state: State): Income,
	expenses(state: State): Expenses,
	transactions(state: State): Transaction[],
}

