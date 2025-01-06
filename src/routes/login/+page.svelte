<script>
  import { isAuthenticated, token } from "$lib/stores/auth";

  let username = "";
  let password = "";

  async function handleLogin(event) {
    event.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
      token.set(result.token); // Speichere das Token
      isAuthenticated.set(true); // Setze Login-Status
      alert("Erfolgreich eingeloggt!");
    } else {
      alert(result.error || "Login fehlgeschlagen.");
    }
  }

  let loggedIn = false;
  $: loggedIn = $isAuthenticated;
</script>

<h1>Admin</h1>

{#if loggedIn}
  <p>Willkommen im Admin-Bereich</p>
  <a href="/logout" class="btn btn-outline-danger"
              >Abmelden</a
            >
{:else}
  <form on:submit={handleLogin}>
    <div class="mb-3 row">
      <label for="" class="col-sm-2 col-form-label">Benutzername</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="username"
          bind:value={username}
          required
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="" class="col-sm-2 col-form-label">Passwort</label>
      <div class="col-sm-10">
        <input
          type="password"
          class="form-control"
          id="password"
          bind:value={password}
        />
      </div>
    </div>
    <button type="submit" class="btn btn-outline-success">Anmelden</button>
  </form>
{/if}
