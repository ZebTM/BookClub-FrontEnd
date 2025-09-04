<script lang="ts">
	import "../app.css";
	import { Button } from "$lib/components/ui/button";
	let { children } = $props();
</script>

<nav class="navigation-container">
	<div class="navigation-items">
		<a href="/login"> <Button>Login</Button> </a>
		<a href="/signup"> <Button>Create Account</Button> </a>
	</div>
</nav>

{@render children()}

<style>
	.navigation-container {
		display: flex;
		justify-content: flex-end;
		padding: 1rem;
	}
	
	.navigation-items {
		display: flex;
		gap: 0.5rem;
	}

</style>
