import db from "$lib/db.js"

export async function load({ url }) {
    // Hole die Query-Parameter aus der URL
    const year = url.searchParams.get("year"); // Beispiel: ?year=2021

    // Erstelle die Query-Bedingung basierend auf dem Parameter
    const query = year ? { year: year.toString() } : {}; // Filter nach Jahr, wenn vorhanden

    return {
        blogs: await db.getBlogsByQuery(query) // Nutze die Query-Funktion
    };
}

export const actions = {
    delete: async ({request}) => {
        const data = await request.formData();
        await db.deleteBlog(data.get("id"));
    }
}