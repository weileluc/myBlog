<script>
    let { data } = $props();
    let blog = data.blog;
</script>

<div class="blog-content">
    <div class="row blog-header">
        <div class="col-auto">
            <a class="icon-link" href="/blogs" aria-label="Go back to blogs">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/></svg></a>
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
</div>

<style>
</style>
