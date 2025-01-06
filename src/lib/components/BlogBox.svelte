<script>
    import { isAuthenticated } from '$lib/stores/auth';

    let { blog } = $props();
</script>

<div class="blogs-box">
    <div class="row">
        <div class="col-lg-5 blogs-image">
            <a class="link-dark link-underline-opacity-0" href="/blogs/{blog._id}">
                <img src={blog.titleImage} alt="" class="title-image" />
            </a>
        </div>
        <div class="col-lg-7 blogs-right-box">
            <div class="blogs-text-box">
                <a class="link-dark link-underline-opacity-0" href="/blogs/{blog._id}">
                    <h2>{blog.title}</h2>
                    <p>{blog.subtitle}</p>
                </a>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Autor:</b> {blog.autor}</p>
                </div>
                <div class="col-auto" style="margin-right: 15px;">
                    <form method="POST" action="?/delete">
                        <input type="hidden" name="id" value={blog._id} />
                        <button class="btn btn-outline-danger btn-sm" disabled={!$isAuthenticated}>Löschen</button>
                    </form>
                </div>
                <!--<div class="col-auto">
                    <form method="POST" action="?/update">
                        <input type="hidden" name="id" value={blog._id} />
                        <button class="btn btn-outline-success btn-sm">Bearbeiten</button>
                    </form>
                </div>-->
            </div>
        </div>
    </div>
</div>
