import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        // Generiere die nächste `idReiseart` basierend auf der letzten Position
        const idReiseart = await db.getNextIdFromReisearten();

        let newReiseart = {
            _id: data.get("_id"),
            reiseart: data.get("reiseart"),
            idReiseart: idReiseart,
            text: data.get("text"),
            icon: data.get("icon"),
        }
        await db.createReiseart(newReiseart);

        throw redirect(303, "/reisearten");
    },
}

