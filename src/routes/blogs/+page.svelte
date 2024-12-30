<script>
    import BlogBox from "$lib/components/BlogBox.svelte";

    let { data } = $props();
</script>

<div class="row mb-3">
    <div class="col-sm-10">
        <h1>Blog</h1>
    </div>
    <div class="col-sm-2">
        <a class="btn btn-outline-success" href="/blogs/create" role="button"
            >Blog hinzufügen</a
        >
    </div>
</div>

<div class="card" style="background-color: white;">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#"
                    >Alle Beiträge</a
                >
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">...</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-disabled="true">...</a>
            </li>
        </ul>
    </div>
    <div class="card-body">
        {#each data.blogs as blog}
            <BlogBox {blog} />
        {/each}
    </div>
</div>
