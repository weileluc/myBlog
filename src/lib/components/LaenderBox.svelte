<script>
    let { land, blogs } = $props();

    // Function to count blogs that reference the current country's id
    function countBlogsByCountry(countryId) {
        return blogs.filter((blog) => blog.categoryCountry.includes(countryId)).length;
    }

    // Number of blogs for the current country
    let blogCount = countBlogsByCountry(land.idCountry);
</script>

<div class="col">
    <div class="card h-100">
        <!--<img src="/images/20240829/20210907_084805.jpg" class="card-img-top" alt="...">-->
        <div class="card-body">
            <h5 class="card-title">{land.country}</h5>
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
            <a class="link-dark link-underline-opacity-0" href="/blogs">
                <small class="text-body-secondary"
                    >{blogCount} Blogs in {land.country} gefunden</small
                >
            </a>
            <a class="icon-link" href="/blogs" aria-label="Go to blogs">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
</div>
