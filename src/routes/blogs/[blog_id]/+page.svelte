<script>
    let { data } = $props();
    let blog = data.blog;
    let laender = data.countries;
    let reisearten = data.reisearten;
</script>

<div class="blog-content-container">
    <div class="row blog-header">
        <div class="col-1">
            <button
                class="icon-link btn btn-link"
                aria-label="Go back to blogs"
                onclick={() => history.back()}
                style="background: none; border: none; padding: 0;"
            >
                <i class="bi bi-arrow-left" style="font-size: 1.5rem;"></i>
            </button>
        </div>
        <div class="col-auto">
            <p>Autor: {blog.autor}</p>
        </div>
        <div class="col-auto">
            <p>{blog.date}</p>
        </div>
        <div class="col-auto">
            <p>{blog.minutes} min Lesezeit</p>
        </div>
    </div>
    <div class="row mb-3">
        <h1>{blog.title}</h1>
    </div>
    <div class="row mb-3">
        <b>{blog.subtitle}</b>
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
    <div class="row">
        <h5>Reisearten Tags</h5>
        <div class="d-flex flex-wrap gap-2 mb-3">
            {#each reisearten as reiseart}
                <a
                    href={`/blogs?reiseart=${reiseart.idReiseart}`}
                    class="btn btn-outline-secondary"
                >
                    {reiseart.reiseart}
                </a>
            {/each}
        </div>
    </div>
    <div class="row">
        <h5>Länder Tags</h5>
        <div class="d-flex flex-wrap gap-2 mb-3">
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
</div>

<style>
</style>
