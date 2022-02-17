export interface Transaction {
	slug: string,
	title: string,
	date: string,
	amount: number,
	text: string,
}
export type Balance = number;
export type Income = number;
export type Expenses = number;