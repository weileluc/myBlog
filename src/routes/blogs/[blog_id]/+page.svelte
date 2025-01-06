<script>
    let { data } = $props();
    let blog = data.blog;
    let laender = data.countries;
    let reisearten = data.reisearten;
</script>

<div class="blog-content-container">
    <div class="blog-header d-flex align-items-center justify-content-between mb-3">
        <button
            class="btn btn-outline-primary d-flex align-items-center"
            aria-label="Go back to blogs"
            onclick={() => history.back()}
        >
            <i class="bi bi-arrow-left me-2"></i> Zurück
        </button>
    
        <div class="blog-meta d-flex align-items-center text-muted">
            <span class="me-3">
                <i class="bi bi-person"></i> <strong>{blog.autor}</strong>
            </span>
            <span class="me-3">
                <i class="bi bi-calendar"></i> {blog.date}
            </span>
            <span>
                <i class="bi bi-clock"></i> {blog.minutes} min Lesezeit
            </span>
        </div>
    </div>
    <div class="row mb-3">
        <h1>{blog.title}</h1>
    </div>
    <div class="row mb-3">
        <b>{blog.subtitle}</b>
    </div>
    <div class="row">
        <div class="d-flex flex-wrap gap-2 mb-3">
            {#each reisearten as reiseart}
                <a
                    href={`/blogs?reiseart=${reiseart.idReiseart}`}
                    class="btn btn-outline-secondary"
                >
                    {reiseart.reiseart}
                </a>
            {/each}
            {#each laender as land}
                <a
                    href={`/blogs?country=${land.idCountry}`}
                    class="btn btn-outline-secondary"
                >
                    {land.country} (Hauptstadt: {land.capital})
                </a>
            {/each}
        </div>
    </div>
    <div class="row blog-content">
        <p>{@html blog.content}</p>
    </div>
    <div class="row g-3">
        {#each blog.images as image}
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="position-relative">
                    <img src={image} alt="" class="img-fluid rounded shadow" />
                </div>
            </div>
        {/each}
    </div>
</div>

