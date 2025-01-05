import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {

    const reiseart = await db.getReiseart(params.reiseart_id)

    return {
        reiseart,
    }
}

export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();

        const updatedReiseart = {
            _id: data.get("_id"),
            idReiseart: parseInt(data.get("idReiseart"), 10) || 0,
            reiseart: data.get("reiseart"),
            text: data.get("text"),
            icon: data.get("icon"),
        };

        const result = await db.updateReiseart(updatedReiseart);

        throw redirect(303, "/reisearten");
    }
}

