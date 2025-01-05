<script>
    let { reiseart, blogs } = $props();

    // Funktion um Blogs zu zählen, welche mit dem Tag Reiseart versehen sind
    function countBlogsByReiseart(reiseartId) {
        return blogs.filter((blog) => blog.categoryType.includes(reiseartId))
            .length;
    }

    // Anzahl von Blogs für die jeweilige Reiseart
    let blogCount = countBlogsByReiseart(reiseart.idReiseart);
</script>

<div class="col">
    <div class="card h-100" style="max-width: 500px;">
        <div class="reiseart-card-main">
            <div class="row">
                <div class="d-flex align-items-center w-100">
                    <h5 class="card-title mb-3">{reiseart.reiseart}</h5>
                    <div class="ms-auto d-flex gap-2 mb-3">
                        <form method="POST" action="?/delete">
                            <input
                                type="hidden"
                                name="id"
                                value={reiseart._id}
                            />
                            <button
                                class="btn btn-outline-danger btn-sm px-2 py-1"
                                aria-label="Löschen"
                            >
                                <i class="bi bi-x"></i>
                            </button>
                        </form>
                        <a
                            class="btn btn-outline-primary btn-sm px-2 py-1"
                            href="/reisearten/{reiseart._id}"
                            aria-label="Bearbeiten"
                        >
                            <i class="bi bi-pencil"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row flex-grow-1">
                <div
                    class="col-2 d-flex justify-content-center align-items-center"
                >
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
            <a
                class="link-dark link-underline-opacity-0"
                href={`/blogs?reiseart=${reiseart.idReiseart}`}
            >
                <small class="text-body-secondary"
                    >{blogCount} Blogs über {reiseart.reiseart} gefunden
                </small>
            </a>
            <a
                class="icon-link"
                href={`/blogs?reiseart=${reiseart.idReiseart}`}
                aria-label="Go to blogs"
            >
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
</div>
