import db from "$lib/db.js"

export async function load() {

    return {
        blogs: await db.getBlogs()
    }
}

export const actions = {
    delete: async ({request}) => {
        const data = await request.formData();
        await db.deleteBlog(data.get("id"));
    }
}