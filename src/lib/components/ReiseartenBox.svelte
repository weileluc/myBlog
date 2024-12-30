<script>
    let { reiseart, blogs } = $props();

     // Funktion um Blogs zu zählen, welche mit dem Tag Reiseart versehen sind
     function countBlogsByReiseart(reiseartId) {
        return blogs.filter((blog) => blog.categoryType.includes(reiseartId)).length;
    }

    // Anzahl von Blogs für die jeweilige Reiseart
    let blogCount = countBlogsByReiseart(reiseart.idReiseart);
</script>

<div class="col">
    <div class="card h-100 " style="max-width: 500px;">
        <div class="reiseart-card-main">
            <div class="row">
                <h5 class="card-title">{reiseart.reiseart}</h5>
            </div>
            <div class="row flex-grow-1">
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <h1>{@html reiseart.icon}</h1>
                </div>
                <div class="col-10">
                    <div>
                        <p class="mb-0">{reiseart.text}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer mt-auto">
            <a class="link-dark link-underline-opacity-0" href="/blogs">
                <small class="text-body-secondary"
                    >{blogCount} Blogs über {reiseart.reiseart} gefunden</small
                >
            </a>
            <a class="icon-link" href="/blogs" aria-label="Go to blogs">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
</div>
