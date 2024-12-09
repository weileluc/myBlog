<script>
    import BlogBox from "$lib/components/BlogBox.svelte";

    let { data } = $props();
</script>

<h1>Blog</h1>

{#each data.blogs as blog}
    <BlogBox {blog} />
{/each}