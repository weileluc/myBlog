<script>
    let {blog} = $props();
</script>

<div class="blog-box">
    <div class="row">
        <div class="col-lg-5 blog-image">
            <img src={blog.titleImage} alt="" class="title-image"/>
        </div>
        <div class="col-lg-7 blog-text">
            <h1><a class="link active" href="/">{blog.title}</a></h1>
            <p>{blog.subtitle}</p>
            <p>{blog.autor}</p>
        </div>
        <p>moin</p>
    </div>
</div>

<style>
</style>
