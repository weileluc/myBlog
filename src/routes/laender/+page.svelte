<script>
  import LaenderBox from "$lib/components/LaenderBox.svelte";

  let { data } = $props();
</script>

<div class="row mb-3">
  <div class="col-sm-10">
    <h1>Besuchte Länder</h1>
  </div>
  <div class="col-sm-2">
    <a class="btn btn-outline-success" href="/laender/create" role="button"
      >Land hinzufügen</a
    >
  </div>
</div>

<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
  {#each data.laender as land}
    <LaenderBox {land} blogs={data.blogs} />
  {/each}
</div>
