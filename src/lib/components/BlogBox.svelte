<script>
    let { blog } = $props();
</script>

<a class="link-dark link-underline-opacity-0" href="/blogs/{blog._id}">
<div class="blogs-box">
    <div class="row">
        <div class="col-lg-5 blogs-image">
            <img src={blog.titleImage} alt="" class="title-image"/>
        </div>
        <div class="col-lg-7 blogs-text">
            <h1>{blog.title}</h1>
            <p>{blog.subtitle}</p>
            <p><b>Autor:</b> {blog.autor}</p>
        </div>
    </div>
</div>
</a>

<style>
</style>
