<script>
    import { isAuthenticated } from '$lib/stores/auth';

    let { data } = $props();
</script>

<h1 class="mb-5">Neue Reiseart hinzufügen</h1>

<form method="POST" action="?/create">

    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Reiseart</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="reiseart" required />
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Beschreibung</label>
        <div class="col-sm-10">
            <textarea
                class="form-control"
                rows="2"
                name="text"
                maxlength="150"
                placeholder="Maximal 150 Zeichen"
                required
            ></textarea>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Icon</label>
        <div class="col-sm-10">
            <select class="form-control" name="icon" required>
                <option value="" disabled selected>Bitte wähle ein Icon</option>
    
                <!-- Reisen -->
                <optgroup label="Reisen">
                    <option value='<i class="bi bi-airplane"></i>'>Flugzeug</option>
                    <option value='<i class="bi bi-backpack"></i>'>Rucksack</option>
                    <option value='<i class="bi bi-binoculars"></i>'>Fernglas</option>
                    <option value='<i class="bi bi-geo-alt"></i>'>Reiseziel</option>
                    <option value='<i class="bi bi-luggage"></i>'>Gepäck</option>
                    <option value='<i class="bi bi-sun"></i>'>Sonne</option>
                    <option value='<i class="bi bi-train-front"></i>'>Zug</option>
                    <option value='<i class="bi bi-tree"></i>'>Baum</option>
                    <option value='<i class="bi bi-wifi"></i>'>WLAN</option>
                </optgroup>
    
                <!-- Fahrzeug -->
                <optgroup label="Fahrzeug">
                    <option value='<i class="bi bi-car-front"></i>'>Auto</option>
                    <option value='<i class="bi bi-bus-front"></i>'>Bus</option>
                    <option value='<i class="bi bi-train-front"></i>'>Zug</option>
                    <option value='<i class="bi bi-ev-station"></i>'>Ladestation</option>
                    <option value='<i class="bi bi-fuel-pump"></i>'>Tankstelle</option>
                    <option value='<i class="bi bi-speedometer"></i>'>Tachometer</option>
                    <option value='<i class="bi bi-tools"></i>'>Werkzeuge</option>
                </optgroup>
    
                <!-- Outdoor -->
                <optgroup label="Outdoor">
                    <option value='<i class="bi bi-bicycle"></i>'>Fahrrad</option>
                    <option value='<i class="bi bi-cloud-drizzle"></i>'>Nieselregen</option>
                    <option value='<i class="bi bi-cloud-sun"></i>'>Teilweise bewölkt</option>
                    <option value='<i class="bi bi-mountain"></i>'>Berg</option>
                    <option value='<i class="bi bi-snow"></i>'>Schnee</option>
                    <option value='<i class="bi bi-umbrella"></i>'>Regenschirm</option>
                    <option value='<i class="bi bi-water"></i>'>Wasser</option>
                    <option value='<i class="bi bi-droplet"></i>'>Wassertropfen</option>
                </optgroup>
    
                <!-- Technologie -->
                <optgroup label="Technologie">
                    <option value='<i class="bi bi-cpu"></i>'>Prozessor</option>
                    <option value='<i class="bi bi-display"></i>'>Bildschirm</option>
                    <option value='<i class="bi bi-keyboard"></i>'>Tastatur</option>
                    <option value='<i class="bi bi-camera"></i>'>Kamera</option>
                    <option value='<i class="bi bi-mouse"></i>'>Maus</option>
                    <option value='<i class="bi bi-phone"></i>'>Telefon</option>
                    <option value='<i class="bi bi-router"></i>'>Router</option>
                    <option value='<i class="bi bi-smartwatch"></i>'>Smartwatch</option>
                    <option value='<i class="bi bi-wifi"></i>'>WLAN</option>
                </optgroup>
    
                <!-- Essen -->
                <optgroup label="Essen">
                    <option value='<i class="bi bi-cup-straw"></i>'>Becher mit Strohhalm</option>
                    <option value='<i class="bi bi-egg-fried"></i>'>Spiegelei</option>
                    <option value='<i class="bi bi-cup-hot"></i>'>Heißgetränk</option>
                    <option value='<i class="bi bi-apple"></i>'>Apfel</option>
                    <option value='<i class="bi bi-cake"></i>'>Kuchen</option>
                </optgroup>
            </select>
        </div>
    </div>
    

    <div class="d-flex flex-wrap gap-2 mt-5">
        <a class="btn btn-outline-danger" href="/reisearten" role="button">Abbrechen</a>
        <button type="submit" class="btn btn-outline-success" disabled={!$isAuthenticated}>Hinzufügen</button>
    </div>
</form>
