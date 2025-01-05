import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        // Generiere die nächste `idCountry` basierend auf der letzten Position
        const idCountry = await db.getNextIdFromLaender();

        let land = {
            _id: data.get("_id"),
            idCountry: idCountry,
            country: data.get("country"),
            continent: data.get("continent"),
            capital: data.get("capital"),
            language: data.get("language"),
            currency: data.get("currency"),
            security: data.get("security"),
            localFood: data.get("localFood"),
            localBeverage: data.get("localBeverage"),
            price: data.get("price"),
        }
        await db.createLand(land);

        throw redirect(303, "/laender");
    }
}