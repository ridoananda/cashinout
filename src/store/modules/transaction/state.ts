import { Transaction, Balance, Income, Expenses } from "../../../@types"

export interface State {
	balance: Balance,
	income: Income,
	expenses: Expenses,
	transactions: Transaction[],
}

export const state: State = {
	balance: 0,
	income: 0,
	expenses: 0,
	transactions: []
}