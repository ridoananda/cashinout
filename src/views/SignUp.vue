<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '../components/BaseInput.vue';
const username = ref('')
const password = ref('')
</script>
<template>
	<div class="container lg:w-4/12">
		<div class="border rounded-xl py-4 px-4 border-white-border dark:border-dark-border space-y-3">
			<div>
				<BaseInput v-model="username" label-name="Username" />
			</div>
			<div>
				<BaseInput v-model="password" label-name="Email" type="email" />
			</div>
			<div>
				<BaseInput v-model="password" label-name="Password" type="password" />
			</div>
			<div class="pt-3 flex justify-center">
				<button
					@click="$router.replace('/')"
					type="button"
					class="text-center px-6 py-2 text-sm font-medium focus:outline-none bg-white-primary dark:bg-dark-primary rounded-xl"
				>Register</button>
			</div>
		</div>
	</div>
</template>