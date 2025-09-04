<script>
	import { enhance } from "$app/forms";
</script>

<p>Hello from the Login Page</p>

<form method="POST" action="?/login" use:enhance>
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button>Log in</button>
</form>
