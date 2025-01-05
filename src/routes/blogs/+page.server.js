import db from "$lib/db.js"

export async function load({ url }) {
    // Hole die Query-Parameter aus der URL
    const year = url.searchParams.get("year"); // Beispiel: ?year=2021
    const country = url.searchParams.get("country"); // Beispiel: ?country=2
    const reiseart = url.searchParams.get("reiseart"); // Beispiel: ?reiseart=3

    // Erstelle die Query-Bedingung basierend auf dem Parameter
    const query = {};
    if (year) query.year = year.toString(); // Füge das Jahr hinzu, wenn vorhanden
    if (country) query.categoryCountry = { $in: [parseInt(country)] }; // Prüfe, ob das Land im Array enthalten ist
    if (reiseart) query.categoryType = { $in: [parseInt(reiseart)] }; // Prüfe, ob die Reiseart im Array enthalten ist

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