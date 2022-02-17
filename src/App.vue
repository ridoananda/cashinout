<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
	<Navbar />
	<div class="py-3 lg:py-5">
		<router-view></router-view>
	</div>
</template>

<style>
#app {
	@apply dark:bg-dark bg-white min-h-screen antialiased text-white-text dark:text-white;
}
</style>
