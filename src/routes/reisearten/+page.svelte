<script>
    import ReiseartenBox from "$lib/components/ReiseartenBox.svelte";
  
    let { data } = $props();
  </script>
  
  <div class="row mb-3">
    <div class="col-sm-10">
      <h1>Reisearten</h1>
    </div>
    <div class="col-sm-2">
      <a class="btn btn-outline-success" href="..." role="button"
        >Reiseart hinzufügen</a
      >
    </div>
  </div>
  
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
    {#each data.reisearten as reiseart}
      <ReiseartenBox {reiseart} blogs={data.blogs}/>
    {/each}
  </div>
  