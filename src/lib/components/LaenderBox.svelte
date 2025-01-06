<script>
    import { isAuthenticated } from '$lib/stores/auth'; 

    let { land, blogs } = $props();

    // Funktion um Blogs zu zählen, welche mit dem Tag Land versehen sind
    function countBlogsByCountry(countryId) {
        return blogs.filter((blog) => blog.categoryCountry.includes(countryId)).length;
    }

    // Anzahl von Blogs für das jeweilige Land
    let blogCount = countBlogsByCountry(land.idCountry);
</script>

<div class="col">
    <div class="card countries h-100">
        <div class="card-body">
            <div class="row">
                <div class="d-flex align-items-center w-100">
                    <h5 class="card-title">{land.country}</h5>
                    <div class="ms-auto d-flex gap-2">
                        <form method="POST" action="?/delete">
                            <input
                                type="hidden"
                                name="id"
                                value={land._id}
                            />
                            <button
                                class="btn btn-outline-danger btn-sm px-2 py-1"
                                aria-label="Löschen" disabled={!$isAuthenticated}
                            >
                                <i class="bi bi-x"></i>
                            </button>
                        </form>
                        <a
                            class="btn btn-outline-primary btn-sm px-2 py-1"
                            href="/laender/{land._id}"
                            aria-label="Bearbeiten"
                        >
                            <i class="bi bi-pencil"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="countries-card-text">
                <p class="mb-0">Kontinent: {land.continent}</p>
                <p class="mb-0">Hauptstadt: {land.capital}</p>
                <p class="mb-0">Sprache: {land.language}</p>
                <p class="mb-0">Währung: {land.currency}</p>
                <p class="mb-0">Sicherheit: {land.security}</p>
                <p class="mb-0">
                    Spezialitäten: {land.localFood}, {land.localBeverage}
                </p>
                <p class="mb-0">Preisniveau: {land.price}</p>
            </div>
        </div>
        <div class="card-footer">
            <a class="link-dark link-underline-opacity-0" href={`/blogs?country=${land.idCountry}`}>
                <small class="text-body-secondary"
                    >{blogCount} Blogs in {land.country} gefunden </small
                >
            </a>
            <a class="icon-link" href={`/blogs?country=${land.idCountry}`} aria-label="Go to blogs">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
</div>
