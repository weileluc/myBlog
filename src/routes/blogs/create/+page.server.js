import db from "$lib/db.js";
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        // Blog-Datum aus den Formulardaten abrufen
        const blogDate = data.get("date");
        const titleImageFile = data.get("titleImage");

        // Speicherpfad für die hochgeladene Datei
        const dir = path.join(process.cwd(), "static/images", `blog.${blogDate}`);
        await mkdir(dir, { recursive: true }); // Verzeichnis erstellen, falls nicht vorhanden

        // Datei speichern
        const titleImagePath = path.join(dir, titleImageFile.name);
        const titleImageRelativePath = `/images/blog.${blogDate}/${titleImageFile.name}`;
        await writeFile(titleImagePath, Buffer.from(await titleImageFile.arrayBuffer()));

        // Inhalt in Absätze aufteilen
        const content = data.get("content");
        const paragraphs = content
            .split(/\n+/) // Split nach einem oder mehreren Zeilenumbrüchen
            .filter((paragraph) => paragraph.trim() !== "") // Entfernt leere Absätze
            .map((paragraph) => `<p>${paragraph.trim()}</p>`); // In <p> Tags einfügen
        const htmlContent = paragraphs.join(""); // Absätze zusammenfügen
        

        let blog = {
            _id: data.get("_id"),
            titleImage: titleImageRelativePath, // Titelbild-Pfad
            title: data.get("title"),
            subtitle: data.get("subtitle"),
            autor: data.get("autor"),
            date: blogDate,
            minutes: data.get("minutes"),
            categoryCountry: data.getAll("categoryCountry"),
            categoryType: data.getAll("categoryType"),
            content: htmlContent,
            images: data.getAll("images"),
        }
        await db.createBlog(blog);
    }
}

