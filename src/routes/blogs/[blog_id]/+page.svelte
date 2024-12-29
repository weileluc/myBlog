<script>
    let { data } = $props();
    let blog = data.blog;
</script>

<div class="blog-content-container">
    <div class="row blog-header">
        <div class="col-auto">
            <a class="icon-link" href="/blogs" aria-label="Go back to blogs">
                <i class="bi bi-arrow-left" style="font-size: 1.5rem;"></i>
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
    <div class="row">
        {#each blog.images as image}
            <img src={image} alt="" class="blog-image" />
        {/each}
    </div>
    <div class="row">
        {#each blog.categoryType as type}
            <p>{type}</p>
        {/each}
    </div>
    <div class="row">
        {#each blog.categoryCountry as country}
            <p>{country}</p>
        {/each}
    </div>
</div>

<style>
</style>
