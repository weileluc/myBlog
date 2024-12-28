import db from "$lib/db.js";

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
        

        let blog = {
            _id: data.get("_id"),
            titleImage: data.get("titleImage"),
            title: data.get("title"),
            subtitle: data.get("subtitle"),
            autor: data.get("autor"),
            date: data.get("date"),
            minutes: data.get("minutes"),
            categoryCountry: data.getAll("categoryCountry"),
            categoryType: data.getAll("categoryType"),
            content: htmlContent,
            images: data.getAll("images"),
        }
        await db.createBlog(blog);
    }
}

   

