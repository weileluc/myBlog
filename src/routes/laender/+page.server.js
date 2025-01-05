import db from "$lib/db.js"

export async function load() {

    return {
        laender: await db.getLaender(),
        blogs: await db.getBlogs()
    }
}

export const actions = {
    delete: async ({request}) => {
        const data = await request.formData();
        await db.deleteLand(data.get("id"));
    }
}