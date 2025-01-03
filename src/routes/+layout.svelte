<script>
    import "./styles.css";
    let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img
                src="/logo.png"
                alt="Logo"
                width="30"
                height="30"
                class="d-inline-block align-text-top -2"
            />
            myBlog</a
        >
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
        >
            <ul class="navbar-nav">
                <li>
                    <a class="nav-link active" href="/">HOME</a>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle active"
                        href="/blogs"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">BLOG</a
                    >
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="/blogs"
                                >Alle Beiträge</a
                            >
                        </li>
                        <li>
                            <a class="dropdown-item" href="/blogs?year=2021">Reise 2021</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/blogs?year=2022">Reise 2022</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/blogs?year=2023">Reise 2023</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/blogs?year=2024">Reise 2024</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="nav-link active" href="/laender">LÄNDER</a>
                </li>
                <li>
                    <a class="nav-link active" href="/reisearten">REISEARTEN</a>
                </li>
                <li>
                    <a class="nav-link active" href="/about">ÜBER MICH</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<img src="/images/layoutMain.jpg" alt="" class="background-image" />

<div class="main-header">
    <a class="link-dark link-underline-opacity-0" href="/" style="text-decoration: none;">
        <p class="layout-title">Luca Weilenmann</p>
        <p class="layout-subtitle">looking for adventure</p>
    </a>
</div>

<div class="container">
    {@render children()}
</div>

<footer class="footer">
    <div class="container footer mt-5">
        <div class="row">
            <div class="col-md-8">
                <nav class="nav flex-column">
                    <a class="nav-link active" href="/">HOME</a>
                    <a class="nav-link active" href="/blogs">BLOG</a>
                    <a class="nav-link active" href="/laender">LÄNDER</a>
                    <a class="nav-link active" href="/reisearten">REISEARTEN</a>
                    <a class="nav-link active" href="/about">ÜBER MICH</a>
                </nav>
            </div>
            <div class="col-md-4 align-self-end">
                <nav class="nav flex-column">
                    <a class="nav-link active" href="/admin">ADMIN</a>
                </nav>
                <p>&copy; 2024 Luca Weilenmann</p>
            </div>
        </div>
    </div>
</footer>
