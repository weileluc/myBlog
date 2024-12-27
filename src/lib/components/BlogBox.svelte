<script>
    let { blog } = $props();
</script>

<a class="link-dark link-underline-opacity-0" href="/blogs/{blog._id}">
    <div class="blogs-box">
        <div class="row">
            <div class="col-lg-5 blogs-image">
                <img src={blog.titleImage} alt="" class="title-image" />
            </div>
            <div class="col-lg-7 blogs-text">
                <h1>{blog.title}</h1>
                <p>{blog.subtitle}</p>
                <p><b>Autor:</b> {blog.autor}</p>
                <div class="blogs-buttons">
                    <form method="POST" action="?/delete">
                        <input type="hidden" name="id" value={blog._id} />
                        <button class="btn btn-outline-danger btn-sm" on:click|stopPropagation>Löschen</button>
                    </form>
                    <form method="POST" action="?/update">
                        <input type="hidden" name="id" value={blog._id} />
                        <button class="btn btn-outline-success btn-sm" on:click|stopPropagation>Bearbeiten</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</a>

<style>

</style>
