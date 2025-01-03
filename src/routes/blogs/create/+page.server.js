import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        // Inhalt in Absätze aufteilen
        const content = data.get("content");
        const paragraphs = content
            .split(/\n+/) // Split nach einem oder mehreren Zeilenumbrüchen
            .filter((paragraph) => paragraph.trim() !== "") // Entfernt leere Absätze
            .map((paragraph) => `<p>${paragraph.trim()}</p>`); // In <p> Tags einfügen
        const htmlContent = paragraphs.join(""); // Absätze zusammenfügen

        // Datum verarbeiten
        const date = data.get("date"); // Erwartet ein Datum im Format YYYY-MM-DD
        const formattedDate = date.replace(/-/g, ""); // Entfernt Bindestriche, z. B. 20241228

        // Jahr aus dem Datum extrahieren
        const year = date.slice(0, 4); // Extrahiert die ersten vier Zeichen (z. B. "2024")

        // Bilderpfad ergänzen mit Datum
        const images = data.getAll("images").map((image) => {
            if (!image.startsWith(`/images/${formattedDate}/`)) {
                return `/images/${formattedDate}/${image}`;
            }
            return image;
        });

        // Titelbildpfad ergänzen mit Datum
        const titleImage = data.get("titleImage").startsWith(`/images/${formattedDate}/`)
            ? data.get("titleImage")
            : `/images/${formattedDate}/${data.get("titleImage")}`;


        // Kategorie-Länder als Integer-Array
        const categoryCountry = data.getAll("categoryCountry").map((id) => parseInt(id, 10));

        // Kategorie-Reisearten als Integer-Array
        const categoryType = data.getAll("categoryType").map((id) => parseInt(id, 10));

        let blog = {
            _id: data.get("_id"),
            titleImage: titleImage,
            title: data.get("title"),
            subtitle: data.get("subtitle"),
            autor: data.get("autor"),
            date: data.get("date"),
            year: year,
            minutes: data.get("minutes"),
            categoryCountry: categoryCountry,
            categoryType: categoryType,
            content: htmlContent,
            images: images,
        }
        await db.createBlog(blog);

        throw redirect(303, "/blogs");
    }
}

export async function load() {

    return {
        laender: await db.getLaender(),
        reisearten: await db.getReisearten()
    }
}


