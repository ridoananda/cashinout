<script setup lang="ts">
import IconSort from './icons/IconSort.vue';
import IconSunFill from './icons/IconSunFill.vue';
import Logo from './Logo.vue';
import { ref } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, DialogTitle, } from '@headlessui/vue'
import IconClose from './icons/IconClose.vue';
import IconHome from './icons/IconHome.vue';
import IconBookOpen from './icons/IconBookOpen.vue';
import IconUserAdd from './icons/IconUserAdd.vue';
import IconSignIn from './icons/IconSignIn.vue';
import IconMoon from './icons/IconMoon.vue';

const openNavbar = ref(false);
const closeNavbar = () => {
	openNavbar.value = false
}
const darkMode = ref(false)

const theme = localStorage.getItem('theme') || 'dark'
if (theme === 'dark') {
	document.documentElement.classList.add('dark')
	darkMode.value = true
} else {
	document.documentElement.classList.remove('dark')
	darkMode.value = false
}
const changeMode = (mode: string) => {
	localStorage.setItem('theme', mode)
	darkMode.value = !darkMode.value
	setTimeout(() => {
		document.documentElement.classList.toggle('dark')
	}, 600);
}
</script>
<template>
	<!-- Dekstop Version -->
	<div class="hidden md:flex items-center justify-between container py-6 text-gray-500">
		<Logo />
		<div class="flex items-center space-x-8">
			<router-link to="/" class="hover:text-white-text dark:hover:text-white">
				<IconHome />
			</router-link>
			<router-link :to="{ name: 'about' }" class="hover:text-white-text dark:hover:text-white">
				<IconBookOpen />
			</router-link>
			<Transition name="dark-mode" mode="out-in">
				<IconSunFill
					v-if="darkMode"
					class="cursor-pointer text-white-text/80 hover:text-white-text dark:text-gray-400 dark:hover:text-white"
					@click="changeMode('light')"
				/>
				<IconMoon
					v-else
					class="cursor-pointer text-white-text/80 hover:text-white-text dark:text-gray-400 dark:hover:text-white"
					@click="changeMode('dark')"
				/>
			</Transition>
			<div class="flex items-center space-x-4">
				<router-link
					:to="{ name: 'login' }"
					class="py-1.5 px-4 flex items-center rounded-xl bg-white-primary dark:bg-dark-primary text-white-text dark:text-gray-200 hover:text-black dark:hover:text-white font-semibold text-sm"
				>
					<IconSignIn class="mr-1 w-6 h-6" />Sign In
				</router-link>
				<router-link
					:to="{ name: 'register' }"
					class="py-1.5 px-4 flex items-center rounded-xl border-white-border dark:border-dark-border border text-white-text dark:text-gray-200 dark:hover:text-white font-semibold text-sm"
				>
					<IconUserAdd class="mr-1 w-6 h-6" />Sign Up
				</router-link>
			</div>
		</div>
	</div>
	<!-- Mobile Version -->
	<div class="flex items-center justify-between container py-3 md:hidden">
		<div
			class="border border-[#2D2D3B]/20 dark:border-dark-border rounded-lg py-1 px-1 cursor-pointer"
			@click="openNavbar = true"
		>
			<IconSort
				class="text-white-text/80 hover:text-white-text dark:text-gray-300 dark:hover:text-white"
			/>
		</div>
		<Logo />
		<div
			class="border border-[#2D2D3B]/20 dark:border-dark-border rounded-lg py-1 px-1 cursor-pointer"
		>
			<Transition name="dark-mode" mode="out-in">
				<IconSunFill
					v-if="darkMode"
					class="cursor-pointer text-white-text/80 hover:text-white-text dark:text-gray-300 dark:hover:text-white"
					@click="changeMode('light')"
				/>
				<IconMoon
					v-else
					class="cursor-pointer text-white-text/80 hover:text-white-text dark:text-gray-300 dark:hover:text-white"
					@click="changeMode('dark')"
				/>
			</Transition>
		</div>
	</div>

	<TransitionRoot appear :show="openNavbar" as="template">
		<Dialog as="div" @close="closeNavbar">
			<div class="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm">
				<div class="min-h-screen">
					<DialogOverlay class="fixed inset-0" />
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="-translate-x-full"
						enter-to="translate-x-0"
						leave="duration-200 ease-in"
						leave-from="translate-x-0"
						leave-to="-translate-x-full"
					>
						<div
							class="inline-block w-10/12 max-w-md overflow-hidden text-left transition-all transform bg-white dark:bg-dark rounded-tr-4xl rounded-br-4xl h-screen absolute inset-0 border border-l-0 border-white-border dark:border-dark-border"
						>
							<DialogTitle
								@click="closeNavbar"
								as="div"
								class="flex items-center justify-between border-b border-white-border dark:border-dark-border p-4"
							>
								<Logo />
								<IconClose class="cursor-pointer" />
							</DialogTitle>
							<div class="p-4 mt-1 space-y-8 text-gray-500">
								<router-link to="/" class="flex items-center space-x-2.5 outline-none" @click="closeNavbar">
									<IconHome />
									<span class="font-medium">Home</span>
								</router-link>
								<router-link
									:to="{ name: 'about' }"
									class="flex items-center space-x-2.5 outline-none"
									@click="closeNavbar"
								>
									<IconBookOpen />
									<span class="font-medium">About</span>
								</router-link>
								<router-link
									:to="{ name: 'login' }"
									class="flex items-center space-x-2.5 outline-none"
									@click="closeNavbar"
								>
									<IconSignIn />
									<span class="font-medium">Sign In</span>
								</router-link>
								<router-link
									:to="{ name: 'register' }"
									class="flex items-center space-x-2.5 outline-none"
									@click="closeNavbar"
								>
									<IconUserAdd />
									<span class="font-medium">Sign Up</span>
								</router-link>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
<style scoped>
.dark-mode-enter-from {
	@apply transform rotate-90 opacity-0;
}
.dark-mode-leave-to {
	@apply transform rotate-0;
}
.dark-mode-enter-active,
.dark-mode-leave-active {
	@apply transition duration-300;
}
</style>