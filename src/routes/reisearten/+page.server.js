import db from "$lib/db.js"

export async function load() {

    return {
        reisearten: await db.getReisearten(),
        blogs: await db.getBlogs()
    }
}