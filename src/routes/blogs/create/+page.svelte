<script>
    let { data } = $props();

    let laender = data.laender;
</script>

<h1>Neuer Blog hinzufügen</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="titleImage" class="form-label">Titelbild hochladen</label>
        <input
            type="file"
            class="form-control"
            id="titleImage"
            name="titleImage"
            accept="image/*"
        />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Titel</label>
        <input type="text" class="form-control" name="title" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Untertitel</label>
        <textarea class="form-control" rows="4" name="subtitle"></textarea>
    </div>
    <div class="row">
        <div class="col-sm-4 mb-3">
            <label for="" class="form-label">Autor</label>
            <input type="text" class="form-control" name="autor" />
        </div>
        <div class="col-sm-4 mb-3">
            <label for="date" class="form-label">Datum</label>
            <input type="date" class="form-control" name="date" />
        </div>
        <div class="col-sm-4 mb-3">
            <label for="" class="form-label">Lesezeit in Minuten</label>
            <input type="number" class="form-control" name="minutes" />
        </div>
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Länder auswählen:</label>
        <div class="form-check">
            {#each laender as land}
                <div>
                    <input
                        type="checkbox"
                        class="form-check-input"
                        name="categoryCountry"
                        value={land.idCountry}
                    />
                    <label class="form-check-label" for={land.idCountry}>
                        {land.country}
                    </label>
                </div>
            {/each}
        </div>
    </div>
    <div class="mb-3">
        <i>categoryType hinzufügen</i>
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Blog</label>
        <textarea class="form-control" rows="15" name="content"></textarea>
    </div>
    <div class="mb-3">
        <label for="images" class="form-label">Bilder</label>
        <input
            type="file"
            class="form-control"
            name="images"
            accept="image/*"
            multiple
        />
        <small class="form-text text-muted"
            >Du kannst mehrere Bilder auswählen.</small
        >
    </div>
    <div class="mt-5">
        <a class="btn btn-outline-danger" href="/blogs" role="button"
            >Abbrechen</a
        >
        <button type="submit" class="btn btn-outline-success"
            >Blog Hinzufügen</button
        >
    </div>
</form>
