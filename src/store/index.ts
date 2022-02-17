import { createLogger, createStore, useStore as BaseUseStore } from "vuex";
import { transaction } from './modules/transaction';
import { State } from "./modules/transaction/state";
import createPersistedState from 'vuex-persistedstate';

export interface RootState {
	transaction: State,
}

// const debug = process.env.NODE_ENV !== 'production'
const plugins = false ? [createLogger({})] : [];
plugins.push(createPersistedState({ paths: ['transaction'] }))
const store = createStore<RootState>({
	plugins,
	modules: {
		transaction
	}
})
export default store;
export function useStore() {
	return BaseUseStore()
}