<script>
    import BlogBox from "$lib/components/BlogBox.svelte";
    import { page } from '$app/stores';

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
        <ul class="nav nav-tabs card-header-tabs custom-tabs">
            <li class="nav-item">
                <a class="nav-link {(!$page.url.searchParams.get('year') && !$page.url.searchParams.get('country') && !$page.url.searchParams.get('reiseart')) ? 'active' : ''}" href="/blogs"
                    >Alle Beiträge</a
                >
            </li>
            <li class="nav-item">
                <a class="nav-link {$page.url.searchParams.get('year') === '2021' ? 'active' : ''}"
                    href="?year=2021">Reise 2021</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {$page.url.searchParams.get('year') === '2022' ? 'active' : ''}"
                    href="?year=2022">Reise 2022</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {$page.url.searchParams.get('year') === '2023' ? 'active' : ''}"
                href="?year=2023">Reise 2023</a>
            </li>
            <li class="nav-item">
                <a class="nav-link {$page.url.searchParams.get('year') === '2024' ? 'active' : ''}"
                href="?year=2024">Reise 2024</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled {(!$page.url.searchParams.get('year') && ($page.url.searchParams.get('country') || $page.url.searchParams.get('reiseart'))) ? 'active' : ''}" href="/blogs">
                    Filter
                </a>
            </li>
        </ul>
    </div>
    <div class="card-body">
        {#each data.blogs as blog}
            <BlogBox {blog} />
        {/each}
    </div>
</div>
