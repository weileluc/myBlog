<script>
    let { blog } = $props();
</script>

<div class="blogs-box">
    <div class="row">
        <div class="col-lg-5 blogs-image">
            <img src={blog.titleImage} alt="" class="title-image"/>
        </div>
        <div class="col-lg-7 blogs-text">
            <h1><a class="link active" href="/blogs/{blog._id}">{blog.title}</a></h1>
            <p>{blog.subtitle}</p>
            <p>{blog.autor}</p>
        </div>
    </div>
</div>

<style>
</style>
