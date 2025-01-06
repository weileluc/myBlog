<script>
  let { data } = $props();

  const blogs = data.blogs || [];
  const countries = data.laender || [];

  const latestBlogs = [...blogs].sort((a, b) => b.year - a.year).slice(0, 3);

  const visitedCountriesCount = countries.length;

  // Chart
  // Line-Chart für Blog-Aktivität
  import { onMount } from "svelte";
  import { Chart, registerables } from "chart.js";
  Chart.register(...registerables);

  let canvasLine;
  let canvasPie;

  function getBlogCountsByYear(blogs) {
    // Zähle Anzahl der Blogs pro Jahr
    const counts = {};
    blogs.forEach((blog) => {
      const year = blog.year;
      counts[year] = (counts[year] || 0) + 1;
    });

    const sortedYears = Object.keys(counts).sort((a, b) => a - b); // Sortiere nach Jahr
    const sortedCounts = sortedYears.map((year) => counts[year]);

    return { years: sortedYears, counts: sortedCounts };
  }

  const { years, counts } = getBlogCountsByYear(blogs);

  // Pie Chart
  const PieLabels = countries.map((land) => land.country);
  const PieCounts = countries.map((land) => land.blogCount);

  onMount(() => {
    new Chart(canvasLine, {
      type: "line", // Line Chart für Timeline
      data: {
        labels: years,
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
            ticks: {
              stepSize: 1, // Abstand zwischen den Werten auf der Y-Achse
            },
          },
        },
      },
    });
    new Chart(canvasPie, {
      type: "pie",
      data: {
        labels: PieLabels, // Labels aus den Ländernamen
        datasets: [
          {
            label: "Anzahl Blogs",
            data: PieCounts, // Anzahl der Blogs
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)", // Red
              "rgba(54, 162, 235, 0.6)", // Blue
              "rgba(255, 206, 86, 0.6)", // Yellow
              "rgba(75, 192, 192, 0.6)", // Green
              "rgba(153, 102, 255, 0.6)", // Purple
              "rgba(255, 159, 64, 0.6)", // Orange
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top", // Legendenposition
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
  <div class="row">
    <div class="col-md-6">
      <canvas bind:this={canvasLine}></canvas>
    </div>
    <div class="col-md-6">
      <canvas bind:this={canvasPie}></canvas>
    </div>
  </div>
</div>
