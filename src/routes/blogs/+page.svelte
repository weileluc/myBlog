<script>
    import BlogBox from "$lib/components/BlogBox.svelte";

    let { data } = $props();
</script>

<div class="row mb-3">
    <div class="col-sm-10">
        <h1>Blog</h1>
    </div>
    <div class="col-sm-2">
        <a class="btn btn-outline-success" href="/blogs/create" role="button">Blog hinzufügen</a>
    </div>
</div>

{#each data.blogs as blog}
    <BlogBox {blog} />
{/each}
