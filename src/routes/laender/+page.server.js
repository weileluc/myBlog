import db from "$lib/db.js"

export async function load() {

    return {
        laender: await db.getLaender(),
        blogs: await db.getBlogs()
    }
}