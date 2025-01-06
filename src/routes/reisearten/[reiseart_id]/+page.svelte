<script>
    import { isAuthenticated } from '$lib/stores/auth';

    let { data } = $props();
    let reiseart = data.reiseart;
</script>

<h1 class="mb-5">Reiseart bearbeiten</h1>

<form method="POST" action="?/update">

    
    <input type="hidden" name="_id" value={reiseart._id} />
    <input type="hidden" name="idReiseart" value={reiseart.idReiseart} />


    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Reiseart</label>
        <div class="col-sm-10">
            <input
                type="text"
                class="form-control"
                name="reiseart"
                value={reiseart.reiseart}
                required
            />
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
            >{reiseart.text}</textarea>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="" class="col-sm-2 col-form-label">Icon</label>
        <div class="col-sm-10">
            <select class="form-control" name="icon" required>
                <option value="" disabled selected={!reiseart.icon}>Bitte wähle ein Icon</option>
                <optgroup label="Reisen">
                    <option value='<i class="bi bi-backpack"></i>' selected={reiseart.icon === '<i class="bi bi-backpack"></i>'}>Rucksack</option>
                    <option value='<i class="bi bi-binoculars"></i>' selected={reiseart.icon === '<i class="bi bi-binoculars"></i>'}>Fernglas</option>
                    <option value='<i class="bi bi-geo-alt"></i>' selected={reiseart.icon === '<i class="bi bi-geo-alt"></i>'}>Reiseziel</option>
                    <option value='<i class="bi bi-luggage"></i>' selected={reiseart.icon === '<i class="bi bi-luggage"></i>'}>Gepäck</option>
                    <option value='<i class="bi bi-tree"></i>' selected={reiseart.icon === '<i class="bi bi-tree"></i>'}>Baum</option>
                    <option value='<i class="bi bi-wifi"></i>' selected={reiseart.icon === '<i class="bi bi-wifi"></i>'}>WLAN</option>
                </optgroup>
            
                <optgroup label="Verkehrsmittel">
                    <option value='<i class="bi bi-car-front"></i>' selected={reiseart.icon === '<i class="bi bi-car-front"></i>'}>Auto</option>
                    <option value='<i class="bi bi-bus-front"></i>' selected={reiseart.icon === '<i class="bi bi-bus-front"></i>'}>Bus</option>
                    <option value='<i class="bi bi-train-front"></i>' selected={reiseart.icon === '<i class="bi bi-train-front"></i>'}>Zug</option>
                    <option value='<i class="bi bi-airplane"></i>' selected={reiseart.icon === '<i class="bi bi-airplane"></i>'}>Flugzeug</option>
                    <option value='<i class="bi bi-ev-station"></i>' selected={reiseart.icon === '<i class="bi bi-ev-station"></i>'}>Ladestation</option>
                    <option value='<i class="bi bi-fuel-pump"></i>' selected={reiseart.icon === '<i class="bi bi-fuel-pump"></i>'}>Tankstelle</option>
                    <option value='<i class="bi bi-speedometer"></i>' selected={reiseart.icon === '<i class="bi bi-speedometer"></i>'}>Tachometer</option>
                    <option value='<i class="bi bi-tools"></i>' selected={reiseart.icon === '<i class="bi bi-tools"></i>'}>Werkzeuge</option>
                </optgroup>
            
                <optgroup label="Outdoor">
                    <option value='<i class="bi bi-bicycle"></i>' selected={reiseart.icon === '<i class="bi bi-bicycle"></i>'}>Fahrrad</option>
                    <option value='<i class="bi bi-campfire"></i>' selected={reiseart.icon === '<i class="bi bi-campfire"></i>'}>Lagerfeuer</option>
                    <option value='<i class="bi bi-cloud-drizzle"></i>' selected={reiseart.icon === '<i class="bi bi-cloud-drizzle"></i>'}>Nieselregen</option>
                    <option value='<i class="bi bi-sun"></i>' selected={reiseart.icon === '<i class="bi bi-sun"></i>'}>Sonne</option>
                    <option value='<i class="bi bi-cloud-sun"></i>' selected={reiseart.icon === '<i class="bi bi-cloud-sun"></i>'}>Teilweise bewölkt</option>
                    <option value='<i class="bi bi-snow"></i>' selected={reiseart.icon === '<i class="bi bi-snow"></i>'}>Schnee</option>
                    <option value='<i class="bi bi-tent"></i>' selected={reiseart.icon === '<i class="bi bi-tent"></i>'}>Zelt</option>
                    <option value='<i class="bi bi-umbrella"></i>' selected={reiseart.icon === '<i class="bi bi-umbrella"></i>'}>Regenschirm</option>
                    <option value='<i class="bi bi-water"></i>' selected={reiseart.icon === '<i class="bi bi-water"></i>'}>Wasser</option>
                    <option value='<i class="bi bi-droplet"></i>' selected={reiseart.icon === '<i class="bi bi-droplet"></i>'}>Wassertropfen</option>
                </optgroup>
            
                <optgroup label="Technologie">
                    <option value='<i class="bi bi-cpu"></i>' selected={reiseart.icon === '<i class="bi bi-cpu"></i>'}>Prozessor</option>
                    <option value='<i class="bi bi-display"></i>' selected={reiseart.icon === '<i class="bi bi-display"></i>'}>Bildschirm</option>
                    <option value='<i class="bi bi-keyboard"></i>' selected={reiseart.icon === '<i class="bi bi-keyboard"></i>'}>Tastatur</option>
                    <option value='<i class="bi bi-camera"></i>' selected={reiseart.icon === '<i class="bi bi-camera"></i>'}>Kamera</option>
                    <option value='<i class="bi bi-mouse"></i>' selected={reiseart.icon === '<i class="bi bi-mouse"></i>'}>Maus</option>
                    <option value='<i class="bi bi-phone"></i>' selected={reiseart.icon === '<i class="bi bi-phone"></i>'}>Telefon</option>
                    <option value='<i class="bi bi-router"></i>' selected={reiseart.icon === '<i class="bi bi-router"></i>'}>Router</option>
                    <option value='<i class="bi bi-smartwatch"></i>' selected={reiseart.icon === '<i class="bi bi-smartwatch"></i>'}>Smartwatch</option>
                    <option value='<i class="bi bi-wifi"></i>' selected={reiseart.icon === '<i class="bi bi-wifi"></i>'}>WLAN</option>
                </optgroup>
            
                <optgroup label="Essen">
                    <option value='<i class="bi bi-cup-straw"></i>' selected={reiseart.icon === '<i class="bi bi-cup-straw"></i>'}>Becher mit Strohhalm</option>
                    <option value='<i class="bi bi-egg-fried"></i>' selected={reiseart.icon === '<i class="bi bi-egg-fried"></i>'}>Spiegelei</option>
                    <option value='<i class="bi bi-cup-hot"></i>' selected={reiseart.icon === '<i class="bi bi-cup-hot"></i>'}>Heißgetränk</option>
                    <option value='<i class="bi bi-ice-cream"></i>' selected={reiseart.icon === '<i class="bi bi-ice-cream"></i>'}>Eiscreme</option>
                    <option value='<i class="bi bi-pizza"></i>' selected={reiseart.icon === '<i class="bi bi-pizza"></i>'}>Pizza</option>
                    <option value='<i class="bi bi-apple"></i>' selected={reiseart.icon === '<i class="bi bi-apple"></i>'}>Apfel</option>
                    <option value='<i class="bi bi-cake"></i>' selected={reiseart.icon === '<i class="bi bi-cake"></i>'}>Kuchen</option>
                    <option value='<i class="bi bi-burger"></i>' selected={reiseart.icon === '<i class="bi bi-burger"></i>'}>Burger</option>
                </optgroup>
                
            </select>
        </div>
    </div>
    

    <div class="d-flex flex-wrap gap-2 mt-5">
        <a class="btn btn-outline-danger" href="/reisearten" role="button">Abbrechen</a>
        <button type="submit" class="btn btn-outline-success" disabled={!$isAuthenticated}>Speichern</button>
    </div>
</form>
