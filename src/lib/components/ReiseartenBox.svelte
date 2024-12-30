<script>
    let { reiseart, blogs } = $props();
</script>

<div class="col">
    <div class="card h-100 " style="max-width: 500px;">
        <div class="reiseart-card-main">
            <div class="row">
                <h5 class="card-title">{reiseart.reiseart}</h5>
            </div>
            <div class="row flex-grow-1">
                <div class="col-md-2 d-flex justify-content-center align-items-center">
                    <h1>{@html reiseart.icon}</h1>
                </div>
                <div class="col-md-10">
                    <div>
                        <p class="mb-0">{reiseart.text}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer mt-auto">
            <a class="link-dark link-underline-opacity-0" href="/blogs">
                <small class="text-body-secondary"
                    >... Blogs über {reiseart.reiseart} gefunden</small
                >
            </a>
            <a class="icon-link" href="/blogs" aria-label="Go to blogs">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
</div>
