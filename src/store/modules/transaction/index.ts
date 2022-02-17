import { Module } from "vuex"
import { RootState } from "../../index"
import { getters } from "./getters"
import { mutations } from "./mutations"
import { actions } from "./actions"
import { State, state } from "./state"

export const transaction: Module<State, RootState> = {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}