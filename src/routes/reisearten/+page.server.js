import db from "$lib/db.js"

export async function load() {

    return {
        reisearten: await db.getReisearten(),
        blogs: await db.getBlogs()
    }
}

export const actions = {
    delete: async ({request}) => {
        const data = await request.formData();
        await db.deleteReiseart(data.get("id"));
    }
}