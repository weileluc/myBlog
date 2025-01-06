import db from "$lib/db.js"

export async function load() {

    return {
        blogs: await db.getBlogs(),
        laender: await db.getLaender(),
    }
}
