<script>
    import { isAuthenticated, token } from '$lib/stores/auth';

    // Logout-Funktion
    isAuthenticated.set(false);
    token.set(null);

    // Nach dem Logout umleiten
    window.location.href = '/login';
</script>

<h1 class="mb-5">Sie werden abgemeldet...</h1>