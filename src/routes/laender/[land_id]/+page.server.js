import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {

    const land = await db.getLand(params.land_id)

    return {
        land,
    }
}

export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();

        const updatedLand = {
            _id: data.get("_id"),
            idCountry: parseInt(data.get("idCountry"), 10) || 0,
            country: data.get("country"),
            continent: data.get("continent"),
            capital: data.get("capital"),
            language: data.get("language"),
            currency: data.get("currency"),
            security: data.get("security"),
            localFood: data.get("localFood"),
            localBeverage: data.get("localBeverage"),
            price: data.get("price"),
        };

        const result = await db.updateLand(updatedLand);

        throw redirect(303, "/laender");
    }
}

