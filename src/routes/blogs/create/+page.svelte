<script>
    let { data } = $props();

    let laender = data.laender;
    let reisearten = data.reisearten;

    //Pflichtfelder
    // svelte-ignore non_reactive_update
        let date = "";
    function isFormValid() {
        return date.trim().length > 0;
    } 

</script>

<h1 class="mb-5">Neuer Blog hinzufügen</h1>

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
        <input
            type="text"
            class="form-control"
            name="title"
            maxlength="90"
            placeholder="Maximal 90 Zeichen"
        />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Untertitel</label>
        <textarea
            class="form-control"
            rows="4"
            name="subtitle"
            maxlength="750"
            placeholder="Maximal 750 Zeichen"
        ></textarea>
    </div>
    <div class="row">
        <div class="col-sm-4 mb-3">
            <label for="" class="form-label">Autor</label>
            <input type="text" class="form-control" name="autor" />
        </div>
        <div class="col-sm-4 mb-3">
            <label for="date" class="form-label">Datum</label>
            <input type="date" class="form-control" name="date" bind:value={date} required/>
        </div>
        <div class="col-sm-4 mb-3">
            <label for="" class="form-label">Lesezeit in Minuten</label>
            <input type="number" class="form-control" name="minutes" />
        </div>
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
        <label for="" class="form-label">Reiseart auswählen:</label>
        <div class="form-check">
            {#each reisearten as reiseart}
                <div>
                    <input
                        type="checkbox"
                        class="form-check-input"
                        name="categoryType"
                        value={reiseart.idReiseart}
                    />
                    <label class="form-check-label" for={reiseart.idReiseart}>
                        {reiseart.reiseart}
                    </label>
                </div>
            {/each}
        </div>
    </div>
    <div class="d-flex flex-wrap gap-2 mt-5">
        <a class="btn btn-outline-danger" href="/blogs" role="button"
            >Abbrechen</a
        >
        <button type="submit" class="btn btn-outline-success" disabled={!isFormValid}
            >Blog Hinzufügen</button
        >
    </div>
</form>

