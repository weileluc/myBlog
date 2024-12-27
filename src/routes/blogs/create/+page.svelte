<script>
    let { data } = $props();
</script>

<h1>Neuer Blog hinzufügen</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
        <i>titleImage import</i>
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Titel</label>
        <input type="text" class="form-control" name="title" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Untertitel</label>
        <input type="text" class="form-control" name="subtitle" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Autor</label>
        <input type="text" class="form-control" name="autor" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Datum</label>
        <input type="date" class="form-control" name="date" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Lesezeit in Minuten</label>
        <input type="number" class="form-control" name="minutes" />
    </div>
    <div class="mb-3">
        <i>categoryContry hinzufügen</i>
    </div>
    <div class="mb-3">
        <i>categoryType hinzufügen</i>
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Blog</label>
        <textarea class="form-control" rows="5" name="content"></textarea>
    </div>
    <div class="mb-3">
        <i>images hinzufügen</i>
    </div>
    <button type="submit" class="btn btn-primary">Hinzufügen</button>
</form>
