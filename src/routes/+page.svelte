<script>
  let { data } = $props();

  const blogs = data.blogs || [];
  const countries = data.laender || [];

  const latestBlogs = [...blogs].sort((a, b) => b.year - a.year).slice(0, 3);

  const visitedCountriesCount = countries.length;
</script>

<h1 class="mb-5">Willkommen in meinem Blog</h1>

<!-- Einführung -->
<div class="mb-5">
  <h5>
    Hallo! Willkommen in meinem persönlichen Reiseblog. Hier teile ich meine
    Erfahrungen aus der ganzen Welt. Erfahre mehr <a
      href="/about"
      class="link-primary">über mich</a
    > und meine Reiseabenteuer.
  </h5>
</div>

<!-- Letzte drei Blogs -->
<div class="mb-3">
  <h2 class="mb-3">Neueste Blogs</h2>
  <div class="row">
    {#each latestBlogs as blog}
      <div class="col-md-4 mb-3">
        <div class="card h-100">
          <img src={blog.titleImage} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{blog.title}</h5>
            <p class="card-text">{blog.description}</p>
            <p><small class="text-muted">Veröffentlicht: {blog.year}</small></p>
            <a href={`/blogs/${blog._id}`} class="btn btn-outline-primary"
              >Weiterlesen</a
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- Länder und Reisetage -->
<div class="mb-3">
  <h2 class="mb-3">Meine Reisen</h2>
  <div class="row">
    <!-- Besuchte Länder -->
    <div class="col-md-6">
      <a href="/laender" class="clickable-card text-decoration-none">
        <div class="card text-center">
          <div class="card-body">
            <h3 class="card-title">Besuchte Länder</h3>
            <p class="display-4 text-primary">{visitedCountriesCount}</p>
          </div>
        </div>
      </a>
    </div>

    <!-- Reisetage -->
    <div class="col-md-6">
      <div class="card text-center">
        <div class="card-body">
          <h3 class="card-title">Anzahl Tage Backpacking</h3>
          <p class="display-4 text-primary">397</p>
        </div>
      </div>
    </div>
  </div>
</div>
