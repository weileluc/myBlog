<script>
  let { data } = $props();

  const blogs = data.blogs || [];
  const countries = data.laender || [];

  const latestBlogs = [...blogs].sort((a, b) => b.year - a.year).slice(0, 3);

  const visitedCountriesCount = countries.length;

  // Chart
  import { onMount } from "svelte";
  import { Chart, registerables } from "chart.js";
  Chart.register(...registerables);
  let canvas;

  // Zähle Anzahl der Blogs pro Jahr
  function getBlogCountsByYear(blogs) {
    const counts = {};
    blogs.forEach((blog) => {
      const year = blog.year;
      counts[year] = (counts[year] || 0) + 1;
    });

    // Sortiere nach Jahr
    const sortedYears = Object.keys(counts).sort((a, b) => a - b); // Numerische Sortierung
    const sortedCounts = sortedYears.map((year) => counts[year]);

    return { years: sortedYears, counts: sortedCounts };
  }

  const { years, counts } = getBlogCountsByYear(blogs);

  onMount(() => {
    new Chart(canvas, {
      type: "line", // Line Chart für Timeline
      data: {
        labels: years, // Die Jahreswerte
        datasets: [
          {
            label: "Anzahl Blogs",
            data: counts,
            tension: 0.3, // Glatte Linien
            pointRadius: 5, // Punkte auf der Linie hervorheben
            pointHoverRadius: 7,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: "top",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Jahr",
            },
          },
          y: {
            title: {
              display: true,
              text: "Anzahl Blogs",
            },
            beginAtZero: true,
          },
        },
      },
    });
  });
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
    <div class="col-md-6 mb-3">
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
    <div class="col-md-6 mb-3">
      <div class="card text-center">
        <div class="card-body">
          <h3 class="card-title">Anzahl Tage Backpacking</h3>
          <p class="display-4 text-primary">397</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Blog Aktivität -->
<h2 class="mb-3">Blog Aktivität</h2>
<div class="card mb-5">
  <canvas bind:this={canvas}></canvas>
</div>

