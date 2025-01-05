<script>
    let { data } = $props();

    // Funktion zur Aktualisierung der Sicherheitsstufe
    let securityValue = $state("Mittel bis Hoch");
    const securityLabels = [
        "Sehr Niedrig",
        "Niedrig",
        "Mittel bis Niedrig",
        "Mittel",
        "Mittel bis Hoch",
        "Hoch",
        "Sehr Hoch",
    ];
    function updateSecurity(value) {
        securityValue = securityLabels[value - 1];
    }

    // Funktion zur Aktualisierung des Preisniveaus
    let priceValue = $state("Günstig");
    const priceLabels = [
        "Sehr Günstig",
        "Günstig",
        "Mittel",
        "Teuer",
        "Sehr Teuer",
    ];
    function updatePrice(value) {
        priceValue = priceLabels[value - 1];
    }
</script>

<h1 class="mb-3">Neues Land hinzufügen</h1>

<form method="POST" action="?/create">
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Land</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="country" required />
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Kontinent</label>
        <div class="col-sm-10">
            <select class="form-control" name="continent">
                <option value="" disabled selected
                    >Bitte wählen Sie einen Kontinent</option
                >
                <option value="Afrika">Afrika</option>
                <option value="Antarktis">Antarktis</option>
                <option value="Asien">Asien</option>
                <option value="Europa">Europa</option>
                <option value="Nordamerika">Nordamerika</option>
                <option value="Ozeanien">Ozeanien</option>
                <option value="Südamerika">Südamerika</option>
            </select>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Hauptstadt</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="capital" />
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Sprache</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="language" />
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Währung</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="currency" />
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Sicherheit</label>
        <div class="col-sm-10">
            <input
                type="range"
                class="form-range"
                min="1"
                max="7"
                step="1"
                value="5"
                oninput={(e) => updateSecurity(e.target.value)}
            />
            <div class="d-flex justify-content-between">
                <span class="text-muted">Sehr Niedrig</span>
                <span class="text-muted">Mittel</span>
                <span class="text-muted">Sehr Hoch</span>
            </div>
            <small>(Aktuelle Auswahl: <strong>{securityValue}</strong>)</small>
            <input type="hidden" name="security" value={securityValue} />
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Lokales Essen</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="localFood" />
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Lokales Getränk</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="localBeverage" />
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Preisniveau</label>
        <div class="col-sm-10">
            <input
                type="range"
                class="form-range"
                min="1"
                max="5"
                step="1"
                value="2"
                oninput={(e) => updatePrice(e.target.value)}
            />
            <div class="d-flex justify-content-between">
                <span class="text-muted">Sehr Günstig</span>
                <span class="text-muted">Mittel</span>
                <span class="text-muted">Sehr Teuer</span>
            </div>
            <small>(Aktuelle Auswahl: <strong>{priceValue}</strong>)</small>
            <input type="hidden" name="price" value={priceValue} />
        </div>
    </div>


    <div class="d-flex flex-wrap gap-2 mt-5">
        <a class="btn btn-outline-danger" href="/laender" role="button"
            >Abbrechen</a
        >
        <button type="submit" class="btn btn-outline-success"
            >Land Hinzufügen</button
        >
    </div>
</form>
